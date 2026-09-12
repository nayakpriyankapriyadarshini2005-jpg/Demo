//const personName = "priya"
// console.log(personName);

//named Export====
// export{personName1}

//Default export===
// export default personName

////=========

//named Export====
const username = "priyanka"

function sayhello(){
    console.log("hii priyanka");
    
}

const user = {
    username,
    sayhello,
    age :21,
    salary:34598.00
}

export {username}
export{sayhello, user}

//export {username}
//export{sayhello, user}

// export default username
// export default user

export default function greet(){
    console.log("hellowwwwww");
    
}