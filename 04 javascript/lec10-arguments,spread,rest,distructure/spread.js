



// const employee = [
//     {name:  "priyanka", age: 21},
//     {name: "priya", age: 23},
//     {name: "priyu", age: 6},
// ]
// console.log(employee);
// console.log(...employee);

// const myName = "Priyanka Nayak"
// console.log(...myName);


//==========COPY ARRAY========

//const arr1 = [100, 200, 300]
//const arr2 = arr1
//arr2.push(400)
//console.log(arr1);

//const arr2 = []
//for(let i = 0; i<arr1.length; i++){
  //arr2[i] = arr1[i]
//}//original copy but not change.
//console.log(arr2)

// const arr2 = [...arr1]
// arr2.push(500)
// console.log(arr1);
// console.log(arr2);


//=========Merge array=======

//  const arr1 = [10, 20, 30]
//  const arr2 = [100, 200, 300]

//  const arr3 =[...arr1, ...arr2]
// console.log(arr3);

// const name ="priyanka"
// const arr4 =[...arr1, ...arr2, ...name] //or
// //const arr4 = [...arr3, ...name]
// console.log(arr4);


//=======COPY OBJECT=======

//const user ={
  //  Id: 101,
    //name: "priya",
    //age: 21
//}

 //const copyUser = {...user, phone:"2635846456"}
 //console.log(copyUser);

//const copyUser1= {}
//Object.assign(copyUser1, user)//target, source
//console.log(copyUser1);

const employee  ={
    id: 101,
    name:"priyanka",
    age:21,
    address:{
        city: "puri",
        pin: '3546875322'
    }
}
//console.log(employee);

// const copyEmployee = {...employee}
// console.log(copyEmployee);

const copyEmployee = {...employee, address:{...employee.address}}
copyEmployee.address.city = 'CTC'
//console.log(copyEmployee);
console.log(employee);

const copyEmployee = JSON.parse(JSON.stringify(employee))
copyEmployee.address.city = 'CTC'
//console.log(copyEmployee);
console.log(employee);

const copyEmployee = structuredClone(employee)
copyEmployee.address.city = 'CTC'
//console.log(copyEmployee);
console.log(employee);
