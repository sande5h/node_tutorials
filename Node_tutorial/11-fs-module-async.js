const fs = require('fs')

fs.readFile('./content/first.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err)
        return ; 
    }
    const first = result
    fs.readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err);
            return
        }
        const second = result
        fs.writeFile('./content/third-async.txt',`this is the result ${first} ${second}`,{flag : 'a'},(err,result)=>{
            if (err){
                console.log(err)
                return
            }

            console.log("Write write successfull")
        })
    })
})