export const MQTT_IP = 'www.qzwxixi.cn/mqtt'//mqtt地址端口
const MQTT_USERNAME = 'admin'//mqtt用户名
const MQTT_PASSWORD = 'qinzhiwei123'//密码
const Image_Url = "www.qzwxixi.cn/image/"

export const MQTT_OPTIONS = {
    connectTimeout: 4000,
    clientId: '',
    username: MQTT_USERNAME,
    password: MQTT_PASSWORD,
    clean: false
}


/******************* 必须要改！！不然得不到天气！！ ******************/
const hefengKey = "6d465b43dd6358f7e8c8ababcf846f25"; //  和风天气Web api的key


const hefengVIP = false; //  和风天气是免费的api（false）还是付费api（true）



const hefengApi = "https://api.qweather.com/v7"; //  和风天气付费API前缀
const hefengFreeApi = "https://devapi.qweather.com/v7"; //  和风天气免费API前缀

const hefengWeather = `${hefengVIP ? hefengApi : hefengFreeApi}/weather/now?`; //  和风天气实时天气api
const hefengAir = `${hefengVIP ? hefengApi : hefengFreeApi}/air/now?`; //  和风天气空气质量api

const geoApi = "https://restapi.amap.com/v3/ip?ip=114.247.50.2&output=xml&key=f92e9cda6de0038c372d88d180446a3a"; //  地理位置api（用来获取经纬度对应的城市/城区名字）
/**
 * mqtt里面的clientId用uuid生成唯一标识码，
 * 防止不同页面订阅不同主题时数据出现粘连。
 */

/**
 * var self = this
				self.logs.push('connect')
				var mqtt = require('mqtt/dist/mqtt.js')
				// #ifdef H5
				var client = mqtt.connect('ws://www.qzwxixi.cn/mqtt')
				// #endif
				// #ifdef MP-WEIXIN||APP-PLUS
				var client = mqtt.connect('wxs://www.qzwxixi.cn/mqtt')
				// #endif
				client.on('connect', function() {
					self.logs.push('on connect')
					client.subscribe('presence', function(err) {
						if (!err) {
							client.publish('presence', 'hello mqtt')
						}
					})
				}).on('reconnect', function() {
					self.logs.push('on reconnect')
				}).on('error', function() {
					self.logs.push('on error')
				}).on('end', function() {
					self.logs.push('on end')
				}).on('message', function(topic, message) {
					console.log(message)
					self.logs.push(message.toString())
				})
			}
 */