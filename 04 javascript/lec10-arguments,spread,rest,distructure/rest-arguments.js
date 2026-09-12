// function fun(){
//         console.log("arguments", arguments);

//         console.log(arguments[0]);
//         console.log(arguments[1]);
        
//         for (let i = 0 ; i < arguments.length; i++) {
//                 console.log(arguments[i]);
//         }
// }
//fun(10, "jt", true)

//const fun = function fun(){
  //      console.log("arguments", arguments);

    //    console.log(arguments[0]);
      //  console.log(arguments[1]);

        //for(let i = 0; i<arguments.length; i++) {
          //      console.log(arguments[i]);
        //}
//}
//fun(10, "jt", true)

//const fun = (...others) => {
    //console.log("others", others);
    //for(let i = 0; i<others.length; i++) {
      //  console.log(others[i]);
    //}
  //  others.forEach((el) => console.log(el));
//}
//fun(10, "jt", true, 10.25)

function f1(a, ...params){
    console.log("1. params",params);//20, 30
    console.log("2. arguments", arguments);//10, 20,30
}
f1(10, 20, 30)