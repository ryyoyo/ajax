myBtn.addEventListener('click',(e)=>{
	let request = new XMLHttpRequest()
	request.open('POST','/xxx') //配置request
	request.setRequestHeader('ry','25') //设置请求头
	request.setRequestHeader('Content-Type','x-www-form-unlencoded') //修改请求头
	request.send('设置request 第四部分') //设置request 第四部分(不能在GET里面设置)
	request.onreadystatechange = ()=>{
		if(request.readyState === 4){
			console.log('请求响应都完毕了')
			console.log(request.status)
			if(request.status >= 200 && request.status < 300){
				console.log('请求成功')
				console.log(request.getAllResponseHeaders()) //获取responseHeader
				// console.log(typeof request.responseText)
				// console.log(request.responseText)
				//let parser = new DOMParser();
				//let xmlDoc = parser.parseFromString(request.responseText,'text/xml')
				//let c = xmlDoc.getElementsByTagName('content')[0].textContent
				//console.log(c)


				//把符合 JSON 语法的字符串
				let string = request.responseText
				//转换成 JS 对应的值
				let object = window.JSON.parse(string)
				//JSON.parse 是浏览器提供的
				//document.getElementById 是浏览器提供的
				// console.log(typeof object)
				// console.log(object)
				// console.log(object.note)
				// console.log(object.note.from)
				// console.log(object.note.to)
			}else if(request.status >= 400){
				console.log('请求失败')
			}
		}
	}
})










