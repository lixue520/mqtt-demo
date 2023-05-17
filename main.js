import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import store from './store/index.js'


// 引入封装后的axios
import axios from './utils/http.js'
/**
 * 给Vue函数添加一个原型属性$axios 指向Axios
 * 这样做的好处是在vue实例或组件中不用再去重复引用Axios 直接用this.$axios就能执行axios 方法了
 * 在.vue中使用，this.$axios.get
 * @param {Object} config
 */
Vue.prototype.$axios = axios
Vue.prototype.$store = store
axios.defaults.adapter = function(config) {
    return new Promise((resolve, reject) => {
        console.log(config)
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };

                settle(resolve, reject, response);
            }
        })
    })
}


Vue.config.productionTip = false
Vue.use(uView)
App.mpType = 'app'

// 调用setConfig方法，方法内部会进行对象属性深度合并，可以放心嵌套配置
// 需要在Vue.use(uView)之后执行
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		radio: {
			size: 15
		}
		// 其他组件属性配置
		// ......
	}
})

const app = new Vue({
	store,
	...App
})
app.$mount()
