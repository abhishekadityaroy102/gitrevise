const http=require("http");
const server=http.createServer((req,res)=>{
    return res.statusCode(200).send({
        res:"HELLO FROM SERVER SIDE"
    })
})