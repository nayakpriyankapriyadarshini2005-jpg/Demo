//var a=61
//let b=63

//LOCAL SCOPE

//debugger
// var c = 10
// console.log(c)


// let l = 20
// console.log(l)

// debugger
// function greet(){
//     var a = 10
//     console.log(a)
//    // debugger;
// }
// greet()

// debugger
// function greet(){
//     let a = 10
//     console.log(a)
//     //debugger;
// }
// greet()

//  debugger
// function show(){
//     const b = 40
//     console.log(b)
//     //debugger;
// }
//  show()
// debugger
// function call(){
//     var c = 10
//   console.log(c)
// //    // debugger;
// }
// call()

//BLOCK SCOPE

//debugger
// {
// let age =21
// if(age==21){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// }

// const num =21
// if(num==21){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// {
// var num1 =21
// if(num1==21){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// }

// {
//   debugger
//     var e = 61
//     let f = 63

//     console.log(e)
//     console.log(f)
// }
// console.log(e)
// console.log(f)

//------->LEXICAL SCOPE<--------
// debugger
// function fun1() {
//     let x =61
//     console.log(x)
//     //console.log("value of y inside nested function",y)
// function fun2(){
//     let y = 63
//     console.log(y)
//     console.log("value of x inside nested function", x)

//     function fun3(){
//         console.log("value of y inside fun3", y)
//         console.log("value of x inside fun3", x)
        
//         console.log("value of a inside fun3", a)
//         console.log("value of b inside fun3", b)

//     }
//     console.log("before fun3 call")
// fun3()
// console.log("after fun3 call")

// }
// console.log("before fun2 call")
// fun2()
// console.log("after fun2 call")

// }
// fun1()


var r = 6;
let t = 107;

//debugger
function show() {
    let a =61
     console.log(a)
    
    //console.log("value of b inside nested function",b)
debugger
function show2(){
    var b = 63
    console.log(b)
    //console.log("value of a inside nested function", a)

    function show3(){
        console.log("value of a inside show3", a)
        console.log("value of b inside show3", b)
        
        console.log("value of r inside show3", r)
        console.log("value of t inside show3", t)
debugger
    function show4(){
        console.log("value of a inside show4", a)
        console.log("value of b inside show4", b)

    function show5(){
        console.log("value of r inside show5", r)
        console.log("value of t inside show5", t)
    }    
    console.log("before show5 call")
    show5()
    console.log("after show5 call")
    }    
    console.log("before show4 call")
    show4()
    console.log("after show4 call")
    }
    console.log("before show3 call")
show3()
console.log("after show3 call")

}
console.log("before show2 call")
show2()
console.log("after show2 call")

}
show()

