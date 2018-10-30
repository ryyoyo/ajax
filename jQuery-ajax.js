window.jQuery = function(nodeOrSelector){
	let nodes = {}
	nodes.addClass = function(){}
	nodes.html = function(){}
	return nodes
}
window.$ = window.jQuery

window.jQuery.ajax = function(options){
	let url
	if(arguments === 1){
		url = options.url
	}else if(arguments === 2){
		url = arguments[0]
		options = arguments[1]
	}
	let method = options.method
	let body = options.body
	let successFn = options.successFn
	let failFn = options.failFn
	let headers = options.headers

	let request = new XMLHttpRequest()
	request.open(method,url)
	for(key in headers){
		let value = headers[key]
		request.setRequestHeader(key,value)
	}
	request.onreadystatechange = ()=>{
		if(request.readyState === 4){
			if(request.status >= 200 && request.status < 300){
				successFn.call(undefined, request.responseText)
			}else if(request.status >= 400){
				failFn.call(undefined, request)
			}
		}
	}
	request.send(body) //设置request 第四部分(不能在GET里面设置)
}

function f1(responseText){}
function f2(responseText){}

myBtn.addEventListener('click',(e)=>{
	window.jQuery.ajax({
		url: '/yyy',
		method: 'post',
		headers: {
			'content-type':'application/x-www-form-urlencoded',
			'ry':'25'
		},
		successFn: (x)=>{
			f1.call(undefined, x)
			f2.call(undefined, x)
		},
		failFn: (x)=>{
			console.log(x)
			console.log(x.status)
			console.log(x.responseText)
		}
	})
})