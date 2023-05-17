/* <template>
	  <view class="container" >
		  <view class="login-icon" >
			  <image class="login-img" src="@/static/images/none3.png"></image>  
		  </view>
		  
		  <view class="login-from" v-if="true">
			  <!-- 头像 -->
			  <view class="people-image">
			  		<image style="border-radius: 50%; margin-left: 229rpx; width: 200rpx;height: 200rpx;" src="@/static/images/touxiang.png"></image> 
			  </view>
			  <!--  账号 -->
			  <view class="inputView">
				  <image class="nameImage" src="@/static/images/zhanghao.png"></image>
				  <input class="inputText" v-model="userInfo.username" placeholder="请输入账号"/>
			  </view>
			  <!-- 密码 -->
			  <view class="inputView">
			  	  <image class="nameImage" src="@/static/images/password-login.png"></image>
			  	   <input class="inputText" v-model="userInfo.password" password="true"  placeholder="请输入密码"/>
			  </view>
 
			  <!-- 登录按钮 -->
			  <view class="loginBtnView" @click="login">
				  立即登录
			  </view>
		  </view>

	  </view>
</template>
 
<script>
	//import md5Libs from "uview-ui/libs/function/md5"
	import {mapState,mapMutations} from 'vuex'

	export default {
		data(){
			return{
				userInfo:{
					username:"",
					password:""
				},	
				loginOK:0 //用户第一次登录是0，登录过后变成1，第二次以后自动登录
			}
		},
		computed:{
			...mapState(['userName','hasLogin'])
		},
		
		
		// 自动登录的制作
		async onLoad(){
			this.userInfo.username = await uni.getStorageSync("username")
			this.userInfo.password = await uni.getStorageSync("password")
			this.loginOK = await uni.getStorageSync("loginOK")
			if(this.loginOK === 6)
			{
				this.login()
			}
		},
		methods:{
			...mapMutations(['login','loginOut']),
			async login(){
				// if(this.userInfo.username==='')
				// {
				// 	this.$refs.uToast.show({title: '账号不能为空'})
				// 	return
				// }
				const username = this.userInfo.username
				// const password = md5Libs.md5(this.userInfo.password)
				const password = this.userInfo.password
				// let params = {username,password}
				await uni.setStorageSync('username', this.userInfo.username)
				await uni.setStorageSync('password', this.userInfo.password)
				// const res = await this.$u.api.login(params)
				
				// if(res.flag){
				// 	console.log(JSON.stringify(res))
				// 	await this.$store.dispatch('user/login',res) //保存token
				// 	await uni.setStorageSync('loginOK', 1)     //设置是否自动登录
				// 	uni.reLaunch({url:'/pages/index/index'}) //要用这个才可以
				// }
				// else
				// {
				// 	this.$refs.uToast.show({title: res.msg})
				// }
				wx.showToast({
					title: "登陆成功",
					icon: "success",
					mask: true,
				});
				uni.reLaunch({url:'/pages/index/index'}) 
			}
		}
	}
</script>
 
<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #eeeeee;
}
/* #endif */
</style>
 
<style lang="scss" scoped>
	page{ 
	 height: 100%; 
	} 
	  
	.container { 
	 height: 100%; 
	 display: flex; 
	 // flex-direction: column;
	 padding: 0; 
	 box-sizing: border-box; 
	 // background-color: #FFFFFF;
	   /*登录图片*/
	   .login-icon{ 
		 height: 100%;
		 .login-img{
		  width: 100%;
		 		position: fixed;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				z-index: -1;
		 } 
	   } 
	   
	   /*表单内容*/
	   .login-from view:nth-child(2){
	   			  margin-top: 148rpx;
	   }
	   .login-from view:nth-child(3){
	   			  margin-top: 42rpx;
	   }
	   .login-from { 
	    margin-top: 168rpx; 
	   	margin-left: 47rpx;
	    position: relative;
	    height:748rpx;
	   	width: 656rpx;
			  people-image{
				 display: flex;
				 flex-direction: column;
				 height:200rpx;
			  }
	   		  .inputView {
	   		   background-color: #FFFFFF; 
	   		   display: flex;
	   		   height: 106rpx;
	   		   border-radius: 6rpx;
	   		   width: 656rpx;
	   		        /*输入框*/
	   			   .nameImage{ 
	   				margin-left: 22rpx; 
	   				margin-top: 40rpx;
	   				width: 35rpx; 
	   				height: 35rpx
	   			   }  
	   			   .inputText {
	   				margin-left: 25rpx; 
	   				margin-top: 32rpx;
	   				color: #727272; 
	   				font-size: 30rpx
	   			   }  
	   		  } 
	   		  .loginBtnView{
	   			  margin-top: 45rpx;
	   			  background: #3399fe;
	   			  padding-top: 35rpx;
	   			  text-align: center;
	   			  font-size: 32rpx;
	   			  letter-spacing:4rpx;
	   			  color: #f5ffed;
	   			  height: 65rpx;
	   			  width: 660rpx;
	   			  border-radius: 6rpx;
	   			  
	   		  }
	   		  
	   		     
	   } 
	} 
</style> 