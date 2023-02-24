const {writeFileSync}=require('fs')

for(let i=0;i<1000;i++){
    writeFileSync('./content/bigfile',`hello world this id node.js ${i} \n`,{flag:'a'})
}

