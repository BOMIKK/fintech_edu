var http=require("http");

http.createServer(function(req,res){


    var body="hello Server";
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    res.end("<h1>안녕하세요</h1><div>test</div>");

}).listen(3000);
console.log('server is Started');

//node .\httpServer.js 3000포트 접속하여 서버 확인

//노드 기본 모듈을 활용한 http 서버 작성