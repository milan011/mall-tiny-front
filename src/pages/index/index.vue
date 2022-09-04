<template>
	<view class="rf-index">
		<view class="container">
			<!-- <view class="grid col-2 padding-sm" style="margin-top:5vh;">
				<view class="padding-sm" v-for="(item,index) in ColorList" :key="index">
					<view @click="goToSign(item.id)" class="padding radius text-center shadow-blur" :class="'bg-' + item.name">
						<view class="text-lg">{{item.title}}</view>
						<view class="margin-top-sm text-Abc">{{item.name}}</view>
					</view>
				</view>
			</view> -->
			<view class="grid col-2 padding-sm" style="margin-top:5vh;">
				<view class="padding-sm" v-for="(item,index) in activityList" :key="index">
					<view @click="goToSign(item)" class="padding radius text-center shadow-blur bg-yellow">
						<view class="text-lg">{{item.activityName}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	/**
	 * @des 微商城首页
	 *
	 * @author stav stavyan@qq.com
	 * @date 2020-01-08 14:14
	 * @copyright 2019
	 */
	import { activityList } from '@/api/activity.js';
	import { mapMutations } from 'vuex';
	export default {
		components: {
		},
		data() {
			return {
				activityLoading: false,
				activityList: [],
				ColorList: [{
					title: '活动1',
					name: 'red',
					color: '#e54d42'
				},
				{
					title: '活动2',
					name: 'orange',
					color: '#f37b1d'
				},
				{
					title: '活动3',
					name: 'yellow',
					color: '#fbbd08'
				},
				{
					title: '活动4',
					name: 'olive',
					color: '#8dc63f'
				},
				/* {
					title: '森绿',
					name: 'green',
					color: '#39b54a'
				},
				{
					title: '天青',
					name: 'cyan',
					color: '#1cbbb4'
				},
				{
					title: '海蓝',
					name: 'blue',
					color: '#0081ff'
				},
				{
					title: '姹紫',
					name: 'purple',
					color: '#6739b6'
				},
				{
					title: '木槿',
					name: 'mauve',
					color: '#9c26b0'
				},
				{
					title: '桃粉',
					name: 'pink',
					color: '#e03997'
				},
				{
					title: '棕褐',
					name: 'brown',
					color: '#a5673f'
				},
				{
					title: '雅白',
					name: 'white',
					color: '#ffffff'
				},
				{
					title: '玄灰',
					name: 'grey',
					color: '#8799a3'
				},
				{
					title: '草灰',
					name: 'gray',
					color: '#aaaaaa'
				},
				{
					title: '墨黑',
					name: 'black',
					color: '#333333'
				}, */

			],
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onShow() {
			uni.hideTabBar({animation: true})
			this.getActivityList()
		},
		computed: {
		},
		onShareAppMessage() {
		},
		filters: {
		},
		// 下拉刷新
		onPullDownRefresh() {
		},
		// 加载更多
		onReachBottom() {
		},
		methods: {
			goToSign(item){
				console.log('跳转活动')
				uni.navigateTo({
					url: `/pages/activity/sign?id=${item.id}&activityName=${item.activityName}&activityPhone=${item.activityPhone}`
				})
			},
			// 获取活动列表
			async getActivityList() {
				this.activityLoading = true;
				const params = {};
				// params.page = this.page;
				await this.$http
					.get(`${activityList}`, {
						...params
					}).then(async r => {
						this.activityLoading = false;
						console.log('活动列表', r)
						const { code, data, message } = r
						if(code === 200){
							this.activityList = data.list
						}
						/* this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
						this.categoryProductList = [...this.categoryProductList, ...r.data];
						uni.removeStorageSync('indexToCateId'); */
					});
			},
		}
	};
</script>
<style lang="scss">
	page {
		background-color: $page-color-base;
	}
	.rf-index {
		height: 95vh;
		width: 100vw;
		position: fixed;
		.container{
			height: 100%;
			overflow: auto;
		}
	}
</style>
