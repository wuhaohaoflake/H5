<template lang="html">
	<div class="invite">
		<div class="login-box">
			<button class="btn">登录/注册</button>
			<p>登录查看我的邀请等级</p>
		</div>
		<div class="low-box">
			<p>距中级理财师还差2个v1好友，200万待收金额</p>
		</div>
		<div class="middle-box">
			<p>距王牌理财师还差3个v1好友，100万待收金额</p>
		</div>
		<div class="king-box"></div>
		<div class="banner-box"></div>
		<div class="info-box">
			<p class="title">好友首次投资，您将获得</p>
			<p class="one">10元抵用券，好友首次投资金额0.25%返现 </p>
			<hr color="#e4e4e4">
			<div class="sec"></div>
		</div>
		<div class="rule">
			<a href="">查看邀请规则&nbsp;></a>
		</div>
		<button class="invite-btn">立即邀请</button>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.invite
		max-width:414px
		margin:0 auto
		background-color #fff
		.login-box
			height:3.24rem
			background-color #ff8000
			overflow:hidden
			text-align:center
			margin-bottom:.52rem
			.btn
				width:2.37rem
				height:.76rem
				border 1px solid #fff
				background-color #ff8201
				color:#fff
				border-radius:0.05rem
				font-size:.3rem
				margin:1.04rem auto .19rem auto
			p
				font-size:.2rem
				color:#ffffff
				opacity:0.7
		.low-box
			width:6.9rem
			height:3rem
			background:url(../../image/low.png) no-repeat
			background-size: 100% 100%;
			margin: .5rem auto
			text-align:center
			overflow:hidden
			display:none
			p
				font-size:.24rem
				margin-top:2.18rem
				opacity: 0.6;
				color:#fff
		.middle-box
			width:6.9rem
			height:3rem
			background:url(../../image/middle.png) no-repeat
			background-size: 100% 100%;
			margin: .5rem auto
			text-align:center
			overflow:hidden
			display:none
			p
				font-size:.24rem
				color:#b6b5b6
				margin-top:2.18rem
		.king-box
			width:6.9rem
			height:3rem
			background:url(../../image/king.png) no-repeat
			background-size: 100% 100%;
			margin: .5rem auto
			text-align:center
			overflow:hidden
			display:none
		.banner-box
			width:6.9rem
			height:1.4rem
			background:url(../../image/banner-1.png) no-repeat
			background-size: 100%;
			margin:0 auto
		.info-box
			margin: 0 .3rem
			.title
				margin-top:.6rem
				font-size:.28rem
				color:#212a36
			.one
				font-size:.24rem
				color:#626262
				margin-top:.2rem
				margin-bottom:.6rem
			.sec
				width:6.04rem
				height:6.61rem
				background:url(../../image/sec.png) no-repeat
				background-size: 100%;
		.rule
			height:1.25rem
			background-color #f2f3f7
			margin-top:.6rem
			text-align:center
			margin-bottom:.88rem
			a
				color:#626262
				font-size:.24rem
		.invite-btn
			width:100%
			max-width:414px
			height:.88rem
			background-color:#ff7400
			outline:none
			border:none
			position:fixed
			bottom:0
			font-size:.3rem
			color:#ffffff
</style>