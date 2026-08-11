// const user =  {
//    firstname:"John",
//    lastname:'Doe',
//    age: 30,
//    isGraduated: true,
//     'address':'bbsr',
//     'course-fee':30000.00, //'course fee'also use

//     greet: function(){
//         console.log("Hello!!!!", this);//this represent particular object
//     },

    // hello: (fullname = priyanka) => {
    //     console.log("Hello " + fullname);//arrow function //this will not work here but it use in 
                                        //global scope case like var but not for other scope
    //}

//     add: function(a,b){
//     console.log("Adding is: " + (a + b));
//     }
// }
// console.log("user object",user);//extract complete object

// console.log("user firstname",user.firstname); //extract specific property or single value
// console.log("user lastname",user.lastname); //extract specific property or single value //dot notetion
// console.log("full name is",user.firstname + " " + user.lastname); //firstname, lastname
// console.log("age is", user['age']) //error if only age //bracket notation is used to access property value
// console.log("course fee is", user['course-fee'])//user.course-fee will give error because of hyphen in property name, so use bracket notation

// console.log("full name key is", user.fullname); //undefined because fullname is not a property of user object
// user.fullname = "priyanak nayak" //add / update to key object
// user.isGraduated = false //update to key object
// console.log("user object after adding fullname and updating isGraduated",user);

// user['address'] = 'cuttack' //update to key object
// console.log("user object after updating address",user);
// user['course-fee'] = 35000.00 //update to key object
// console.log("user object after updating course fee",user);
// user['gender'] = 'female' //add new property
// console.log("user object after adding gender",user);

// //Acess methods
// user.greet(); //call method using dot notation
// //user.hello(); //call method using dot notation
// user.add(5, 10); //call method using dot notation


//=========Nested Object====================
// const user =  {
//     fullname:"priyanka nayak",
//     age: 21,
//     isGraduated: true,
//     address: {
//         street: "123 Main St",
//         city: "BBSR",
//         state: "Odisha"
//     }
// };
// console.log("user object",user);
// user.address.city = "Cuttack"; //update nested object property
// console.log("user object after updating city",user);
// user.address.zipcode = "751001"; //add new property to nested object
// console.log("user object after adding zipcode",user);
//user.address = null; //delete nested object
//console.log("user object after deleting address",user);


//=======homework========

const student = {
    name: "priyanka nayak",
    age: 21,
    course: "full stack in java",
    address: {
        city: "Kendrapada",
        state: "Odisha",
        pincode: "754216" ,

    showAddress: function() {
                //=======student.address.showAddress() method call from student object========

        //console.log("Address is: " + this.city + ", " + this.state + ", " + this.pincode);
        //console.log("Address is: " + student.address.city + ", " + student.address.state + ", " + student.address.pincode);
        //console.log("Address is: " + student.address['city'] + ", " + student.address['state'] + ", " + student.address['pincode']);
        //console.log("Address is: " + student['address']['city'] + ", " + student['address']['state'] + ", " + student['address']['pincode']);
        // console.log("Address is: " + student['address'].city + ", " + student['address'].state + ", " + student['address'].pincode);
        // console.log("Address is: " + this['city'] + ", " + this['state'] + ", " + this['pincode']);
        // console.log("city is: " + this.city);
        // console.log("state is: " + this.state);
        // console.log("pincode is: " + this.pincode);

            //====how to access nested object properties using dot notation and bracket notation====

    //     console.log("Address is" ,address.city + ", " + address.state + ", " + address.pincode);
    //     console.log("Address is", address.pincode);
    //     console.log("Address is", address.state);   
    //    console.log("Address is", address.city);
    //     console.log("Address is", address['city']); 
    //     console.log("Address is", address['state']);
    //      console.log("Address is", address['pincode']);

        console.log("student object", student);

                //======student.showaddress() method call from student object========

        // console.log("Student name is", student.name);
        // console.log("Student age is", student.age);
        // console.log("Student course is", student.course);

            //=====student.address.showaddress() method call from student object========

        // console.log("Student city is", student.address.city);
        // console.log("Student state is", student.address.state);
        // console.log("Student pincode is", student.address.pincode);
    },
    },
};
//student.showAddress();
console.log("student address is",student.address.city, student.address.state, student.address.pincode);//only address object 
//student.address.showAddress();
//console.log("Student object", student);//calling only object.
 console.log("Student name is", student.name);//calling only name property
 console.log("Student age is", student.age);
 console.log("Student course is", student.course);
//  console.log("Student city is", student.address.city);
//  console.log("Student state is", student.address.state);
//  console.log("Student pincode is", student.address.pincode);



