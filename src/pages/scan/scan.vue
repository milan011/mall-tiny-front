<template>
	<view class="scan">
		<swiper
			class="screen-swiper"
			:class="dotStyle?'square-dot':'round-dot'"
			:indicator-dots="true"
			:circular="true"
			:autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		<view class="padding text-center">
			<view class="padding-xs flex align-center">
				<view class="flex-sub text-center radius shadow bg-white">
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">要说现在的夏天，大西瓜撑起了半边天</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">绝对是没错的在闷热的天气里</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">西瓜和夏天搭配起来</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">就是绝妙的小幸福</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">西瓜的品种这么多</text>
					</view>
					<view class="image">
						<image :src="image1"
						 mode="widthFix"></image>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">该怎么选择呢？</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">每年夏天，最受欢迎的西瓜</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">当属</text>
					</view>
					<view class="image">
						<image :src="image2"
						 mode="widthFix"></image>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">宁夏中卫硒砂瓜</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">为了保证</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">热衷吃瓜的亲们能吃上</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">正宗新鲜的硒砂瓜</text>
					</view>
					<view class="image">
						<image :src="image3"
						 mode="widthFix"></image>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">远赴宁夏中卫香山镇</text>
					</view>
					<view class="solid-bottom text-xs padding">
						<text class="text-gray">基地直采，新鲜运达</text>
					</view>
					<!-- <view class="padding">说明文本，标签文字等关注度低的文字</view> -->
				</view>
			</view>
			<view class="padding-xs flex align-center">
				<view class="flex-sub text-center radius shadow bg-white">
					<text>如何辨别正宗的中卫硒砂瓜？
近来对于待在中国的非洲人都想回家的高温天气、解暑降温止渴的西瓜成为市民的消暑的利器。当下有种网红西瓜刷爆了朋友圈，那就是宁夏中卫的硒砂瓜。那么消费者如何辨别正宗的宁夏中卫硒砂瓜，小编告诉大家几个窍门，再详细介绍硒砂瓜的由来及生长环境、成长过程等多个环节。</text>
				</view>
			</view>
			<view class="padding-xs flex align-center">
				<view class="flex-sub text-center radius shadow bg-white">
								<text>正宗硒砂瓜特征：

一看外形，硒砂瓜有别于无籽西瓜、麒麟瓜等，品种为金城五号，外形呈椭圆形。

二看色泽，瓜皮底色浅绿，上布深绿色条纹，受日晒影响，成熟后顶部会略有发黄，底部稍白，但不会整片白（有别于泥土地中灌溉西瓜），条纹依旧可见。

三看疤痕，硒砂瓜从小长到大，都是在凹凸不平的石头上的，长大的过程中随着风的吹动，小瓜嫩嫩的表皮会在石头上擦出伤疤，长大后底部会留下多个明显的凹状印记，表皮有分布不规则的浅褐色疤痕。

四看干净，硒砂瓜在石头上长大，如荷花般出淤泥而不染，底部不会有泥巴（有别于泥土地中灌溉西瓜）。

五看瓜瓤，瓜瓤根据熟度的不同，颜色略有不同，整体呈粉红色，但非鲜红，用刀切成牙，甚至能看到小糖颗粒。

六看上市时间，硒砂瓜每年7月初才上市，7月前销售的硒砂瓜多半是冒牌的。</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				dotStyle: false,
				image1: require('./static/img/xigua1.jpeg'),
				image2: require('./static/img/xigua2.jpeg'),
				image3: require('./static/img/xigua3.jpeg'),
				swiperList: [{
					id: 0,
					type: 'image',
					url: require('./static/img/xigua1.jpeg')
				}, {
					id: 1,
					type: 'image',
					url: require('./static/img/xigua2.jpeg'),
				}, {
					id: 2,
					type: 'image',
					url: require('./static/img/xigua3.jpeg')
				},/* {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				} */],
			};
		},
		onLoad() {
		},
		onShow() {
		},
		methods: {
		},
	}
</Script>
<style lang="scss">
</style>
