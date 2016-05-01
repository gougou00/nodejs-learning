var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)

function water() {
	console.log('give ' + who + ' some water')
}

// addEventListener
life.on('please', water)

life.on('please', function(who) {
	console.log('give ' + who + ' some fruits')
})

life.on('please', function(who) {
	console.log('give ' + who + ' some bananas')
})

life.on('please', function(who) {
	console.log('give ' + who + ' some ...4')
})

life.on('please', function(who) {
	console.log('give ' + who + ' some ...5')
})

life.on('please', function(who) {
	console.log('give ' + who + ' some ...6')
})

life.on('please', function(who) {
	console.log('give ' + who + ' some ...7')
})
life.on('please', function(who) {
	console.log('give ' + who + ' some ...8')
})
life.on('please', function(who) {
	console.log('give ' + who + ' some ...9')
})
life.on('must', function(who) {
	console.log('give ' + who + ' some 1...')
})

life.on('must', function(who) {
	console.log('give ' + who + ' some 2...')
})

life.removeListener('please', water)
life.removeAllListeners('please')

var hasConfortListener = life.emit('please', 'superman')
var hasLovedListener = life.emit('must', 'girl')
// var hasPlayedListener = life.emit('may', 'toys')

// console.log(hasConfortListener)
// console.log(hasLovedListener)
// console.log(hasPlayedListener)

console.log(life.listeners('please').length)
console.log(life.listeners('must').length)
// console.log(EventEmitter.listenerCount(life, 'please'))