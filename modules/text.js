// function add(x){
//   return x
// }
// var xx = 6;
// module.exports={
//   add,
//   xx
// }


// function teacher(name){
//   console.log(`My name is ${name}`);
// }
// let str = 'hello';
// module.exports.str = str;
// module.exports.teacher = teacher;


function sum(x,y){
  console.log(x+y)
}
var snow = {
  age : 'heng'
}
// export {sum,snow};//命名导出
export default sum;//默认导出，只能导出一个{一个js只做一个功能}
