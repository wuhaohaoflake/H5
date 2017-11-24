import Vue from 'vue'
import Router from 'vue-router'
import demo1 from 'components/demo1/demo1'
import demo2 from 'components/demo2/demo2'
import demo3 from 'components/demo3/demo3'
import demo4 from 'components/demo4/demo4'
import share from 'components/invite/invite_share'
<<<<<<< HEAD
import rule from 'components/invite/invite_rule'
import friends from 'components/invite/invite_friends'
import record from 'components/invite/invite_record'
import feedback from 'components/help/feedback'
import rates from 'components/help/rates'
import center from 'components/member/member_center'
import rules from 'components/member/member_rule'
import privilege from 'components/member/member_privilege'
import lotteryRule from 'components/lottery/lottery_rule'
import lotterys from 'components/lottery/lottery_lotterys'
import prize from 'components/lottery/lottery_prize'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		redirect: '/friends'
	}, {
		path: '/demo1',
		component: demo1
	}, {
		path: '/demo2',
		component: demo2
	}, {
		path: '/demo3',
		component: demo3
	}, {
		path: '/demo4',
		component: demo4
	}, {
		path: '/share',
		component: share
	}, {
		path: '/rule',
		component: rule
	}, {
		path: '/friends',
		component: friends
	}, {
		path: '/record',
		component: record
	}, {
		path: '/feedback',
		component: feedback
	}, {
		path: '/rates',
		component: rates
	}, {
		path: '/center',
		component: center
	}, {
		path: '/rules',
		component: rules
	}, {
		path: '/privilege',
		component: privilege
	}, {
		path: '/lotteryRule',
		component: lotteryRule
	}, {
		path: '/lotterys',
		component: lotterys
	}, {
		path: '/prize',
		component: prize
	}]
=======

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/share'
  }, {
    path: '/demo1',
    component: demo1
  }, {
    path: '/demo2',
    component: demo2
  }, {
    path: '/demo3',
    component: demo3
  }, {
    path: '/demo4',
    component: demo4
  }, {
    path: '/share',
    component: share
  }]
>>>>>>> 9bccecae0560648375b6a27a14b83e11bfe72d65
})