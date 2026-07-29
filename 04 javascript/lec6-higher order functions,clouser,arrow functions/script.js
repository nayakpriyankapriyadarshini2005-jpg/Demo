// function fun(f1){
// console.log("value of f1", f1)
// }
// fun(10)
// fun(true)
// fun("JT")

// function hello(){
    // console.log("Hello Evberyone.")
// return 100
//}
//hello()
 //hello
// console.log(hello)

// let x = hello()

// x = hello()

// x = hello

// x()

//fun(hello())//return function with value.so it is a normal function
//fun(hello)//only shows definition of function,so it is called higher order function
//here hello is an called back function bcz it is called inside
//another function as an argument.

// function call (c1){
//     console.log("value of c1",c1)
//     return function show(){
//         console.log('show function')
//     }

//     function show(s1){
//         console.log("value of s1",s1)
//         return 100
//     }
    
//     show()
    
// }
// call()

// function f3(){
//     console.log("this a f3 function")
// }

// function f2(){
//     console.log('this f2 function')
// }

// function f1(){
//     console.log("f1 function")
//     return 61
    // return function f2(){
    //     console.log('f2 is a function')
    // } 
    //return f2()
    // return f2
    // //return f3//higher order bcz i need function definition call
   // return f3()//function value return

  // return function f3(){
    //console.log("value of f3 is 63")
   //}
//}

 //let x = f1()
// console.log("//////",x)
//x()


//=============== setTimeout, setInterval =============

// console.log(1)
// console.log(2)
// console.log(3)

// console.log(1)
// setTimeout(function f1(){//settimeout(f1,/f1()/undefined 3000)
// console.log(2)//consol.log(3)
// },3000)
// function f1(){
//     console.log(2)
// }
// console.log(3)


console.log("hii")
    setTimeout(function call(){
        console.log("priyanka")
    }, 5000)
    console.log("hello")


    function f1(){
        console.log(2)
    }
    //setInterval(f1, 2000)//const Interval variable name
    const intervalId=setInterval(f1, 2000)
    console.log("/////// " ,intervalId)

    // setTimeout(function (){
    //     console.log("clearing intervalId")
    //     clearInterval(intervalId)
    // },10000)