<template>
	<div class="privilege">
		<table>
			<tr>
				<th>等级</th>
				<th>账户资产（上月日均）</th>
				<th>特权</th>
			</tr>
			<tr>
				<td>V0</td>
				<td>0-5万</td>
				<td>免费提现次数*1</td>
			</tr>
			<tr>
				<td>V1</td>
				<td>5-10万</td>
				<td>
					免费提现次数*2 <br>
					10元抵扣券*1 <br>
					50元抵扣券*2 <br>
					1%加息券*3 <br>
					2%加息券*1
				</td>
			</tr>
			<tr>
				<td>V2</td>
				<td>10-30万</td>
				<td>
					免费提现次数*3 <br>
					20元抵扣券*1 <br>
					50元抵扣券*1  <br>
					80元抵扣券*1  <br>
					1%加息券*1 <br>
					2%加息券*2
				</td>
			</tr>
			<tr>
				<td>V3</td>
				<td>30-50万</td>
				<td>
					免费提现次数*5 <br>
					30元抵扣券*1 <br>
					80元抵扣券*2  <br>
					1%加息券*2 <br>
					2%加息券*3
				</td>
			</tr>
			<tr>
				<td>V4</td>
				<td>50-100万</td>
				<td>
					免费提现次数*6 <br>
					30元抵扣券*1 <br>
					80元抵扣券*1  <br>
					100元抵扣券*1  <br>
					2%加息券*3 <br>
					3%加息券*1
				</td>
			</tr>
			<tr>
				<td>V5</td>
				<td>100-500万</td>
				<td>
					免费提现次数*6 <br>
					50元抵扣券*1 <br>
					100元抵扣券*2  <br>
					1%加息券*1 <br>
					2%加息券*3 <br>
					3%加息券*1
				</td>
			</tr>
			<tr>
				<td>V6</td>
				<td>≥500万</td>
				<td>
					免费提现次数*6 <br>
					100元抵扣券*3 <br>
					1%加息券*2 <br>
					2%加息券*3 <br>
					3%加息券*1
				</td>
			</tr>
		</table>
	</div>
</template>
<script type="text/ecmascript-6"></script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	.privilege
		max-width:414px
		margin:0 auto
		table
			width:100%
			font-size:.28rem
			text-align:center
			tr
				height:.81rem
				line-height:.81rem
				th
					background-color #f2f3f7
					color:#212a36
				th:first-child
					padding-left:.32rem
				th:last-child
					text-align:right
					padding-right:.32rem
				td
					font-size:.24rem
					background-color #fff
					color:#626262
					vertical-align:middle
					border-bottom:1px solid #e4e4e4
				td:first-child
					color:#ff7400
					font-size:.32rem
					text-align:center
					padding-left:.32rem
				td:last-child
					text-align:right
					padding-right:.32rem
					line-height:.5rem
</style>