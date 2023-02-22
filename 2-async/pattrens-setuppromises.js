import { readFile } from 'fs'


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


getText('./content/second.txt')
 .then((result)=>console.log(result))
 .catch((err)=> console.log(err))