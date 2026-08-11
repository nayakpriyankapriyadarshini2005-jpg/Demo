// // const s1 = "priya"
// // const s2 = "priyanka"
// // const s3 = "priyu"

// const stds = ["priya", "priyanka", "priyu"];
// console.log(stds);

// // console.log(stds[0]); // priya
// // console.log(stds[1]); // priyanka
// // console.log(stds[2]); // priyu

// for(let i=0; i<stds.length; i++){
//     console.log(stds[i]);
// }
// console.log(stds[4]); // undefined

// stds[10] = "priyanshi";
// console.log(stds);//middle 7 elements will be empty

//=======Array Methods=======

const fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange"); // add element at the end
fruits.push("Grapes", "Pineapple"); // add multiple elements at the end
console.log(fruits);

// fruits.pop(); // remove last element
// console.log(fruits);

// fruits.unshift("Strawberry"); // add element at the beginning
// console.log(fruits);

// fruits.shift(); // remove first element
// console.log(fruits);

// console.log(fruits.includes("Banana")); // true if exist in the array
// console.log(fruits.includes("Papaya")); // false if not exist in the array
// console.log(fruits.includes("Mango", 2)); // true if exist in the array from index 2
// console.log(fruits.includes("Mango", 3)); // false if not exist in the array from index 3
// console.log(fruits.indexOf("Mango")); // 2
// console.log(fruits.indexOf("Papaya")); // -1 if not exist in the array      
// console.log(fruits.indexOf("Mango", 3)); // -1 if not exist in the array from index 3
// console.log(fruits.indexOf("Mango", 2)); // 2 if exist in the array from index 2

// console.log(fruits[2] = "kiwi"); // change the 2 index element
// console.log(fruits);
// //method of changing the element of array is by using index number and assigning new value to it.
// console.log(fruits.length); // 4
// console.log(fruits[fruits.length - 1]); // last element of the array
// console.log(fruits[fruits.length - 2]); // second last element of the array

//step 1: check mango exist or not in the array
// if(fruits.includes("Mango")) {
//     //step 2: find the index of mango
//     const index = fruits.indexOf("Mango");
//     //step 3:then upadate the value in the array
//     fruits[index] = "kiwi"
//     console.log(fruits)
// }else {
//     //step 4:if not exit then do nothing
//     alert("Search element is not found or present")
// }

// fruits.push('mango', 'Banana')
// console.log(fruits)
// console.log("last index of mango", fruits.lastIndexOf("mango"))
// console.log(fruits.slice(0 , 3))
// console.log(fruits.slice(1, 3))
// console.log(fruits.slice(2))
// console.log(fruits.slice())//slice give new array type output

// fruits. splice(2,3)
// console.log("after splice",fruits)//modify existing array

fruits.splice(2, 3, "Cherry")
console.log("after splice2", fruits)

const num = [13, 15, 17]
const frunum = fruits.concat(num)
console.log("fruits with numbers", frunum)

const frustr = fruits.join('-')//u can take other simbol also
console.log(frustr)

fruits.reverse()
console.log("after revers", fruits)//existing array change only

//fruits.push(1, 2, 3)
fruits.push(45, 63, 23)
fruits.sort()
console.log("after sort", fruits);

//const arr = [23, 45, 13,46]
//arr.sort()
//console.log(arr)
const arr = [23, 45, 13,46]
//arr.sort((a,b)=>a-b)//ascending
arr.sort((a,b)=>b-a)//descending
console.log(arr)

const arr = [10, 20, 30, 4]
arr.sort(function xyz(a, b){
    return a-b
})
console.log(arr)

const arr = [10, 20, 30, 4]
arr.sort(function xyz(){
    if(a>b){
        return a
    }else{
        return b
    }
})
console.log(arr)

const arr = [10, 20, 30, 4]
arr.sort(function(){
    return f2
    function f2(a,b){
        return a-b
    }
    f2()
})
console.log(arr)

const arr = [23, 45, 13,46]
arr.sort(xyz)
console.log(arr)
function xyz(a, b){
    return a-b
}
