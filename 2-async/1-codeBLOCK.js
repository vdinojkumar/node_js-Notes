const http =require('http')


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home page')
    }
    if(req.url==='/abt'){
        //BLOCKING VODE
        for(let i=0;i<1000;i++){
            for(let j=0;j<100;j++){
                console.log(`${i,j}`)
            }
        }
    }
    res.end('error page')
})

server.listen(5000,()=>{
    console.log('server gettin ready')
})