// var path = require('path') ;
//
// console.log(path);
//
//
// var $ = require('jquery')

// console.log($);
// $(document).ready(
//   function(){
//     alert('dom准备完毕')
//   }
// )


//第三方模块(不需要写路径)
import React from 'react';



// var aa = require('./text.js');
// console.log(aa);
// console.log(aa.add(5));
// console.log(aa.xx);

// var str = 666;
// aa.teacher(str);

// 命名导出，名称一致
// import {sum,snow} from './text.js';
// sum(5,6);
// console.log(snow.age)
// 默认导出，随意起名
// import aaa from './text.js';
// console.log(aaa);



import {Cat,i} from './cat'

let Dabai = new Cat;
Dabai.sayHello();

let i = 10;
console.log(i);
