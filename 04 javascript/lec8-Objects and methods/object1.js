const user= {
    name:"priyanka",
    age:21
}
//user={}//reasign not allowed for const variable but letvar can reasign.
user.name = "priya"//but we can change the value of the property of the object.//update the value of the property of the object.
console.log(user)
delete user.age;//delete operator removes the property of the object.
console.log(user)//in const keyword dlt alwayz show true boolean whether the obj key exit or not in seal() but if you
//freez it either in seal() or existing func()then it gives false
// Object.seal(user)//seal() method prevents the addition or deletion of properties from an object but allows the modification of existing properties.
// Object.freeze(user)//freeze() method prevents the addition, deletion, or modification of properties from an object.

user.address = "pune"//add new property to the object.
console.log(user)//if we seal the object then it will not allow to add new property to the object.

/**
 * Object.seal() and Object.freeze() are methods in JavaScript that can be used to control the mutability of objects.
 * Objetc.seal() prevents the addition or deletion of properties from an object, but allows the modification of existing properties. This means that you can still change the values of existing properties, but you cannot add new properties or remove existing ones.
 * Object.seal() can be updated. 
 */
let employee ={
    name:"priyanka",
    age:21
}
Object.seal(employee)
console.log(employee)

employee.name = "priya"//update the value of the property of the object.
console.log(employee)//it will update the value of the property of the object.

delete employee.name;//delete operator removes the property of the object.
console.log(employee)//it will not delete the property of the object because we have sealed the object.

employee.address = "pune"//add new property to the object.
console.log(employee)//it will not add new property to the object because we have sealed the object.

const employee ={
    name:"priyanka",
    age:21
}
Object.seal(employee)
console.log(employee)

employee.name = "priya"//update the value of the property of the object.
console.log(employee)//it will update the value of the property of the object.

delete employee.name;//delete operator removes the property of the object.
console.log(employee)//it will not delete the property of the object because we have sealed the object.

employee.address = "pune"//add new property to the object.
console.log(employee)//it will not add new property to the object because we have sealed the object.

var employee ={
    name:"priyanka",
    age:21
}
Object.seal(employee)
console.log(employee)

employee.name = "priya"//update the value of the property of the object.
console.log(employee)//it will update the value of the property of the object.

delete employee.name;//delete operator removes the property of the object.
console.log(employee)//it will not delete the property of the object because we have sealed the object.

employee.address = "pune"//add new property to the object.
console.log(employee)//it will not add new property to the object because we have sealed the object.


/**
 * Object.freeze() and Object.seal() are methods in JavaScript that can be used to control the mutability of objects.
 * Objetc.freeze() prevents the addition, deletion, or modification of properties from an object.
 * Object.freeze() can not be updated. 
 */
let student ={
    name:"priyanka",
    age:21
}
Object.freeze(student)
console.log(student)

student.name = "priya"//update the value of the property of the object.
console.log(student)//it will not update the value of the property of the object because we have frozen the object.

delete student.name;//delete operator removes the property of the object.
console.log(student)//it will not delete the property of the object because we have frozen the object.

student.address = "pune"//add new property to the object.
console.log(student)//it will not add new property to the object because we have frozen the object.


const student ={
    name:"priyanka",
    age:21
}
Object.freeze(student)
console.log(student)

student.name = "priya"//update the value of the property of the object.
console.log(student)//it will not update the value of the property of the object because we have frozen the object.

delete student.name;//delete operator removes the property of the object.
console.log(student)//it will not delete the property of the object because we have frozen the object.

student.address = "pune"//add new property to the object.
console.log(student)//it will not add new property to the object because we have frozen the object.


var student ={
    name:"priyanka",
    age:21
}
Object.freeze(student)
console.log(student)

student.name = "priya"//update the value of the property of the object.
console.log(student)//it will not update the value of the property of the object because we have frozen the object.

delete student.name;//delete operator removes the property of the object.
console.log(student)//it will not delete the property of the object because we have frozen the object.

student.address = "pune"//add new property to the object.
console.log(student)//it will not add new property to the object because we have frozen the object.