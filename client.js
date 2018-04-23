'use strict;'
const Sort = require('./sort.js');

//change size of array
let size = 10;
let list = new Int32Array(size);

//fill array with random #s
for(let a = 0;a<size;a++){
	let num = Math.round(size*Math.random());
	list[a] = num;
}


//console.log(Sort().bubble(list));
//console.log(Sort().selection(list));
//console.log(Sort().insertion(list));
//console.log(Sort().merge(list));

//toggle this off to test array build
//switch out the keyword to test different sorting algorithms
list = Sort().merge(list);
