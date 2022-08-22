<template>
	<view class="empty-template">
	</view>
</template>
<script>
	import {
		indexList,
		productList
	} from '@/api/product';
	import {
		mapMutations
	} from 'vuex';
	export default {
		components: {},
		data() {
			return {};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
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
		methods: {}
	};
</script>
<style lang="scss">
	page {
		background-color: $page-color-base;
	}
	.empty-template {
		height: 95vh;
		width: 100vw;
		position: fixed;
		.container{
			height: 100%;
			overflow: auto;
		}
	}
</style>
