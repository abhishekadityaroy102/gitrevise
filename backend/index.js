const http=require("http");
const server=http.createServer((req,res)=>{
    return res.statusCode(200).send("HELLO FROM SERVER SIDE")
})