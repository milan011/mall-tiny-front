<template>
	<view class="activity-sign">
		<cu-custom bgColor="bg-gradual-white" :isBack="false">
		    <!-- <block slot="backText">返回</block> -->
		    <block slot="content">活动详情</block>
		</cu-custom>
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
			<view class="action text-orange">
				<view class="cuIcon-forwardfill"></view> 转发
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
				customerPhone: '',
				activityId: null,
				activityName: null,
				modalName: null,
				sendingInfo: true,
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id, option.activityName); //打印出上个页面传递的参数。
			this.activityId = option.id ? option.id : ''
			this.activityName = option.activityName ? option.activityName : ''

		},
		onShow() {
			uni.hideTabBar({
				animation: true
			})
		},
		computed: {},
		onShareAppMessage() {},
		filters: {},
		// 下拉刷新
		onPullDownRefresh() {},
		// 加载更多
		onReachBottom() {},
		methods: {
			activitySignFetch(e){
				console.log('我报名', this.activityId, this.activityName)
				this.modalName = e.currentTarget.dataset.target
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
						uni.showToast({
							title: '报名成功',
							icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
							duration: 2000    //持续时间为 2秒
						})
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
			}
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
