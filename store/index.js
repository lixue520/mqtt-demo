import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: { // 用来缓存数据
		userName: '', //用户名
		password: '', //密码
		bottle: 0, //水桶液位，ESP32-CAM采集->SpringBoot处理，再pub然后sub获得
		hasLogin: false
	},
	mutations: { // 事件
		login(state, name, password) { //登录成功修改 全局变量
			state.userName = name;
			state.password = password;
			state.hasLogin = true;
		},
		checkboottle(state, bootle_value) { //从外部获取数据后供给其他页面显示
			state.bottle = bootle_value
		},
		loginOut(state) { //退出登录修改 全局变量
			state.userName = '';
			state.password = '';
			state.hasLogin = false;
		}

	},
	actions: {
		init(){
			this.commit('checkboottle',0)
		},
		set_bottle(data){
			this.commit('checkboottle',data)
		}
	},
	modules: {}
})

export default store
