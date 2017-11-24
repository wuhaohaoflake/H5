<template>
	<div class="lottery">
		<div class="login-box">
			<button class="btn">登录/注册</button>
			<p>登录查看我的积分</p>
		</div>
		<p class="integral">当前积分：<span>300</span></p>
		<div class="lottery-box">
			<div class="lottery-top">
				<span :class="{ 'on': isShow }" v-on:click="lottery1()">抽iPhone8</span>
				<span :class="{ 'on': !isShow }" v-on:click="lottery2()">抽688积分</span>
			</div>
			<div id="lottery1" class="lotterys" v-show="isShow">
			    <table border="0" cellpadding="0" cellspacing="0">
			        <tr>
			            <td class="lottery-unit lottery-unit-0"><img src="../../image/iphone8.png"class="sapce"><div class="mask"></div></td>
			            <td class="lottery-unit lottery-unit-1"><img src="../../image/tv.png" class="sapce"><div class="mask"></div></td>
			            <td class="lottery-unit lottery-unit-2"><img src="../../image/yashua.png"><div class="mask"></div></td>
			        </tr>
			        <tr>
			            <td class="lottery-unit lottery-unit-7"><img src="../../image/%3.png" class="sapce spa"><div class="mask spa"></div></td>
			            <td class="btn sapce"><img src="../../image/start.png"class="sapce spa"></td>
			            <td class="lottery-unit lottery-unit-3"><img src="../../image/268.png" class="spa"><div class="mask spa"></div></td>
			        </tr>
			        <tr>
			            <td class="lottery-unit lottery-unit-6"><img src="../../image/68.png" class="sapce spa"><div class="mask spa"></div></td>
			            <td class="lottery-unit lottery-unit-5"><img src="../../image/388.png" class="sapce spa"><div class="mask spa"></div></td>
			            <td class="lottery-unit lottery-unit-4"><img src="../../image/10.png" class="spa"><div class="mask spa"></div></td>
			        </tr>
			    </table>
			</div>
			<div id="lottery2" class="lotterys" v-show="!isShow">
			    <table border="0" cellpadding="0" cellspacing="0">
			        <tr>
			            <td class="lottery-unit lottery-unit-0"><img src="../../image/1fen.png"class="sapce"><div class="mask"></div></td>
			            <td class="lottery-unit lottery-unit-1"><img src="../../image/6fen.png" class="sapce"><div class="mask"></div></td>
			            <td class="lottery-unit lottery-unit-2"><img src="../../image/16fen.png"><div class="mask"></div></td>
			        </tr>
			        <tr>
			            <td class="lottery-unit lottery-unit-7"><img src="../../image/688fen.png" class="sapce spa"><div class="mask spa"></div></td>
			            <td class="btn sapce"><img src="../../image/fenstart.png"class="sapce spa"></td>
			            <td class="lottery-unit lottery-unit-3"><img src="../../image/36fen.png" class="spa"><div class="mask spa"></div></td>
			        </tr>
			        <tr>
			            <td class="lottery-unit lottery-unit-6"><img src="../../image/366fen.png" class="sapce spa"><div class="mask spa"></div></td>
			            <td class="lottery-unit lottery-unit-5"><img src="../../image/166fen.png" class="sapce spa"><div class="mask spa"></div></td>
			            <td class="lottery-unit lottery-unit-4"><img src="../../image/66fen.png" class="spa"><div class="mask spa"></div></td>
			        </tr>
			    </table>
			</div>
		</div>
		<a href="" class="rule">活动规则&nbsp;<span class="iconfont">&#xe6b9;</span></a>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		data () {
			return {
				isShow: true
			}
		},
		methods: {
			lottery1: function () {
				this.isShow = true
			},
			lottery2: function () {
				this.isShow = false
			}

		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	.on
		background-color #f87867!important
		color:#fff!important
	.dis_none
		display:none
	.lottery
		max-width:414px
		margin:0 auto
		height:15.32rem
		background:url(../../image/lottery.png) no-repeat
		background-size:100%
		text-align:center
		overflow:hidden
		.login-box
			display:none
			.btn
				width:3.12rem
				height:.76rem
				border 1px solid #fff
				background-color: rgba(0,0,0,0)
				margin-top:3.31rem
				color:#fff
				border-radius:0.05rem
			p
				font-size:.2rem
				color:#ffffff
				opacity:0.7
				margin-top:.2rem
		.integral
			margin:3.3rem auto 1.03rem auto
			color:#fff
			font-size:.28rem
			vertical-align:middle
			span
				font-size:.54rem
		.lottery-box
			overflow:hidden
			width:6.9rem
			height:8.75rem
			background-color #f87c64
			margin:.6rem auto 0 auto
			.lottery-top
				width:6.9rem
				height:.8rem
				span
					display:block
					float:left
					width:50%
					height:100%
					background-color:#fdd3c8
					font-size:.28rem
					color:#ff5425
					line-height:.8rem
			.lotterys
				width: 6.39rem
				height: 7.26rem
				margin: .3rem  auto
			 	table
					td
						position: relative
						width: 2rem
						height: 2.22rem
						text-align: center
						color: #333
						img
							display: block
							width: 2rem
							height: 2.22rem
						.mask
							width: 2rem
							height: 2.22rem
							position: absolute
							left: 0
							top: 0
							background-color: #c3bbb5
							opacity: .5
							display: none
					td.active
						.mask
							display: block
				.sapce
					margin-right:.2rem
				.spa
					margin-top:.3rem
		.rule
			font-size:.24rem
			color:#fff
</style>