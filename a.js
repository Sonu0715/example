// callback
// function arrayModify(arr,callback) {
//     arr.push(100);
//     callback();
    
// }
// var arr = [1,2,3,4,5];
// arrayModify(arr,function(){
//     console.log("array has been modified",arr)
// })

// reverse string
// function reverseString (str){
//     console.log("hello")
//   return str.split("").reverse().join("");
// }
// reverseString("hello");

var string = "Welcome !";

var revString = string.split("").reverse().join("");
console.log(revString)