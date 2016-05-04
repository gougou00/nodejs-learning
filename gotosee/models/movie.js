// 加载mongoose工具模块
var mongoose = require('mongoose')
// 引入模块
var MovieSchema = require('../schemas/movie')

var Movie = mongoose.model('Movie', MovieSchema)
// 导出模型
module.exports = Movie