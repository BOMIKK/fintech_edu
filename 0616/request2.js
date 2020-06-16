const request = require('request');

var parseString=require('xml2js').parseString;


////https://www.npmjs.com/package/request
//npm i request
//npm i xml2js

request('/JSON 형식 데이터 API 주소 입력 /', function (error, response, body) {
   var data=JSON.parse(body);
   console.log(data);
   

});


