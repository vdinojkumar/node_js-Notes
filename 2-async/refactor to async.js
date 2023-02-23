const {readFile}=require('fs')


const getText=(path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
const start=async()=>{
    try {
        const first=await getText('./content/first.txt')
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}

start()


// getText('./content/first.txt')
//  .then((result)=>console.log(result))
//  .catch((err)=> console.log(err))


 