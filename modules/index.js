var path = require('path') ;

console.log(path);


var $ = require('jquery')

console.log($);
$(document).ready(
  function(){
    alert('dom准备完毕')
  }
)
var aa = require('./text.js');
console.log(aa);
console.log(aa.add(5));
console.log(aa.xx);
