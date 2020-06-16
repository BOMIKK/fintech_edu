var car={
    name:"sonata",
    ph:"500ph",
    start:function(){
        console.log("engine is starting");

    },
    stop :function(){
        console.log("engine is stopped");

    }

}

console.log('car name:', car.name);
console.log('car ph:', car.ph);
car.start();

//객체 실행
