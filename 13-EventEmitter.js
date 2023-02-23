const EventEmitter=require('events')

const customEmitter= new EventEmitter()

customEmitter.on('reponse',(name,id)=>{
    console.log(`received data name ${name} id : ${id}`);
})
customEmitter.on('reponse',()=>{
    console.log(`other data`);
})


customEmitter.emit('reponse',"dinoj",43)