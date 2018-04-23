'use strict;'
const Sort = require('./sort.js');

var size = 30000;
var smList = [1,9,2,8,3,7,4,6,5];
var mdList = new Int32Array(size);
var lgList = new Int32Array(size*size);


for(var a = 0;a<size;a++){

	var num = Math.round(size*Math.random());
	mdList[a] = num;
}

for(var a = 0;a<size;a++){
	for(var b = 0;b<size;b++){
		lgList[a*size+b] = Math.round(size*size*Math.random());
	}
}

//console.log(mdList);
//console.log(lgList);

var list = mdList;

//Copy this code inside the logs below to run the code.
//console.log(Sort().bubble(list));
//console.log(Sort().selection(list));
//console.log(Sort().insertion(list));
//console.log(Sort().merge(list));

list = Sort().merge(list);