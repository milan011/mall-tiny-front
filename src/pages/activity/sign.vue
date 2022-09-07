<template>
	<view class="activity-sign">
		<!-- <cu-custom bgColor="bg-gradual-white" :isBack="false">
		   <block slot="backText">返回</block>
		   <block slot="content">活动详情</block>
		</cu-custom> -->
		<view class="padding text-center container">
			<view class="padding-xs align-center">
				<image :src="image2" mode="widthFix"></image>
			</view>
			<view class="padding-xs align-center">
				<image :src="image1" mode="widthFix"></image>
			</view>
			<view class="padding-xs align-center">
				<image :src="image3" mode="widthFix"></image>
			</view>
			<view class="padding-xs align-center">
				<image :src="image4" mode="widthFix"></image>
			</view>
			<view class="padding-xs align-center">
				<image :src="image5" mode="widthFix"></image>
			</view>
		</view>
		<view class="cu-bar bg-white tabbar border foot">
			<button style="background: none;height:auto;" open-type="share">
				<view class="action text-orange">
					<view class="cuIcon-forwardfill"></view>转发
				</view>
			 </button>
			<!-- <view @tap.stop="share" class="action text-orange">
				<view class="cuIcon-forwardfill"></view>转发
			</view> -->
			<view @click="showServiceModal" class="action text-orange">
				<view class="cuIcon-service"></view> 客服
			</view>
			<view class="btn-group" style="flex:4">
				<button @click="activitySignFetch" data-target="activitySignModal" class="cu-btn bg-red round shadow-blur" style="width:90%">立即报名</button>
			</view>
		</view>
		<!-- 报名模态框  Begin-->
		<view class="cu-modal" :class="modalName=='activitySignModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">报名活动</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="cu-form-group">
						<!-- <view class="title">电话</view> -->
						<input placeholder="请输入您的手机号码" v-model="customerPhone" name="input"></input>
						<button v-if="sendingInfo" @click="signSend" class='cu-btn bg-green shadow'>
							确认报名
						</button>
						<button v-else disabled class='cu-btn bg-green shadow'>
							<text class="cuIcon-loading2 cuIconfont-spin"></text>
							报名中..
						</button>
					</view>
				</view>
				<!-- <view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>
					</view>
				</view> -->
			</view>
		</view>
		<!-- 报名模态框  End -->
		<!-- 联系我们模态框 Begin -->
		<view class="cu-modal" :class="modalName=='serviceModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">联系我们</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="cu-form-group">
						<view class="title">客服电话:{{ activityPhone }}</view>
						<button  @click="callPhone" class='cu-btn bg-green shadow'>
							联系客服
						</button>
					</view>
				</view>
			</view>
		</view>
		<!-- 联系我们模态框 End -->
		<!-- 报名成功模态框 Begin -->
		<view class="cu-modal" :class="modalName=='successModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">报名成功</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					您的报名信息已记录,报名验证码:{{ signCode }}
				</view>
			</view>
		</view>
		<!-- 报名成功模态框 End -->
	</view>
</template>
<script>
	import {
		mapMutations
	} from 'vuex';
	import { activitySign } from '@/api/activity.js';
	export default {
		components: {},
		data() {
			return {
				image1: require('./static/img/1.jpg'),
				image2: require('./static/img/2.jpg'),
				image3: require('./static/img/3.jpg'),
				image4: require('./static/img/4.jpg'),
				image5: require('./static/img/5.jpg'),
				code: '',
				btnLoading: false,
				loading: false,
				customerPhone: '',
				signCode: '',
				activityId: null,
				activityPhone: null,
				activityName: null,
				modalName: null,
				sendingInfo: true,
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			let _this = this
			console.log(option.id, option.activityName, option.activityPhone); //打印出上个页面传递的参数。
			this.activityId = option.id ? option.id : ''
			this.activityName = option.activityName ? option.activityName : ''
			this.activityPhone = option.activityPhone ? option.activityPhone : ''
			//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
			wx.showShareMenu({
			  withShareTicket:true,
			  menus:["shareAppMessage","shareTimeline"]
			})
			/*  #ifdef MP-WEIXIN  */
			// eslint-disable-next-line
			wx.login({
				success: function(loginRes) {
					console.log('wx.login', loginRes)
					_this.code = loginRes.code;
				},
				fail: function() {
					_this.$mHelper.log('暂不支持小程序登录');
				}
			});
			/*  #endif  */
		},
		//发送给朋友
		onShareAppMessage(res) {
			return {
				title: this.activityName,
				path: `/pages/activity/sign?id=${this.id}&activityName=${this.activityName}&activityPhone=${this.activityPhone}`
			}
		},
		//分享到朋友圈
		onShareTimeline(res) {
			return {
		    /* title: '',
		     type: 0,
		     query: 0,
		     summary: "",
		     imageUrl: "" */
				title: this.activityName,
				path: `/pages/activity/sign?id=${this.id}&activityName=${this.activityName}&activityPhone=${this.activityPhone}`
		  }
		},
		onShow() {
			uni.hideTabBar({
				animation: true
			})
		},
		computed: {},
		filters: {},
		// 下拉刷新
		onPullDownRefresh() {},
		// 加载更多
		onReachBottom() {},
		methods: {
			activitySignFetch(e){
				console.log('我报名', this.activityId, this.activityName)
				this.toAuthLogin()
				this.modalName = e.currentTarget.dataset.target
			},
			toAuthLogin(){
				let _this = this
				/*  #ifdef MP-WEIXIN */
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log('provider', loginRes)
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log('userInfo', infoRes)
								/* let params = _this.promoCodeParams;
								authApi = mpWechatLogin;
								params = { ...infoRes, ...params };
								params.code = loginRes.code;
								_this.thirdPartyAuthLogin(authApi, params); */
							},
							fail: function() {
								_this.btnLoading = false;
							}
						});
					},
					fail: function() {
						_this.btnLoading = false;
						_this.$mHelper.log('暂不支持小程序登录');
					}
				});
				/*  #endif  */
				/*  #ifdef MP-WEIXIN */
				// eslint-disable-next-line
				wx.getUserProfile({
					desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (infoRes) => {
						console.log('getUserProfile', infoRes)
						/* let params = _this.promoCodeParams;
						authApi = mpWechatLogin;
						params = { ...infoRes, ...params };
						params.code = this.code;
						_this.thirdPartyAuthLogin(authApi, params); */
					},
					fail: function() {
						_this.loading = false;
						_this.btnLoading = false;
					}
				});
				/*  #endif  */
			},
			hideModal(e) {
				this.modalName = null
			},
			async signSend(){
				console.log('我报名', this.activityId, this.activityName, this.customerPhone)
				var reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
				if (!reg.test(this.customerPhone)) {
					uni.showToast({
						title: '请输入正确格式的手机号码',
						icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
						duration: 2000    //持续时间为 2秒
					})
					return false;
				}
				const params = {
					"id": null,
					"activityId": this.activityId,
					"activityName": this.activityName,
					"customerPhone": this.customerPhone}
				await this.$http.post(`${activitySign}`, params).then((res) => {
				  console.log('活动报名', res)
					const { code, data, message } = res
					if(code === 200){
						this.signCode = data
						this.modalName = 'successModal'
					}else{
						uni.showToast({
							title: message,
							icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
							duration: 2000    //持续时间为 2秒
						})
					}
				});
				this.sendingInfo = false
				setTimeout(()=>{
					this.sendingInfo = true
				}, 4000)
			},
			showServiceModal(e){
				console.log('客服是')
				this.modalName = 'serviceModal'
			},
			callPhone(){
				uni.makePhoneCall({
				   phoneNumber: this.activityPhone
				});
			},
			// 分享
			share() {
				const url = `${this.$mConfig.hostUrl}/pages/index/index`;
				console.log('我分享', url)
			  // #ifdef H5
				// this.$mHelper.h5Copy(url);
				// #endif
			  // #ifdef APP-PLUS
				// const shareImg = `${this.$mSettingConfig.appLogo}`;
				// this.$mHelper.handleAppShare(url, this.appName, `欢迎来到${this.appName}`, shareImg);
				// #endif
			},
		}
	};
</script>
<style lang="scss">
	page {
		background-color: $page-color-base;
	}
	.activity-sign {
		height: 95vh;
		width: 100vw;
		padding: 10px;
		.container{
			height: 100%;
			overflow: auto;
			padding-bottom: 10vh;
		}
		.cu-bar.tabbar{
			right:2px;
		}
		::v-deep .cu-bar{
			right:2px;
		}
	}
</style>
