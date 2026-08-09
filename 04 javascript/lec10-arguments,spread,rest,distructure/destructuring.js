// const numbers = [10, 20, 30, 40, 50]
// //either loop or extract one by one

// // const a = numbers[0]
// // const b = numbers[1]
// // const c = numbers[2]
// // const d = numbers[3]
// // const e = numbers[4]
// // console.log(a, b, c, d, e)

// const[a, b, c, d, e] = numbers //let
// console.log(a, b, c, d, e);

// // const[a, b, d, e] = numbers   //VALUE DESTRUCTUREING OF USING VARIABLES
// // console.log(a, b, d, e);

// // const[a, b, _, d, e] = numbers
// // console.log(a, b, _, d, e);

// // const[a, _, _, d, e] = numbers
// // console.log(a, _, _, d, e);

// // const[a, $, _, d, e] = numbers
// // console.log(a, _, _, d, e);

// numbers = [100, 200, 300]
// const [a, b, c] = numbers
// console.log(a, b, c)

// numbers = [100, 200]
// const [a, b, c, ...rest] = numbers
// console.log(a, b, c, rest)

// numbers = [100, 200]
// const [a, b, c = 300, ...rest] = numbers
// console.log(a, b, c, rest)


//=======Destructuring of Objects=========
// const user = {
//     id:101,
//     name:"priyanka",
//     age:21,
//     salary:30000,
//     address:{
//         city:'BBSR',
//         PIN:"354753"
//     }

// }
// // const {a, b} =user
// // console.log(a, b)

// // const {id, name, age} =user
// // console.log(id, name, age)

// const {id, name, age, ...rest} =user
// console.log(id, name, age,rest)

// const {id:userid, name:username, age, ...rest} =user//rename
// //console.log(id, name, age,rest)//reference error:-id is not define
// console.log(userid, username,age,rest)
// const {id, name, age = 21 //if age is not declared
//     , ...rest} =user
// console.log(id, name, age,rest)

const employee = {
    id:101,
    name:"priyanka",
    age:21,
    salary:30000,
}
function handleUpdate (target){

  const  {name, value} = target //destructure
//console.log(name, id ,typeof Object)
  employee[name] = value
  //employee[target.name] = target.value//if destructer not do

//   if(name == 'id'){
//     employee.id = value
//   }
//   elseif(name=="age"){
//     employee.age =value
//   }
// switch (name){
//   case "id":
//     employee.id = value
//}
}
//console.log(handUpdate)
handleUpdate({name:"age", value:28})
handleUpdate({name:"id", value:102})
handleUpdate({name:"salary", value:30475})
console.log(employee);
