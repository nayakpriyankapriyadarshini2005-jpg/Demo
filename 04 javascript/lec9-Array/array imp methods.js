// const num = [10, 20, 30, 40, 50]

// for(let i = 0; i<num.length; i++)
//     console.log(num[i]);

// //console.log("Hello")

// num.forEach(function f1(values,idx,arr){//callback func execute time is equal to how many element in that array 
//     console.log("value is", values, "at index", idx, "of array", arr)
// })

// num.forEach(f1)
// function f1(values, idx, arr){
//     console.log("value is", values, "at index", idx, "of array", arr)
// }//function declaration

// const f1 = function(values, idx, arr){
// console.log("value is", values, "at index", idx, "of array", arr)
// }
// num.forEach(f1)//function expression

// num.forEach(function(values, idx, arr){
//     console.log("value is", values, "at index", idx, "of array", arr)
// })//annonymouse function

// num.forEach((values, idx, arr) => {
//     console.log("value is", values, "at index", idx, "of array", arr)//arrow function
// })



//======Map Function========
// const numbersIncreasedByTwo = numbers.map((values, idx, arr) => {
//     console.log("value is", values, "at index", idx, "of array",arr)
//     return value+2
// })
// console.log('numbersIncreasedByTwo', numbersIncreasedByTwo);

// const squareNumbers = numbers.map(num => num*num)//value*value
// console.log("squareNumbers are", squareNumbers)

// const cubeNumbers = numbers.map(num => num*num*num)
// console.log("cubeNumbers are", cubeNumbers)

// const users = [
//   {   id : 102,
//     name : 'priya nayak',
//     salary: 10000
// },
// {
//     id : 105,
//     name : "priyanka nayak",
//     salary: 6585340
// },
// {
//     id :103,
//     name: "pika nayak",
//     salary: 156740
// },
// {
//     id : 104,
//     name : "priyu nayak",
//     salary : 498763
// }
// ]
// const f2 = users.map((values) => {
//     console.log("values are", values)
//     return{
//         id:values.id ,
//         firstname:values.firstname.split(" ")[0],
//         bonus:values.salary*.10

//     }
// })
// console.log(f2)

// const f3 = users.map(user => ({
//        id:user.id ,
//         firstname:user.firstname.split(" ")[0],
//         bonus:user.salary*.10

// }))
// console.log(f3)

//=======filter function======
// numbers = [10, 11,20, 21, 30, 31]

// const divisibleByTen = numbers.filter((value, idx , arr) => {
//     console.log("value is",value, "index is", idx ,"of array" ,arr)
 
//     return value%10==0
// })
// console.log("divisible by ten", divisibleByTen)
// divisibleByTen.forEach(element => console.log(element));

// function fun(a){
//     console.log(a)
// }
// console.log(fun)

// const users = [{id:1, name:"priyanka", isActive:true}, {id:2, name:"priyu", isActive:false}, {id:3, name:"pika", isActive:true}]
// //  = users.filter((id, name, active) => {
// //     console.log("the person having",name, "with",id,"is",active)
// //     return active==true
// // })
// // console.log("active persons are", users)
// users.filter(user => user.isActive)
// users.map(user => user.name)

// const products = [{id:1, name:"laptop", price:20000},{id:2, name:"moblie", price:60000},{id:3, name:"Tab", price:100000}]
// products.filter(product => product.price>25000).map(product => product.name)
// products.filter(product => product.price>25000)

// const filteredProducts =products.filter(product => product.price>25000)
//filteredProducts.map(product => product.name)

//==========some()=============//return true or false

// numbers =[10, 20, 30, 35,67]
// const isAnyOddPresent = numbers.some(num => num%2 == 1)//num => num%2==1
// console.log("is any odd present", isAnyOddPresent)

// const isEveryMemberAreEven = numbers.every(num => num % 2 == 0)
// console.log("is every member are even", isEveryMemberAreEven)

// const products = [{id:1, name:"laptop", price:20000},{id:2, name:"moblie", price:60000},{id:3, name:"Tab", price:100000}]
// products.some(product => product.price > 40000)
// products.every(product => product.price > 40000)

// const users = [{id:1, name:"priyanka", isActive:true}, {id:2, name:"priyu", isActive:false}, {id:3, name:"pika", isActive:true}]
// users.some(user => user.isActive)
// //true
//users.every(user => user.isActive)
//false

//=============findIndex()=========
numbers = [10, 49, 35, 54]
// const number = Numbers.find(num => num==10)
// console.log("is 10 found" , number)
// const numberIdx = Numbers.findIndex(num => num==45)
// console.log("is 45 found" , numberIdx)

//const users = [{id:1, name:"priyanka", isActive:true}, {id:2, name:"priyu", isActive:false}, {id:3, name:"pika", isActive:true}]
const sum = numbers.reduce((prevVal , currVal, idx , arr) => {
        console.log("previous value is",prevVal, "current is",currVal, "index is",idx, "of array",arr)
        //return 100//reduce()skip 1st and excute frm second value it store prev value in prevVal
        //return prevVal+currVal
})
console.log("sum is: ", sum)

const order = [{
      id:101,
    amount:6000,
    status:"Delivered"
  }, 
  { 
      id:102,
    amount:5800,
    status:"Pending"
},
{ 
        id:103,
    amount:67600,
    status:"Delivered"
    },
]
//find alredy deliverd oreder , merge the deliverd items order
const deliveredOrdered = order.filter(orders => orders.status === 'Delivered')
console.log("delivered orders are",deliveredOrdered)

const totalSale = deliveredOrdered.reduce((prev, curr) => {
    console.log("prevoius is",prev, "current is",curr)
    return prev+curr.amount
},0)
console.log("//// total sale is", totalSale)

const student = [{
      id:101,
    name:"priyanak",
    age:23
  }, 
  { 
      id:102,
    name:"piku",
    age:21
},
{ 
    id:103,
    name:"biku",
    age:23
    },
]
const sumage = student.reduce((prev, curr) => prev + curr.age, 0)
// student.reduce((prev, curr) => {
//     console.log("prev age is" ,prev,"current is",curr)
//     return prev+curr.age
// },0)
console.log("total age is",sumage)
console.log("avrage age is",sumage/student.length)
