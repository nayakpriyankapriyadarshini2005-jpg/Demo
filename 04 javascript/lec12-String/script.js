const str = "javascript"
console.log(typeof str)
console.log(str)

console.log(str[4])
//console.log(str.charAt[5])

console.log("size of", str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())

const trimString = "    Jt    "
console.log("trim string length is", trimString.length)

const trim1 = trimString.trim()
console.log("trim1 length", trim1.length, trim1) 

const trim2 = trimString.trimStart()
console.log("trim2 length is", trim2.length, trim2)

const trim3 = trimString.trimEnd()
console.log("trim3 length is", trim3.length, trim3)

////===========Methods of string========
const newString = "java script"
console.log("character at 5th index", newString.charAt(5)) //S
console.log("character code at 5th index", newString.charCodeAt(5))//s ascii value

const toMergeString = "is famous for rashmi sir"
const mergeString = newString.concat(toMergeString)
console.log("merge string is", mergeString)

const isJavaIncluded = newString.includes("java", 1)
console.log("is java included", isJavaIncluded)

const idxOfJava = newString.indexOf("java", 1)
console.log("index of java is", idxOfJava)

const lastidxOfJava = newString.lastIndexOf("a")
console.log("Last index of java is", lastidxOfJava)

const replaceString = newString.replace("a", "K")
console.log("Replace string  is", replaceString)

// const f1 = "java script javaprogramme"
// const f2 = f1.replace("java", "kava")
// console.log("Replace string  is", f2)
const repeatedString = newString.repeat(4)
console.log("REPEATED STRING IS",repeatedString)

const padString = newString.padStart(20, "_")
console.log("pad string is",padString)

const padStringend = newString.padEnd(20, "_")
console.log("padend string is",padStringend)

const word = newString.split("  ")
console.log("split string is",word)


const isEndsWithJava = newString.endsWith("Script")//other word give false
console.log("endwith string is",isEndsWithJava)

const isStartsWithJava = newString.startsWith("java")//other word give false
console.log("startwith string is",isStartsWithJava)


/////==========diff btwn slice substring==========part extract from string
const  c = "we are developers"
console.log(c.length)

console.log(c.slice(10))
console.log(c.substring(10))

console.log(c.slice(-9))//negative consider 
console.log(c.substring(-10))//negative not consider =>-10 = 0

console.log(c.slice(10, 13)) // last index not include both case
console.log(c.substring(10, 13))

console.log(c.slice(13, 10)) // last index not include both case
console.log(c.substring(13,10))//SWAP(10,13)

console.log(c.slice(17)) // max index must be 16 in both case
console.log(c.substring(17))//bothe became empty string


console.log(c.slice(-8, -2))//veloper
console.log(c.substring(-8, -2))//convert it into (0,0)

console.log(c.slice(2, -6))//st > en so empty
console.log(c.slice(-2, -6))
console.log(c.substring(2, -6))//(2, 0 =>negative value not consider)//then swap (0,2)//we
