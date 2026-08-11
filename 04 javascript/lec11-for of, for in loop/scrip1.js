const employee = {
    name:"priyanka",
    age : 21,
    salary:650873
}
console.log(Object.keys(employee))
// for(const key of keys){
//     console.log(key)
// }
//or
// for(const key of keys(employee)){
//     console.log(key)
// }
//or
const obj = Object.keys(employee)
for(const object of Object.keys(employee)){
    console.log(object)
}
//console.log(Object.entries(employee))
 const entries = Object.entries(employee)
  for (entry of entries){
     console.log(entry)//array

  console.log("outer loop")
   for(let i = 0;i<entry.length;i++){
          console.log("value is",entry[i],"at index",i);
         }
        }
for (const entry of entries){
    const[keys, values]=entry
    console.log(keys)
}




//exmple=====
const items = [
    [10,20],
    [30,40],
    [40,50]
]
