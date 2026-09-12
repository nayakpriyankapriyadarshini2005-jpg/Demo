//function declaration
//function <fun_name>(list of params){}

function myFun(){
    console.log("Good Morning!!")
}

 myFun()

function greet(name = 'piku'){//'priya'
    console.log("Good morning", name, '!!')
}
 greet("priyanka")
greet(true)
greet(10)
greet()
greet("priya" , 10)

 function addJTTag(name){
     return "JT ans " + name
 }
 addJTTag(biku)
//let updateName =addJTTag("priya")
// console.log(updateName)

function add(a,b){
return(a+b)
}
console.log(add(10, 20))
