// 加载mongoose工具模块
var mongoose = require('mongoose')
// 引入模块
var UserSchema = require('../schemas/user')

var User = mongoose.model('User', UserSchema)
// 导出模型
module.exports = User