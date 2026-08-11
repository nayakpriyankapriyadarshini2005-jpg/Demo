// // let fruits =["apple", "orange", "litchy"];

// // //for loop
// // for(let i =0; i<fruits.length; i++){ //const(error)
// //     console.log(fruits[i]);
// //     //break;
// // }

// // //for of loop
// // console.log("by using for of loop-------")
// // for(const fruit of fruits){
// //     console.log(fruit)//after this block close then it agn reallocate for another value
// // }

// //for in loop=====object based implement
// const student  ={
//     name:"priyanka",
//     age:21,
//     course:"java full stack",
//     courseFee:30000.00
// }
// // for(const key in student){
// //     console.log(key, typeof key);
// //     console.log(student[key]); 
// // }
// // console.log(student.id)


// //object.key()==================
// // console.log(Object.keys(student));
// // // console.log(Object.values(student));
// // for(const key of keys){
// //     console.log(key)
// // }
// // const obj = console.log(Object.values(student));

// // obj.forEach(function f1(values, idx, arr) {
// //     console.log("values is",values,"index is", idx, "of array",arr)    
// // })
// // obj.forEach(f1)

// const keys = Object.keys(student)
// //console.log(keys)
// for(const key of keys){
//     console.log(key)
// }
// for(const key of Object.keys(student)){
//     console.log(key);
    
// }

// const values = Object.values(student)
// values.forEach(val => console.log(val))
// Object.values(student).forEach(val => console.log(val)) 

//Object.entries() => array of arrays of key value pairs ========
const student  ={
     name:"priyanka",
     age:21,
     course:"java full stack",
     courseFee:30000.00
 }
 //console.log(Object.entries(student))
 const entries = Object.entries(student)
  for (entry of entries){
     console.log(entry)//array

  console.log("outer loop")
//      for(let i = 0;i<entry.length;i++){
//          console.log("value is",entry[i],"at index",i);
//         }
for (const entry of entries){
    const[keys, values]=entry
    console.log(keys)
}

  }
