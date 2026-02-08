// function x(){
//     var a = 7
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x()


// function x(){
//     var a = 7
//     function y(){
//         console.log(a)
//     }
//     return y
// }
//  var z = x()
//  console.log(z)
//  //...............
//  z()

// function x(){
//     var a = 7
//  return   function y(){
//         console.log(a)
//     }
   
// }
//  var z = x()
//  console.log(z)
//  //...............
//  z()

// function x(){
//     var a = 7
//    function y(){
//         console.log(a)
//     }
//     a = 100
//     return y
   
// }
//  var z = x()
//  console.log(z)
//  //...............
//  z()

// function z(){
//     var b = 900
//     function x(){
//     var a = 7
//    function y(){
//         console.log(a,b)
//     }
//     y()
   
// }
//  x()
// }
//  z()

//EP-11 | setTimeout + Closures Interview Question 🔥
// function x(){
//     var i = 1
//     setTimeout(function()
// {
//     console.log(i)
// },3000)
// console.log("Namaste Javascript")
// }
// x()


//print 1 2 3 4 5

function x(){
    for(let i =1; i<=5; i++)
    
    setTimeout(function()
{
    console.log(i)
},i* 3000)
console.log("Namaste Javascript")
}
x()

