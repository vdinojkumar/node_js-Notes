const http=require('http')

// //const server=http.createserver((req,res)=>{
//     res.end('Welcome')
// })

//USing Event Emitter Api
const server = http.createServer()


//emits request event 
//subscribe to it /listen for it /respond

server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)