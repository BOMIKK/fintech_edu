var car1 = {
	name : "sonata",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

var car2 = {
	name : "BMW",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}
//            0     1
var cars = [car1, car2];
console.log(cars[0].name);

for (i = 0; i < cars.length; i++) {	
    if(cars[i].name=='BMW'){
		console.log("find!");
		
	}
}
