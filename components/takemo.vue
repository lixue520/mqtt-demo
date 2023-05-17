<template>
	<view>
		<page-head title="form"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit" @reset="formReset">
			
				<view class="uni-form-item uni-column">
					<view class="title">容量ML</view>
					<radio-group name="cap">
						<label>
							<radio value=100 /><text>100</text>
						</label>
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
					<button form-type="submit">Submit</button>
					<button type="default" form-type="reset">Reset</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	import graceChecker from "./graceChecker.js"
	export default {
		data() {
			return {
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
                //定义表单规则
                var rule = [
        
                    {name:"cap", checkType : "in", checkRule:"100,200,300,400,500",  errorMsg:"容量"}
                ];
                //进行表单检查
                var formData = e.detail.value;
                var checkRes = graceChecker.check(formData, rule);
                if(checkRes){
                    uni.showToast({title:"验证通过!", icon:"none"});
                }else{
                    uni.showToast({ title: graceChecker.error, icon: "none" });
                }
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>

<style>
	.uni-form-item .title {
		padding: 20rpx 0;
	}
</style>
