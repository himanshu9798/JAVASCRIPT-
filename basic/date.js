const date=new Date();
// console.log(date.toString());
// //Fri Jun 21 2024 10:01:49 GMT+0000 
// console.log(date.toISOString());
// //2024-06-21T10:06:08.696Z
// console.log(date.toDateString());
// //Fri Jun 21 2024
// console.log(date.toLocaleDateString());
// //6/21/2024
// console.log(typeof date);
//object

let mycreateddate=new Date(2023,1,23);
console.log(mycreateddate.toDateString());
let mycreateddae=new Date(2023,1,23 ,5,3);
console.log(mycreateddae.toLocaleString());
