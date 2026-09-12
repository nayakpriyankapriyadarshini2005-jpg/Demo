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
// fruits.push("Orange"); // add element at the end
// fruits.push("Grapes", "Pineapple"); // add multiple elements at the end
// console.log(fruits);

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

// //method of changing the element of array is by using index number and assigning new value to it.
// console.log(fruits[2] = "kiwi"); // change the 2 index element
// console.log(fruits);

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

// console.log(fruits.slice(1 , 3)) //return new array with the index given without changing given array
// console.log(fruits.slice(1, 3))
// console.log(fruits.slice(2))
// console.log(fruits.slice())//slice give new array type output

// fruits. splice(2,3)
// console.log("after splice",fruits)//modify existing array

fruits.splice(2, 3, "Cherry")
console.log("after splice2", fruits)

const num = [13, 15, 17] 
const frunum = fruits.concat(num)//joint num arr with fruits arr
console.log("fruits with numbers", frunum)

const frustr = fruits.join('-')//u can take other symbol also
console.log(frustr)

fruits.reverse()
console.log("after revers", fruits)//existing array change only

// //fruits.push(1, 2, 3)
// fruits.push(45, 63, 23)
fruits.sort()
console.log("after sort", fruits);

const arr = [23, 45, 13,46]
arr.sort()
console.log(arr)

const arr1 = [23, 45, 13,46]
arr1.sort((a,b)=>a-b)//ascending
// arr1.sort((a,b)=>b-a)//descending
console.log(arr1)

const arr2 = [10, 20, 30, 4]
arr2.sort(function xyz(a, b){
    return a-b
})
console.log(arr2)

const arr3 = [10, 20, 30, 4]
arr3.sort(function(a = 4,b=30){
    if(a>b){
        return a
    }else{
        return b
    }
})
console.log(arr3)

const arr4 = [10, 20, 30, 4]
arr4.sort(function(){
    return f2
    function f2(a,b){
        return a-b
    }
    f2()
})
console.log(arr4)

const arr5 = [23, 45, 13,46]
arr5.sort(xyz)
console.log(arr5)
function xyz(a, b){
    return a-b
}
