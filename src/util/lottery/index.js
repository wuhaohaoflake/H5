$(function() {
	var lottery = {
		place: 0, //请求后指定停留在某个位置
		click: false, //默认值为false可抽奖，防止重复点击
		index: -1, //当前转动到哪个位置，起点位置
		count: 0, //总共有多少个位置
		timer: 0, //setTimeout的ID，用clearTimeout清除
		speed: 20, //初始转动速度
		times: 0, //转动次数
		cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
		prize: -1, //中奖位置
		init: function(id) {
			if ($("#" + id).find(".lottery-unit").length > 0) {
				$lottery = $("#" + id);
				$units = $lottery.find(".lottery-unit");
				this.obj = $lottery;
				this.count = $units.length;
				$lottery.find(".lottery-unit-" + this.index).addClass("active");
			};
		},
		roll: function() {
			var index = this.index,
				count = this.count,
				lottery = this.obj;
			$(lottery).find(".lottery-unit-" + index).removeClass("active");
			index += 1;
			if (index > count - 1) {
				index = 0;
			};
			$(lottery).find(".lottery-unit-" + index).addClass("active");
			this.index = index;
			return false;
		},
		stop: function() {
			lottery.times += 1;
			lottery.roll(); //转动过程调用的是lottery的roll方法，这里是第一次调用初始化
			if (lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
				clearTimeout(lottery.timer);
				lottery.prize = -1;
				lottery.times = 0;
				lottery.click = false;
				//可以在这个位置写上中奖弹框，这个是转盘停止时触发事件
//				alert('您抽中了第' + lottery.place + '个奖品');
			} else {
				if (lottery.times < lottery.cycle) {
					lottery.speed -= 10;
				} else if (lottery.times == lottery.cycle) {
					lottery.place = Math.random() * (lottery.count) | 0; //案例中奖物品通过一个随机数生成
					lottery.prize = lottery.place;
					// lottery.prize = lottery.place;  //这个可以通过ajax请求回来的数据赋值给lottery.place    
				} else {
					if (lottery.times > lottery.cycle + 10 && ((lottery.prize == 0 && lottery.index == 7) || lottery.prize == lottery.index + 1)) {
						lottery.speed += 110;
					} else {
						lottery.speed += 20;
					}
				}
				if (lottery.speed < 40) {
					lottery.speed = 40;
				};
				lottery.timer = setTimeout(lottery.stop, lottery.speed); //循环调用
			}
			return false;
		},
		getLottery: function() {//ajax请求中奖接口，本案例注释便于案例正常展示效果，实际中可参考注释的代码
			// $.ajax({
			//     url: '/activity/lottery',//中奖接口
			//     type: 'POST',
			//     dataType: 'json',
			//     data: {
			//         'activityCategory': 'POINT_SHOP'//提交字段
			//     }
			// })
			// .done(function(data) {
			//     if (data.returnCode == 0) {//登录后的操作

			//         switch (data.prize) {//请求返回的抽中奖品字段
			//             case 'POINT_SHOP_INTEREST_COUPON_2': //0.2加息券
			//                 lottery.place = 7;//当前奖品所在九宫格位置
			//                 break;
			//             case 'POINT_SHOP_RED_ENVELOPE_10': //10元投资红包
			//                 lottery.place = 0;//当前奖品所在九宫格位置
			//                 break;
			//             case 'POINT_SHOP_POINT_500': //500积分
			//                 lottery.place = 1;//当前奖品所在九宫格位置
			//                 break;
			//             case 'POINT_SHOP_PHONE_CHARGE_10': //10元话费
			//                 lottery.place = 5;//当前奖品所在九宫格位置
			//                 break;
			//             case 'OINT_SHOP_JD_100': //100元京东卡
			//                 lottery.place = 2;//当前奖品所在九宫格位置
			//                 break;
			//             case 'POINT_SHOP_POINT_3000': //3000积分
			//                 lottery.place = 6;//当前奖品所在九宫格位置
			//                 break;
			//             case 'POINT_SHOP_INTEREST_COUPON_5': //0.5加息券
			//                 lottery.place = 4;//当前奖品所在九宫格位置
			//                 break;
			//             case 'POINT_SHOP_RED_ENVELOPE_50': //50元投资红包
			//                 lottery.place = 3;//当前奖品所在九宫格位置
			//                 break;
			//         }
			lottery.speed = 100;
			lottery.stop(); //转圈过程不响应click事件，会将click置为false
			lottery.click = true; //一次抽奖完成后，设置click为true，可继续抽奖
			//     } else if (data.returnCode == 1) {//没有抽奖机会
			//         alert('没有抽奖机会');
			//     } else if (data.returnCode == 2) {//未登录
			//         location.href='/login';
			//     } else if (data.returnCode == 3) {//不在活动时间范围内！
			//         alert('不在活动时间内');
			//     } else if (data.returnCode == 4) {//实名认证
			//         alert('未实名认证');
			//     }
			// })
			// .fail(function() {
			//     alert('请求失败，请重试！');
			// });
		}
	};

	$("#lottery .btn").on('click', function(event) {
		event.preventDefault();
		lottery.init('lottery');
		if (lottery.click) { //click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
			return false;
		} else {
			lottery.getLottery(); 
			return false;
		}
	});
	
	$("#lottery2 .btn").on('click', function(event) {
		event.preventDefault();
		lottery.init('lottery2');
		if (lottery.click) { //click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
			return false;
		} else {
			lottery.getLottery(); 
			return false;
		}
	});
});