<template>
	<view class="bg">
		<view class="wrapper">
			<view class="header-wrapper">
				<view class="header-title">
					<view class="container">
						<image class="icon" src="/static/images/nwt.png" />
						<text class="text">
							网络状态:
							<text :class="[net_flag === 0 ? 'text-net-error' : 'text-net']">{{ net }}</text>
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
						<text class="text">水箱1液位高度:
							<text class="text-data">{{ Height}}</text>cm
						</text>
					</view>
				</view>
				<view class="header-title">
					<view class="container">
						<image class="icon" src="/static/images/yewei.png" />
						<text class="text">水箱2液位高度:
							<text class="text-data">{{ Height1}}</text>cm
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
									<switch @change="onChange($event, 'Pump',Pump)" :checked="Pump" color="#3d7ef9" />
								</view>
							</view>
						</view>
						<view style="margin-left: 10px;"></view>
						<view class="data">
							<image class="data-logo" src="/static/images/pump2.png" />
							<view class="data-text">
								<view class="data-title">水泵R</view>
								<view class="data-value">
									<switch @change="onChange($event, 'Pump1',Pump1)" :checked="Pump1"
										color="#3d7ef9" />
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
									<switch @change="onChange($event, 'DZF',DZF)" :checked="DZF" color="#3d7ef9" />
								</view>

							</view>
						</view>
						<view style="margin-left: 10px;"></view>
						<view class="data">
							<image class="data-logo" src="/static/images/dcfa.png" />
							<view class="data-text">
								<view class="data-title">出水阀门R</view>
								<view class="data-value">
									<switch @change="onChange($event, 'DZF1',DZF1)" :checked="DZF1" color="#3d7ef9" />
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
									<switch @change="onChange($event, 'Beep',Beep)" :checked="Beep" color="#3d7ef9" />
								</view>
							</view>
						</view>
						<view style="margin-left: 10px;"></view>
						<view class="data">
							<image class="data-logo" src="/static/images/ziwaixian.png" />
							<view class="data-text">
								<view class="data-title">紫外线消杀</view>
								<view class="data-value">
									<switch @change="onChange($event, 'ZW_Led',ZW_Led)" :checked="ZW_Led"
										color="#3d7ef9" />
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
					<button class="button" @click="test">IC卡充值</button>
					<!-- <button class="button" @click="onBotton($event,'pay','10')">余额支付</button> -->
					<view>
						<page-head title="form"></page-head>
						<view class="uni-padding-wrap uni-common-mt">
							<form @submit="formSubmit" @reset="formReset">

								<view class="uni-form-item uni-column">
									<text class="text-data-from">请自选容量ml:</text>
									<radio-group name="cap">
										<label>
											<radio value=200 /><text>200</text>
										</label>
										<label>
											<radio value=300 /><text>300</text>
										</label>
										<label>
											<radio value=400 /><text>400</text>
										</label>
										<label>
											<radio value=500 /><text>500</text>
										</label>
									</radio-group>
								</view>
								<view class="uni-btn-v">
									<button form-type="submit" class="button">下单</button>
									<button type="default" form-type="reset" class="button">取消</button>
								</view>
							</form>
						</view>
					</view>
					<view>
						<button @click="showDialog = true" class="button">按量取水</button>
					    <view class="dialog-mask" v-if="showDialog"></view>
						<view class="dialog" v-if="showDialog">
							<view class="dialog-content">
								<view class="dialog-title">选择容量</view>
								<input class="dialog-input" v-model="inputValue" />
								<view class="dialog-buttons">
								<button class="dialog-button" @click="confirm">确认</button>
									<button class="dialog-button" @click="cancel">取消</button>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
		  <uni-popup ref="alertDialog" type="dialog">
		    <uni-popup-dialog
		      :type="messageType"
		      cancelText="关闭"
		      confirmText="收到"
		      title="警告"
		      :content="error_info"
		      @confirm="dialogConfirm"
		      @close="dialogClose"
		    ></uni-popup-dialog>
		  </uni-popup>
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
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import takemo from "@/components/takemo.vue";
	import graceChecker from "./graceChecker.js"
	const deviceSubTopic = "smartwater/sub"; //  设备订阅topic（小程序发布命令topic）
	const devicePubTopic = "smartwater/pub"; //  设备发布topic（小程序订阅数据topic）

	/********************* 一般不用动这些 ********************/

	const mpSubTopic = devicePubTopic;
	const mpPubTopic = deviceSubTopic;
	// 1.导入组件

	export default {
		components: {
			takemo
		},
		data() {

			return {
				client: {},
				Height: "0", //液位0
				Height1: "0", //液位1
				flow: "0", //流量,当flow为！=0时，当=0是flow1
				Beep: 0, //报警开关
				Pump: 0, //水泵0
				Pump1: 0, //水泵1
				DZF: 0, //电磁阀0
				DZF1: 0, //电磁阀1
				ZW_Led: 0, //紫外线消毒灯
				UserName: "xx", //用户姓名
				PH: "xx", //PH
				temp: "xx", //温度
				TDS: "xx", //浊度
				password: "xx", //密码
				Device_ID: "0", //设备ID
				net: "离线", //下位机是否连接
				net_flag: 0, //离线标志位
				ID: "xx", //用户ID
				surplus: "0", //余额
				total: "0", //出水总量
				time: "0", //用时
				Bottle: '0', //接水瓶身
				logs: [],
				topic: 'presence', //要订阅的主题
				isRed: false,
				showPop: false, //弹窗
				shuju: "11",
				 showDialog: false,
				inputValue: "200",
				messageType: "alert", // 弹窗类型
			    error_info: "" // 错误信息内容

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
			dialogToggle(type) {
							this.messageType = type
							this.$refs.alertDialog.open()
						},
						dialogConfirm() {
							console.log('点击确认')
							this.messageText = `点击确认了 ${this.msgType} 窗口`
							this.$refs.message.open()
						},
			
						dialogClose() {
							console.log('点击关闭')
						},
			confirm() {
			      console.log(this.inputValue+"");
			      this.showDialog = false;
				  let type = "cap";
				  var that = this;
				  let value = parseInt(this.inputValue);
				  let message = '{"target":"' + type + '","value":' + value + '}';
				  that.client.publish(mpPubTopic, message, function(err) {
				  	if (!err) {
				  		console.log("=====自选下单====")
				  		console.log(message)
				  	} else {
				  
				  	}
				  });
				  uni.showToast({
				  	title: "下单成功!",
				  	icon: "none"
				  });
				  
			    },
			    cancel() {
			      this.inputValue = "";
			      this.showDialog = false;
			    },
			//弹窗
			formSubmit: function(e) {
				var that = this;
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				//定义表单规则
				var rule = [

					{
						name: "cap",
						checkType: "in",
						checkRule: "100,200,300,400,500",
						errorMsg: "请选择容量"
					}
			 ];
				//进行表单检查

				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				let value = e.detail.value.cap
				if (checkRes) {
					let type = "cap";
					let message = '{"target":"' + type + '","value":' + value + '}';
					that.client.publish(mpPubTopic, message, function(err) {
						if (!err) {
							console.log("=====自选下单====")
							console.log(message)
						} else {

						}
					});
					uni.showToast({
						title: "下单成功!",
						icon: "none"
					});

				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			confirmPop() { //确认
				this.showPop = false
				var that = this;
				console.log(this.shuju)
				let value = this.shuju;
				if (that.shuju) {

					uni.showModal({
						title: '提示',
						content: '成功',
						showCancel: false, //本来有两个按钮，这里我取消了“取消按钮”
						success: function(res) {
							if (res.confirm) {
								console.log('用户下单成功');
								let type = "cap";
								let message = '{"target":"' + type + '","value":' + value + '}';
								that.client.publish(mpPubTopic, message, function(err) {
									if (!err) {
										wx.showToast({
											title: "指令下发成功",
											icon: "success",
											mask: true,
										});
										console.log(message)
									} else {
										wx.showToast({
											title: "下发异常",
											icon: "error",
											mask: false,
										});
									}
								});

							}
						}
					});

					//that.shuju = ""


				} else {
					uni.showModal({
						title: '提示',
						content: '不能为NULL',
						showCancel: false, //本来有两个按钮，这里我取消了“取消按钮”
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							}
						}
					});
				}
			},
			cancelPop() { //取消
				console.log('点击了取消')
				this.showPop = false
			},
			onChange(event, type, k) {
				console.log(event.mp.detail);
				let sw = event.mp.detail.value;
				k = sw;
				var that = this;
				let value = sw ? 1 : 0;
				let message = '{"target":"' + type + '","value":' + value + '}';
				that.client.publish(mpPubTopic, message, function(err) {
					if (!err) {
						if (sw) {
							console.log("成功下发命令——打开报警器");
							console.log(message)
						} else {
							console.log("成功下发命令——关闭报警器");
							console.log(message)
						}
						wx.showToast({
							title: "指令下发成功",
							icon: "success",
							mask: true,
						});
					} else {
						wx.showToast({
							title: "下发异常",
							icon: "error",
							mask: false,
						});
					}
				});
			},
			onBotton(event, type, value) {
				let name = this.UserName;
				let message = '{"target":"' + type + '","name":"' + name + '","value":' + value + '}';
				console.log(event.mp.detail);
				var that = this;
				that.client.publish(mpPubTopic, message, function(err) {
					if (!err) {
						console.log("成功下发命令:" + type);
						console.log(message)
						wx.showToast({
							title: "指令下发成功",
							icon: "success",
							mask: true,
						});
					}
				});
			},
			test() {
				wx.showToast({
					title: "开发中。。",
					icon: "error",
					mask: false,
				});
			},
			getwater() {
				this.showPop = true;

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
				console.log(message);
				let dataFromDev = {};
				dataFromDev = JSON.parse(message);
				console.log(dataFromDev);
				that.Height = dataFromDev.Height;
				that.Height1 = dataFromDev.Height1;
				if(dataFromDev.Height1<6){
					wx.showToast({
						title: "液位过低",
						icon: "error",
						mask: false,
					});
					console.log("液位过低");
				}
				if (dataFromDev.Flow == 0) {
					that.flow = dataFromDev.Flow1;
				}
				that.flow = dataFromDev.Flow;
				that.Device_ID = dataFromDev.devicd_id; //可以用来测试
				that.ID = dataFromDev.user_id;
				that.UserName = dataFromDev.user_name;
				that.surplus = dataFromDev.user_money;
				that.password = dataFromDev.user_password;
				that.Pump = dataFromDev.Pump;
				that.Pump1 = dataFromDev.Pump1;
				that.net_flag = dataFromDev.status;
				if (that.net_flag != 0) {
					that.net = "在线"
				}
				if(dataFromDev.Height1<6){
					wx.showToast({
						title: "液位过低",
						icon: "error",
						mask: false,
					});
					console.log("液位过低");
				}
				that.PH = dataFromDev.ph;
				that.TDS = dataFromDev.tds;
				that.temp = dataFromDev.Temp;
				that.DZF = dataFromDev.DZF;
				that.DZF1 = dataFromDev.DZF1;
				that.ZW_Led = dataFromDev.ZW_LED;
				that.Bottle = dataFromDev.Bottle;
				that.Beep = dataFromDev.BEEP;
				that.time = dataFromDev.time;
				//that.total=(dataFromDev.flow)*time;//流量*时间
				
				
				

			});
		},

	}
</script>

<style lang="scss" scoped>
	@import "@/pages/index/index.scss"; //引入方式
	@import "./pay.scss";
	@import "./bg.scss";

	.intext {
		text-align: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: white;
	}

	.box {
		height: 27vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
		padding-top: 50upx;
		border: 1px solid #888888;
	}

	.value {
		width: 100%;
		height: 100%;
		color: #C40000;
		font-size: 30upx;
		font-weight: 500;
		text-align: center;
	}

	.btns {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		margin-top: 50upx;
	}

	.btn {
		width: 30vw;
		padding: 5upx 20upx;
		color: white;
		font-size: 30upx;
		background-color: #C40000;
		text-align: center;
		margin-top: 20upx;
	}

	.uni-form-item .title {
		padding: 20rpx 0;
	}
	
	.dialog-mask {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background-color: rgba(0, 0, 0, 0.5);
	}
	
	.dialog {
	  position: fixed;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  background-color: #fff;
	  padding: 20rpx;
	  border-radius: 8rpx;
	}
	
	.dialog-title {
	  font-size: 32rpx;
	  font-weight: bold;
	  margin-bottom: 20rpx;
	  text-align: center;
	}
	
	.dialog-input {
	  width: 100%;
	  height: 80rpx;
	  font-size: 28rpx;
	  padding: 10rpx;
	  border: 1rpx solid #ccc;
	  border-radius: 4rpx;
	  box-sizing: border-box;
	  margin-bottom: 20rpx;
	}
	
	.dialog-buttons {
	  display: flex;
	  justify-content: center;
	}
	
	.dialog-button {
	  background-color: #007aff;
	  color: #fff;
	  font-size: 28rpx;
	  padding: 10rpx 20rpx;
	  border-radius: 4rpx;
	  margin: 0 10rpx;
	}
</style>
