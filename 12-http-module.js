const http = require('http')

const server = http.createServer((req,res)=>{

    if (req.url === '/'){
        res.write('Welcome to our web server')
        res.end()
    }

    else if (req.url === '/about'){
        res.write("Here is our short history")
        res.end()
    }

    else {
        res.end(`
    <h1>Oops! </h1>
    <p> we can't seem to find the page you are looking for <p>
    <a href = '/'> Return Home </a>`)}
})

server.listen(4000)