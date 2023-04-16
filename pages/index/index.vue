<template>
	<view class="bg">
		<view class="wrapper">
			<view class="header-wrapper">
				<view class="header-title">
					<view class="container">
						<image class="icon" src="/static/images/nwt.png" />
						<text class="text">网络状态:
							<text class="text-net">{{ net }}</text>
						</text>
					</view>
				</view>
				<view class="header-title">
					<view class="container">
						<image class="icon" src="/static/images/ysj.png" />
						<text class="text">当前设备号:
							<text class="text-data">{{ Device_ID }}</text>
						</text>
					</view>
				</view>
				<view class="header-title">
					<view class="container">
						<image class="icon" src="/static/images/yewei.png" />
						<text class="text">水箱液位高度:
							<text class="text-data">{{ Height}}</text>mm
						</text>
					</view>
				</view>
				<view class="header-title">
					<view class="container">
						<image class="icon" src="/static/images/PH.png" />
						<text class="text">PH:
							<text class="text-data">{{ PH}}</text>
						</text>
					</view>
				</view>
				<view class="header-title">
					<view class="container">
						<image class="icon" src="/static/images/Temp.png" />
						<text class="text">Temp:
							<text class="text-data">{{ temp}}</text>°C
						</text>
					</view>
				</view>
				<view class="header-title">
					<view class="container">
						<image class="icon" src="/static/images/TDS.png" />
						<text class="text">TDS:
							<text class="text-data">{{ TDS}}</text>ppm
						</text>
					</view>
				</view>
				<view class="header-title">
					<view class="container">
						<image class="icon" src="/static/images/ll.png" />
						<text class="text">
							出水流量:
							<text class="text-data">{{ flow }}</text>
							L/min
						</text>
					</view>
				</view>
				<view class="header-title">
					<span></span>
				</view>
			</view>
			<view class="body-wrapper">
				<view class="body">
					<view class="data-wrapper">
						<view class="data">
							<image class="data-logo" src="/static/images/pump.png" />
							<view class="data-text">
								<view class="data-title">水泵L</view>
								<view class="data-value">
									<switch @change="onPumpChange" :checked="Pump" color="#3d7ef9" />
								</view>
							</view>
						</view>
						<view style="margin-left: 10px;"></view>
						<view class="data">
							<image class="data-logo" src="/static/images/pump2.png" />
							<view class="data-text">
								<view class="data-title">水泵R</view>
								<view class="data-value">
									<switch @change="onPumpChange" :checked="Pump" color="#3d7ef9" />
								</view>
							</view>
						</view>

					</view>
				</view>

			</view>
			<view class="body-wrapper">
				<view class="body">
					<view class="data-wrapper">

						<view class="data">
							<image class="data-logo" src="/static/images/dcfa1.png" />
							<view class="data-text">
								<view class="data-title">出水阀门L</view>
								<view class="data-value">
									<switch @change="onPumpChange" :checked="Pump" color="#3d7ef9" />
								</view>
							</view>
						</view>
						<view style="margin-left: 10px;"></view>
						<view class="data">
							<image class="data-logo" src="/static/images/dcfa.png" />
							<view class="data-text">
								<view class="data-title">出水阀门R</view>
								<view class="data-value">
									<switch @change="onPumpChange" :checked="Pump" color="#3d7ef9" />
								</view>
							</view>
						</view>

					</view>
				</view>
			</view>
			<view class="body-wrapper">
				<view class="body">
					<view class="data-wrapper">
						<view class="data">
							<image class="data-logo" src="/static/images/beep.png" />
							<view class="data-text">
								<view class="data-title">报警</view>
								<view class="data-value">
									<switch @change="onBeepChange" :checked="Beep" color="#3d7ef9" />
								</view>
							</view>
						</view>
						<view style="margin-left: 10px;"></view>
						<view class="data">
							<image class="data-logo" src="/static/images/ziwaixian.png" />
							<view class="data-text">
								<view class="data-title">紫外线消杀</view>
								<view class="data-value">
									<switch @change="disinfect" :checked="Pump" color="#3d7ef9" />
								</view>
								<!-- <view class="data-value">
									<button class="button" @click="disinfect">紫外线消杀</button>  
								</view> -->
							</view>
						</view>

					</view>
				</view>
			</view>
			<!-- <view class="nop"></view> -->
		</view>
		<view>
			<view class="wrapper-py">
				<view class="header-wrapper-py">
					<view class="header-title-py">
						<view class="container">
							<image class="icon" src="/static/images/sf.png" />
							<text class="text">用户ID:
								<text class="text-data">{{ ID }}</text>
							</text>
						</view>
					</view>
					<view class="header-title-py">
						<view class="container">
							<image class="icon" src="/static/images/user.png" />
							<text class="text">用户名:
								<text class="text-data">{{ UserName }}</text>
							</text>
						</view>
					</view>
					<view class="header-title-py">
						<view class="container">
							<image class="icon" src="/static/images/ed.png" />
							<text class="text">用户余额:

								<text class="text-data">{{ surplus }}</text>
								元
							</text>
						</view>
					</view>
					<view class="header-title-py">
						<view class="container">
							<image class="icon" src="/static/images/time1.png" />

							<text class="text">用时:

								<text class="text-data">{{ time }}</text>
								s
							</text>
						</view>
					</view>
					<view class="header-title-py">
						<view class="container">
							<image class="icon" src="/static/images/zs.png" />
							<text class="text">出水总量:

								<text class="text-data">{{ total}}</text>
								L</text>
						</view>
					</view>
					<view class="header-title-py">
						<span></span>
					</view>
					<button class="button" @click="onwepay">IC卡充值</button>
					<button class="button" @click="onICpay">余额支付</button>
				</view>
			</view>
		</view>


	</view>
	<!-- 	<view class="content">
		<button @click="connect" type="primary">connect</button>
		<view class="log">
			<view v-for="(log,index) in logs" class="" :key="index">
				{{log}}
			</view>
		</view>
	</view> -->

</template>

<script>
	import {
		v4
	} from 'uuid';
	import { //这里好像不支持{a,b},有点离谱
		MQTT_IP
	} from '@/utils/mqtt.js';
	import {
		MQTT_OPTIONS
	} from '@/utils/mqtt.js';
	import {
		connect
	} from "mqtt/dist/mqtt.js";

	const deviceSubTopic = "smartwater/sub"; //  设备订阅topic（小程序发布命令topic）
	const devicePubTopic = "smartwater/pub"; //  设备发布topic（小程序订阅数据topic）

	/********************* 一般不用动这些 ********************/

	const mpSubTopic = devicePubTopic;
	const mpPubTopic = deviceSubTopic;
	// 1.导入组件

	export default {
		data() {
			return {
				client: {},
				Height: "0", //液位
				flow: "0", //流量
				Beep: "0",
				Pump: "0",
				UserName: "xx",
				PH: "xx", //PH
				temp: "xx", //温度
				TDS: "xx", //浊度
				password: "xx",
				Device_ID: "0",
				net: "网络通信良好", //下位机通信测试
				ID: "xx", //用户ID
				surplus: "0", //余额
				total: "0", //出水总量
				time: "0", //用时
				logs: [],
				topic: 'presence', //要订阅的主题
				isRed: false
			}
		},
		mounted() {
			// this.connect() //连接
		},
		computed: {
			// btnStyle() {
			// 	return {
			// 		backgroundColor: this.isRed ? 'red' : 'green'
			// 	}
			// }
		},
		methods: {
			onPumpChange(event) {
				var that = this;
				console.log(event.mp.detail);
				let sw = event.mp.detail.value;
				that.Led = sw;
				if (sw) {
					that.client.publish(
						mpPubTopic,
						'{"target":"Pump","value":1}',
						function(err) {
							if (!err) {
								console.log("成功下发命令——打开水泵");
								wx.showToast({
									title: "指令下发成功",
									icon: "success",
									mask: true,
								});
							}
						}
					);
				} else {
					that.client.publish(
						mpPubTopic,
						'{"target":"Pump","value":0}',
						function(err) {
							if (!err) {
								console.log("成功下发命令——关闭水泵");
								wx.showToast({
									title: "指令下发成功",
									icon: "success",
									mask: true,
								});
							}
						}
					);
				}
			},
			onBeepChange(event) {
				var that = this;
				console.log(event.mp.detail);
				let sw = event.mp.detail.value;
				that.Beep = sw;
				if (sw) {
					that.client.publish(
						mpPubTopic,
						'{"target":"BEEP","value":1}',
						function(err) {
							if (!err) {
								console.log("成功下发命令——打开报警器");
								wx.showToast({
									title: "指令下发成功",
									icon: "success",
									mask: true,
								});
							}
						}
					);
				} else {
					that.client.publish(
						mpPubTopic,
						'{"target":"BEEP","value":0}',
						function(err) {
							if (!err) {
								console.log("成功下发命令——关闭报警器");
								wx.showToast({
									title: "指令下发成功",
									icon: "success",
									mask: true,
								});
							}
						}
					);
				}

			},
			onwepay() {
				var that = this;
				that.client.publish(
					mpPubTopic,
					'{"target":"pay","value":0}',
					function(err) {
						if (!err) {
							console.log("成功下达命令——微信支付");
							wx.showToast({
								title: "功能未开通",
								icon: "error",
								mask: true,
							});
						}
					}
				);
			},
			disinfect() {
				wx.showToast({
					title: "指令下发成功",
					icon: "success",
					mask: true,
				});
			},
			onICpay() {
				var that = this;
				that.client.publish(
					mpPubTopic,
					'{"target":"pay","value":0}',
					function(err) {
						if (!err) {
							console.log("成功下达命令——余额支付");
							wx.showToast({
								title: "功能未开通",
								icon: "error",
								mask: true,
							});
						}
					}
				);

			}

		},
		onShow() { //用于网络连接
			var that = this;
			wx.showToast({
				title: "连接服务器....",
				icon: "loading",
				duration: 10000,
				mask: true,
			});
			let second = 10;
			var toastTimer = setInterval(() => {
				second--;
				if (second) {
					wx.showToast({
						title: `连接服务器...${second}`,
						icon: "loading",
						duration: 1000,
						mask: true,
					});
				} else {
					clearInterval(toastTimer);
					wx.showToast({
						title: "连接失败",
						icon: "error",
						mask: true,
					});
				}
			}, 1000);

			MQTT_OPTIONS.clientId = new Date().getTime();;
			that.client = connect('wxs://' + MQTT_IP, MQTT_OPTIONS);
			that.client.on("connect", function() {
				console.log("成功连接mqtt服务器！");
				clearInterval(toastTimer);
				wx.showToast({
					title: "连接成功",
					icon: "success",
					mask: true,
				});
				// 一秒后订阅主题
				setTimeout(() => {
					that.client.subscribe(mpSubTopic, function(err) {
						if (!err) {
							console.log("成功订阅设备上行数据Topic!");
							wx.showToast({
								title: "订阅成功",
								icon: "success",
								mask: true,
							});
						}
					});
				}, 1000);
			});

			that.client.on("message", function(topic, message) {
				console.log(topic);
				// message是16进制的Buffer字节流
				let dataFromDev = {};
				dataFromDev = JSON.parse(message);
				console.log(dataFromDev);
				that.Height = dataFromDev.Height;
				that.flow = dataFromDev.flow;
				that.Device_ID = dataFromDev.Devicd; //可以用来测试
				that.ID = dataFromDev.ID;
				that.UserName = dataFromDev.name;
				that.surplus = dataFromDev.money;
				that.password = dataFromDev.password;
				//that.time=dataFromDev.time;
				//that.total=(dataFromDev.flow)*time;//流量*时间
			});
		},

	}
</script>

<style lang="scss" scoped>
	@import "@/pages/index/index.scss"; //引入方式
	@import "./pay.scss";
	@import "./bg.scss"
</style>
