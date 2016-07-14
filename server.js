var express = require('express')
var path = require('path')
var compression = require('compression')

import React from 'react'
import {renderToString} from 'react-dom/server'
import {match,RouterContext} from 'react-router'
import routes from './src/modules/routes.js'




var app = express()

let file_path = __dirname + '/www';

app.use(compression());

// 指定静态资源路径，例如 index.css
app.use(express.static(file_path))

// 所有请求都发送给 index.html 因此在 React Router 的 browserHistory 可以工作
app.get('*',function(req,res){

    match({routes:routes,location:req.url},(err,redirect,props)=>{
        if(err){
            res.status(500).send(err.message)
        }else if(redirect){
            res.redirect(redirect.pathname + redirect.search)
        }else if(props){
            // RouterContext 是 Router 所渲染的内容
            // Router 将 props 保存在 state 中监听 'browserHistroy'
            // 但服务端是无状态程序，所以我们需要使用 'match' 在渲染之前获取 props
            const appHtml = renderToString(<RouterContext  {...props}/>)

            res.send(renderPage(appHtml))
        }else{
            res.status(404).send('Not Found')
        }
    })
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

var PORT = process.env.PORT || 8080
app.listen(PORT,function(){
    console.log('Production Express server running at localhost : ' + PORT)
})
