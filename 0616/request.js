const request = require('request');

var parseString=require('xml2js').parseString;


////https://www.npmjs.com/package/request
//npm i request
//npm i xml2js

request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109', function (error, response, body) {

    var xml=body
    parseString(xml,function(err,result){

        console.dir(result.rss.channel[0].item[0].description[0].header[0].wf[0]);
        //wf 태그 안에 있는 기상예보 값을 불러오기

    });

});


//날씨 API 데이터 가져오기
