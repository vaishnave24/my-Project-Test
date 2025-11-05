const express = require("express");

const app = express();

const PORT = 8080;
app.get('/test',(req,res)=>{
res.end("hello from Express")
})
app.listen(PORT, () => {
  console.log(`express server lisning on ${PORT}`);
});
