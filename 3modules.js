//modules

const names= require('./4-names')

const sayhi=require('./3modules')
// 
require('./sums')

sayhi(names.ani)
sayhi(names.dinoj)



const sayhi=(name)=>{
    console.log(`hello there ${name}`)
}

module.exports=sayhi