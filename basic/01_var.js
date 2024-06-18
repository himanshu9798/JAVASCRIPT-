const account_id=12345;//cannot be changed const//
let accountEmail="barnawalhimanshu0@gmail.com";
var accountpassword="12345";
accountcity="gopalganj";
let accountstate;//if we print this will print undefined

accountEmail="hello@gmail.com";
/*
prefer not to use var
beacuse of issue in block scope and functional scope
*/
accountpassword="45678"
accountcity="bihar";
console.log(account_id);
console.table([accountEmail,accountpassword,accountcity,accountstate]);
