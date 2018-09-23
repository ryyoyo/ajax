myBtn.addEventListener('click',(e)=>{
	let request = new XMLHttpRequest()
	request.onreadystatechange = ()=>{
		if(request.readyState === 4){
			console.log('请求响应都完毕了')
			if(request.status >= 200 && request.status < 300){
				console.log('请求成功')
				console.log(typeof request.responseText)
				console.log(request.responseText)
				/*let parser = new DOMParser();
				let xmlDoc = parser.parseFromString(request.responseText,'text/xml')
				let c = xmlDoc.getElementsByTagName('content')[0].textContent
				console.log(c)*/
				let string = request.responseText
				let object = window.JSON.parse(string)
				console.log(typeof object)
				// console.log(object)
				console.log(object.note)
				console.log(object.note.from)
				console.log(object.note.to)
			}else if(request.status >= 400){
				console.log('请求失败')
			}
		}
	}
	request.open('GET','/xxx')
	request.send()
})