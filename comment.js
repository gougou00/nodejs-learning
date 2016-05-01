var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content': '一起去看流星雨',
	'cid': 348
})

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.8',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'imooc_uuid=5d99dd3f-7999-4f1c-8b97-23bd1a8f7dbb; imooc_isnew_ct=1461779711; IMCDNS=0; loginstate=1; apsid=diZGEyMjcyNTQ3YzQ0NDQwOTU0MGMzMDdhOGZhN2IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTM5ODkyMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjaW5oZXJpdEBzaW5hLmNvbQAAAAAAAAAAAAAAAAAAAGE0MmZhM2ZiZDRmMWVlMWRmZWQzODQyM2Y2OWU4YTMxkvUjV5L1I1c%3DMj; last_login_username=cinherit%40sina.com; PHPSESSID=n8v1b80tttkjlb0usjjnu9v4l6; jwplayer.qualityLabel=è¶æ¸; imooc_isnew=2; cvde=5725a8fc846da-65; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1461974319,1462043834,1462078423,1462085883; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1462103051',
		'Host': 'www.imooc.com',
		'Origin': 'http://www.imooc.com',
		'Pragma': 'no-cache',
		'Referer': 'http://www.imooc.com/comment/348',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest'
	}
}

var req = http.request(options, function(res){
	console.log('Status: ' + res.statusCode)
	console.log('headers: ' + JSON.stringify(res.headers))
	res.on('data', function(chunk) {
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})
	res.on('end', function() {
		console.log('评论完毕！')
	})
})

req.on('error', function(e) {
	console.log('Error: ' + e.message)
})
req.write(postData)
req.end()