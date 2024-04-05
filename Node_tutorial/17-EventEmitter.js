const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log("Hello Here")
})

customEmitter.emit('response')