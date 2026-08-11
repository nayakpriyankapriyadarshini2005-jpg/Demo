function f1(){
    console.log("hii")
  return function f2(){
    console.log("priyanka")
  }
//   let a = 10
//   function f2(){
//     console.log(a)
//   }
//   f2()
}
f1()

function f1(){
    let num =10
    console.log("hii")
  return function f2(){
    console.log("priyanka")
    num++
    console.log("number value is : " +num)
  }
//   let a = 10
//   function f2(){
//     console.log(a)
//   }
//   f2()
}
f1()

debugger
const nestedFun = f1()
nestedFun()
nestedFun()
nestedFun()


function f1(){
    let num =10
    console.log("hii")
  return function f2(){
    console.log("priyanka")
    num++
    console.log("number value is : " +num)
  }
}
f1()
