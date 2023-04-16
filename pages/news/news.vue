<template>
	<view class="bg">
		<button @click="testTcp" class="button">测试远端服务接口</button>
		<view>
			<view class="wrapper">
				<view class="header-wrapper">
					<view class="header-title"><text class="text-bottle">水桶实时监控</text></view>
					<view class="header-title">
						<view class="container">
							<image class="icon" src="/static/images//shebei_32.png" />
							<text class="text">当前设备号:
								<text class="text-net">{{ deviced }}</text>
							</text>
						</view>
					</view>
					<view class="header-title">
						<view class="container">
							<image class="icon" src="/static/images//yewei.png" />
							<text class="text">水桶液位高度:
								<text class="text-net">{{ Level }}</text>%
							</text>
						</view>
					</view>
					<view class="header-title">
						<view class="container">
							<image class="icon" src="/static/images//status_32.png" />
							<text class="text">状态码:
								<text class="text-net">{{ status }}</text>
							</text>
						</view>
					</view>
					<view class="header-title">
						<view class="container">
							<image class="icon" src="/static/images//time1.png" />
							<text class="text">时间:
								<text class="text-net">{{ createtime }}</text>
							</text>
						</view>
					</view>
				</view>

				<!-- 	<view>Original Jpeg</view>
				<view>
					<image :src="imageSrc"/>
				</view>
				<view>After Treating</view>
				<view>
					<image :src="imageDo"/>
				</view> -->

				<view class="img_container">
					<view class="img_image-container">
						<view class="img_title">Src Image</view>
						<image :src="imageSrc" alt="Image 1" />
					</view>
					<view class="img_image-container">
						<view class="img_title">After treating</view>
						<image :src="imageDo" alt="Image 2" />
					</view>
				</view>

			</view>
		</view>
	</view>


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

	//const getstream = require("@/utils/api.js")

	const deviceSubTopic = "/mqtt/test"; //  设备订阅topic（小程序发布命令topic）
	const devicePubTopic = "/mqtt/test"; //  设备发布topic（小程序订阅数据topic）
	const deviceSubCamera = "smartwater/opencv/end";

	/********************* 一般不用动这些 ********************/

	const mpSubTopic = devicePubTopic;
	const mpPubTopic = deviceSubTopic;
	export default {
		data() {
			return {
				client: {},
				endVal: 5000.55,
				autoplay: false,
				deviced: "桂林x号机",
				Level: 0.01,
				status: 666,
				createtime: "xxxx-xx-xx xx:xx:xx",
				imageSrc: '', //处理前
				imageDo: '', //处理后
				intervalId: null // 计时器ID
			};
		},
		methods: {
			testTcp() {
				var that = this;
				that.client.publish(
					mpPubTopic,
					'{"target":"test","value":1}',
					function(err) {
						if (!err) {
							console.log("测试mqtt/test话题上传服务器");
						}
					}
				);
			},
			startStreaming() {
				uni.request({
					url: 'https://www.qzwxixi.cn/opencv/src',
					responseType: 'arraybuffer',
					success: res => {
						const base64 = uni.arrayBufferToBase64(res.data)
						this.imageSrc = 'data:image/jpeg;base64,' + base64
						//console.log(res)
						this.startStreaming() // 继续请求图片流

					}
				})
			},
			DoStreaming() {
				uni.request({
					url: 'https://www.qzwxixi.cn/opencv/end',
					responseType: 'arraybuffer',
					success: res => {
						const base64 = uni.arrayBufferToBase64(res.data)
						this.imageDo = 'data:image/jpeg;base64,' + base64
						//console.log(res)
						this.DoStreaming() // 继续请求图片流

					}
				})
			}
		},
		mounted() {
			this.startStreaming()
			this.DoStreaming()
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
					that.client.subscribe(deviceSubCamera, function(err) {
						if (!err) {
							console.log("成功订阅摄像头数据Topic!");
							wx.showToast({
								title: "订阅成功",
								icon: "success",
								mask: true,
							});
						}
					});
				}, 1000);
			});

			that.client.on("message", function(topic, message) { //监听客户端（client）收到新消息（message）的事件。
				// message是16进制的Buffer字节流
				let dataFromDev = {};
				dataFromDev = JSON.parse(message);
				that.deviced = dataFromDev.deviceid;
				that.Level = dataFromDev.Level;
				that.status = dataFromDev.status;
				that.createtime = dataFromDev.createtime;

			});

		},
		beforeDestroy() {
			// 销毁计时器以避免内存泄漏
			clearInterval(this.intervalId);
		}

	}
</script>

<style lang="scss" scoped>
	@import "../index/index.scss"; //引入方式
	@import "../index/bg.scss";
	@import "../news/img.scss";

	.content {
		text-align: center;
		height: 400upx;
		word-break: break-all;
	}

	.nop {
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.button {
		background-color: green;
		/* Green */
		margin-top: 15px;
		color: white;
		text-align: center;
		text-decoration: none;
		font-size: 15px;
	}
</style>
