import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// 300毫秒延迟
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
Vue.use(VueResource)
function setupWebViewJavascriptBridge(callback) {
	if (window.WebViewJavascriptBridge) {
		return callback(window.WebViewJavascriptBridge)
	}
	if (window.WVJBCallbacks) {
		return window.WVJBCallbacks.push(callback)
	}
	window.WVJBCallbacks = [callback]
	let WVJBIframe = document.createElement('iframe')
	WVJBIframe.style.display = 'none'
	WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
	document.documentElement.appendChild(WVJBIframe)
	setTimeout(function () {
		document.documentElement.removeChild(WVJBIframe)
	}, 0)
}
var accessId
var accessKey
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
	setupWebViewJavascriptBridge(function (bridge) {
		bridge.callHandler('h5ToNative_GetUserInfo', {}, function (response) {
			accessId = response.accessId
			accessKey = response.accessKey
		})
	})
}
Vue.http.headers.common['accessId'] = accessId
Vue.http.headers.common['accessKey'] = accessKey
Vue.http.headers.common['requestType'] = 'APP'
Vue.http.headers.common['sign'] = 'NO'
Vue.http.interceptors.push((request, next) => {
	// 此处this为请求所在页面的Vue实例
	next((response) => { // 在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
		if (response.body.code === 401) { // 与后台约定登录失效的返回码
			parent.location.href = '/login.vue'
		} else {
			return response
		}
	})
})
Vue.http.options.headers = {
	'Content-Type': 'application/text; charset=UTF-8'
}
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
