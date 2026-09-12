console.log(2** 3)
console.log(4**6)

    let x= 10
    x**=2   //x =x ** 2
  console.log(x)

console.log(5 == "5")
console.log(5 == "6")
console.log(5 == "")
console.log(0 == false)
console.log(1 ==true)

console.log(5 === "5")
console.log(0 === false)
console.log(1 ===true)

 //
 console.log(5 != "5")
console.log(3 != true)
//4 * 2^3
console.log(2 << 3)
console.log(4 << 3) //4 * 2^3 32
console.log(8 << 5)    //8* 2^5 //256

console.log(64 >> 5)  //64 //2^5 //2
console.log(256 >> 3)  //256 //2^3//32

true ? 2 :3  //false ? 5 : 7
let a =10
let b = 20
console.log((a<b) ? 1 : 2)

let student = {
   name: "Priyanka",
    age :21
};
    console.log("name" in student)

    console.log("2"+4-2)
// VM150:1 22
// undefined
console.log("2"+4)
//VM159:1 24
//undefined
console.log("6" -3)
// VM181:1 3
// undefined
console.log(true + true)
// VM230:1 2
// undefined
console.log(true + false)
// VM264:1 1
// undefined
console.log(false + false)
// VM282:1 0
// undefined
console.log(false + "1")
// VM305:1 false1
// undefined
console.log(false + 1)
// VM312:1 1
// undefined
console.log(true + "1")
// VM341:1 true1
// undefined
console.log(true + 1)
// VM348:1 2
// undefined
console.log(true + "")
// VM358:1 true
// undefined
console.log(false + "")
// VM372:1 false
// undefined
console.log(false + " ")
// VM378:1 false 
// undefined

let y = 0 / 0;
console.log(Number.isNaN(y)); //check nan 
// VM472:3 true
// undefined

console.log(NaN===NaN)
// VM534:1 false
// undefined

let n = 0 ;
console.log(NaN===n);
// VM614:3 false
// undefined

let r = 90 ;
console.log(Number.isNaN(r));
// VM660:3 false
// undefined

let f = "100";
console.log(Number(f));
// VM721:3 100
// undefined

let d = "100";
console.log(d);
// VM759:3 100
// undefined