const express=require('express')
const app=express()

//npm install ejs
//node .\expressServer.js
app.set('views',__dirname+'/views');
app.set('view engine','ejs');


//라우터 추가하기 
app.get('/',function(req,res){
    res.send('Hello World');

})

app.get('/test',function(req,res){

    //ejs 렌더 추가
    res.render('test');


})

app.get('/test2',function(req,res){

    //ejs 렌더 추가
    res.render('test2');
})

app.get('/inputTest', function(req,res){

    res.render('inputTest');
})

app.listen(3000)