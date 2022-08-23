<template>
	<view class="activity-sign">
		<cu-custom bgColor="bg-gradual-white" :isBack="false">
		    <!-- <block slot="backText">返回</block> -->
		    <block slot="content">活动详情</block>
		</cu-custom>
		<view class="padding text-center container">
			<view class="padding-xs flex align-center">
				<image :src="image2" mode="widthFix"></image>
			</view>
			<view class="padding-xs flex align-center">
				<image :src="image1" mode="widthFix"></image>
			</view>
			<view class="padding-xs flex align-center">
				<image :src="image3" mode="widthFix"></image>
			</view>
			<view class="padding-xs flex align-center">
				<image :src="image4" mode="widthFix"></image>
			</view>
			<view class="padding-xs flex align-center">
				<image :src="image5" mode="widthFix"></image>
			</view>
		</view>
		<view class="cu-bar bg-white tabbar border foot">
			<view class="action text-orange">
				<view class="cuIcon-forwardfill"></view> 转发
			</view>
			<view class="action text-green">
				<view class="cuIcon-service"></view> 联系我们
			</view>
			<!-- <button class="action" open-type="contact">
				<view class="cuIcon-service text-green">
					<view class="cu-tag badge"></view>
				</view>
				客服
			</button> -->
			<view class="btn-group" style="flex:4">
				<button @click="activitySign" class="cu-btn bg-red round shadow-blur" style="width:90%">
					立即报名
				</button>
			</view>
		</view>
		<lff-barrage ref="lffBarrage"></lff-barrage>
	</view>
</template>
<script>
	import { indexList, productList } from '@/api/product';
	import { mapMutations } from 'vuex';
	import lffBarrage from '@/components/lff-barrage/lff-barrage.vue';
	export default {
		components: { lffBarrage },
		data() {
			return {
				image1: require('./static/img/1.jpg'),
				image2: require('./static/img/2.jpg'),
				image3: require('./static/img/3.jpg'),
				image4: require('./static/img/4.jpg'),
				image5: require('./static/img/5.jpg'),
				timer: '',
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onShow() {
			uni.hideTabBar({
				animation: true
			})
		},
		onLoad(){
			this.timer = setInterval(this.colrdo, 10000)
		},
		onHide(){
			clearInterval(this.timer)
		},
		computed: {},
		onShareAppMessage() {},
		filters: {},
		// 下拉刷新
		onPullDownRefresh() {},
		// 加载更多
		onReachBottom() {},
		methods: {
			activitySign(){
				console.log('我报名')
				this.colrdo()
			},
			colrdo(){ //插入一条弹幕
				this.$refs.lffBarrage.add({item:'XXX, 已报名该活动'});
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
