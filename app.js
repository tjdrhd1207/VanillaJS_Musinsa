const express = require('express');
const path = require("path");

const app = express();


//middleware 설정
//__dirname을 빼도 되지만 포함하는게 정석
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//Single page이기 때문에
//모든 경로에서 index.html을 불러옴
app.get("/*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running");
})


/* app.get('/', function(req, res){
    res.send('hello NodeJs');
});

const PORT = 3000;
const mainPageRouter = require("./router/mainPage");

app.listen(PORT, ()=>console.log('3000번 포트대기'));

app.use("/main", mainPageRouter);
 */