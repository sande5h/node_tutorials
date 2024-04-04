
const {createReadStream} = require('fs')
const stream = createReadStream('./content/large.txt',{highWaterMark:90000})
// const stream = createReadStream('./content/large.txt')
 
stream.on('data',(result) =>{
    console.log(result)
})


// const stream = createReadStream('./content/large.txt',{highWaterMark:90000})app.js


//chunck read and write to server 
var http = require('http')
var fs = require('fs')


http.createServer( function (req,res){
    const fileStream = fs.createReadStream('./content/large.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
}).listen(5000)

