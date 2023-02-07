const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p> We couldn't find the page</p>
    <a href='/'> back Home
    `)
})
server.listen(5000)