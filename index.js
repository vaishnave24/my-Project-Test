const http = require('http')


const server = http.createServer((req,res)=>{
res.end("Welcome!")
})

const PORT = 8090;
server.listen(PORT,()=>{
console.log(`Server lisning on ${PORT}`)
});