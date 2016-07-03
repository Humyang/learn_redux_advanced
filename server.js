var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

let file_path = __dirname + '/www';

app.use(compression());

// 指定静态资源路径，例如 index.css
app.use(express.static(file_path))

// 所有请求都发送给 index.html 因此在 React Router 的 browserHistory 可以工作
app.get('*',function(req,res){
    res.sendFile(path.join(file_path,'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT,function(){
    console.log('Production Express server running at localhost : ' + PORT)
})
