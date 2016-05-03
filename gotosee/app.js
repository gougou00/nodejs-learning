var express = require('express')
var path = require('path')
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('gotosee started on port ' + port)

// index page
app.get('/', function(req, res) {
	res.render('index', {
		title: 'gotosee 首页',
		movies: [{
			title: '荒野猎人',
			_id: 1,
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title: '荒野猎人',
			_id: 2,
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title: '荒野猎人',
			_id: 3,
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title: '荒野猎人',
			_id: 4,
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title: '荒野猎人',
			_id: 5,
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title: '荒野猎人',
			_id: 6,
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		}]
	})
})

// detail page
app.get('/movie/:id', function(req, res) {
	res.render('detail', {
		title: 'gotosee 详情页',
		movie: {
			doctor: '亚利桑德罗·冈萨雷斯·伊纳里多',
			country: '美国',
			title: '荒野猎人',
			year: 2016,
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF',
			language: '英语',
			flash: 'http://player.youku.com/player.php/sid/XMTU0MzQxNDg5Ng==/v.swf',
			summary: '休·格拉斯（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）是一名皮草猎人，在一次打猎途中被一头熊殴打成重伤后被同行的乘船船长安德鲁·亨利（多姆纳尔·格里森 Domhnall Gleeson 饰）救下，船长雇佣了两个人约翰·菲茨杰拉德（汤姆·哈迪 Tom Hardy 饰）和吉姆·布里杰（威尔·保尔特 Will Poulter 饰）来照顾他。约翰·菲茨杰拉德根本无心照顾格拉斯，一心只想着将格拉斯的财产占为己有，于是残忍的杀害了格拉斯的儿子，并说服吉姆·布里杰将格拉斯抛弃在荒野等死。两人原以为格拉斯就会这样离世，但格拉斯凭借坚强的毅力在野性的蛮荒之地穿行了好几个月，终于回到了安全地带并开始了复仇计划。'
		}
	})
})

// admin page
app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'gotosee 后台录入页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	})
})

// list page
app.get('/admin/list', function(req, res) {
	res.render('list', {
		title: 'gotosee 列表页',
		movies: [{
			title: '荒野猎人',
			_id: 1,
			doctor: '亚利桑德罗·冈萨雷斯·伊纳里多',
			country: '美国',
			year: 2016,
			language: '英语',
			flash: 'http://player.youku.com/player.php/sid/XMTU0MzQxNDg5Ng==/v.swf',
			summary: '休·格拉斯（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）是一名皮草猎人，在一次打猎途中被一头熊殴打成重伤后被同行的乘船船长安德鲁·亨利（多姆纳尔·格里森 Domhnall Gleeson 饰）救下，船长雇佣了两个人约翰·菲茨杰拉德（汤姆·哈迪 Tom Hardy 饰）和吉姆·布里杰（威尔·保尔特 Will Poulter 饰）来照顾他。约翰·菲茨杰拉德根本无心照顾格拉斯，一心只想着将格拉斯的财产占为己有，于是残忍的杀害了格拉斯的儿子，并说服吉姆·布里杰将格拉斯抛弃在荒野等死。两人原以为格拉斯就会这样离世，但格拉斯凭借坚强的毅力在野性的蛮荒之地穿行了好几个月，终于回到了安全地带并开始了复仇计划。'
		}]
	})
})