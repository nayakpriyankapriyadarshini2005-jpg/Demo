// const f1 = function greet(){
//     console.log("Hello, World!");
// }//func expresn
// //greet();
// f1();

// const concatStrings = function concatStrings(str1, str2){
//     console.log(str1 + " " + str2);
// }
// concatStrings("Hello", "World");

// let f2 = function fun(a, b){

//     return a + b;//return a+' ' +b
// }
// console.log(f2("hii",  "priyanka"));//"", ' ', " "//function expression
// console.log("//////", f2)
// console.log(f2());//a n b is undifine so two undifine print NaN


// function(a){
// console.log(a);//function declaration without annonymous function name is not allowed
                //except function declararion we can use annonymous other functions
                //function name is optional in function declaration becauz it call the function.
//}

//=======Arrrow function=========
// const add = (a, b) => {
//     console.log("adding  a, b")
// return a+b;
// }

// const result = add(10, 20);
// console.log(result);

// const add = (a, b) => a + b;
// //const add = (a, b=120) => a + b;
// //const result = add(10, 20);
// //const result = add(10);

// const add1 = (a, b) => a + b;
//const result1 = add1(10, 20);
//console.log(result1);

const name =(name='priyanka') =>name
//const name =(name)=>
// const result = name("priyanka");
// console.log(result);
console.log("Say hello",name())
//console.log("Say hello",result);

// (function (name){
//     console.log("hello", name)
// })("priyanka")


// (function (name){
//     console.log("hello", name)
// })("priyanka");

// console.log("java tech")