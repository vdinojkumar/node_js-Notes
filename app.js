const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('dinoj website')
    }
    res.end(`
    <h1>OOPS!</h1>
    <p>sorry this page is not availabe</p>
    <a href="/">backHome</a>
    `)
})

server.listen(5000)

//http://localhost:5000/