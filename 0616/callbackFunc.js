var fs=require('fs');
;

function callReadFile(callback){
    fs.readFile('./example/test.txt','utf8',function(err,result){

        if(err){
            console.error(err);
            throw err;
        
        }
        else{
            callback(result);
        }
        
        });
}

console.log('first func');
console.error("두번째기능인데 파일을 읽어오느라 시간이..");
callReadFile(function (data){
    console.log(data);
    
    console.log('third func')

})

//node .\callbackFunc.js