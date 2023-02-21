const http = require('http')

const server= http.createServer((req,res)=>{
    console.log('request event')
    res.end(`
    <h1>OOPS!</h1>
    <p>sorry this page is not availabe</p>
    <a href="/">backHome</a>
    `)
})

server.listen(5000,()=>{
    console.log('Server listening on port : 5000......... ')
})