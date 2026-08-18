// const image = document.getElementsByTagName("img")
// console.log(image)
// console.log(image[0])

// console.dir(image[0])
// console.dir(image[0].src)
// image[0].src = 'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=landscape-nature-sky-236047.jpg&fm=jpg'

// const images = document.getElementsByTagName("img")
// console.log(images)
// console.log(images[1])

// console.dir(images[1])
// console.dir(images[1].src)
// images[1].src = 'https://tse1.mm.bing.net/th/id/OIP.L0bNOEA4tOyR4Ez2lF5xbAHaE4?r=0&pid=Api&P=0&h=180'

// const img = document.getElementsByTagName("img")
// console.log(img)
// console.log(img[2])

// console.dir(img[2])
// console.dir(img[2].src)
// images[2].src = 'https://tse1.mm.bing.net/th/id/OIP.L0bNOEA4tOyR4Ez2lF5xbAHaE4?r=0&pid=Api&P=0&h=180'

// images[0].src = "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=landscape-nature-sky-236047.jpg&fm=jpg"
// images[1].src = "https://tse1.mm.bing.net/th/id/OIP.L0bNOEA4tOyR4Ez2lF5xbAHaE4?r=0&pid=Api&P=0&h=180"
// images[2].src = "https://tse1.mm.bing.net/th/id/OIP.L0bNOEA4tOyR4Ez2lF5xbAHaE4?r=0&pid=Api&P=0&h=180'
// "
// const urls = [
//     "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=landscape-nature-sky-236047.jpg&fm=jpg", "https://tse1.mm.bing.net/th/id/OIP.L0bNOEA4tOyR4Ez2lF5xbAHaE4?r=0&pid=Api&P=0&h=180",
//     "https://tse1.mm.bing.net/th/id/OIP.L0bNOEA4tOyR4Ez2lF5xbAHaE4?r=0&pid=Api&P=0&h=180" 
// ]
// // for(let i = 0; i<image.length;i++){
// //     image[i].src = urls[i]
// // }
// urls.forEach((url, idx) => image[idx].src = url)
// // urls.forEach((urls) =>)
// //     console.log(urls)

// const imagesByClassName = document.getElementsByClassName('css-images')
// console.log(imagesByClassName);

// const firstImageId = document.getElementById('first-images')
// console.log(firstImageId);
// console.dir(firstImageId);

// const select = document.querySelector("#first-images")//if Id PRESENTS
// console.log(select)
// const select1 = document.querySelectorAll(".css-images") //CLASS :.CSS-IMAGES /image/ img tags
// console.log("image", select1);
// console.log("second image", select1[1])

//===========Selector======

// console.log(document.querySelectorAll("h2"));
// console.log(document.querySelectorAll("[username"));
// console.log(document.querySelector("[username]"));//sectorall
// console.log(document.querySelectorAll("[username = priyanka]"));
 
// const h2 = document.querySelector("[username]")
// console.log(h2.getAttribute('username'));
// const h1= document.querySelector("[username = priyanka]")
// console.log(h1.getAttribute('username'));

// console.log(document.querySelector("body > p:nth-child(8)"));
// console.log(document.querySelector("body > p:nth-child(8)")).getAttribute('style');

// console.log(document.querySelector("body > p:nth-child(8)")).getAttribute('style1');//error
// console.log(document.querySelector("body > p:nth-child(8)")).setAttribute('title', "footer");


//document.querySelector("#first-image").setAttribute("#first-image", "https://tse1.mm.bing.net/th/id/OIP.L0bNOEA4tOyR4Ez2lF5xbAHaE4?r=0&pid=Api&P=0&h=180")
//undefined

// document.querySelector("body > h2:nth-child(3)").setAttribute("class", "red")
// document.querySelector("body > h2:nth-child(3)").setAttribute("class", "bgGreenYellow")


// document.querySelector("body > h2:nth-child(3)").setAttribute("class", "bgGreenYellow")
// //undefined

// //=========classList property=====

// document.querySelector("body > h2:nth-child(3)").classList
// //DOMTokenList ['bgGreenYellow', value: 'bgGreenYellow']
// document.querySelector("body > h2:nth-child(3)").classList.add("red")
// //undefined
// document.querySelector("body > h2:nth-child(3)").classList.add("pink")
// //undefined
// document.querySelector("body > h2:nth-child(3)").classList.add("green")
// //undefined
// document.querySelector("body > h2:nth-child(3)").classList
// //DOMTokenList(4) ['bgGreenYellow', 'red', 'pink', 'green', value: 'bgGreenYellow red pink green']
// document.querySelector("body > h2:nth-child(3)").classList.remove("pink")
// //undefined
// document.querySelector("body > h2:nth-child(3)").classList.remove("green")
// //undefined
// document.querySelector("body > h2:nth-child(3)").classList
// //DOMTokenList(2) ['bgGreenYellow', 'red', value: 'bgGreenYellow red']
// document.querySelector("body > h2:nth-child(3)").classList.remove("red")
// //undefined
// document.querySelector("body > h2:nth-child(3)").classList
// //DOMTokenList ['bgGreenYellow', value: 'bgGreenYellow']

// document.querySelector("body > h2:nth-child(3)").classList.toggle("red")
// //true
// document.querySelector("body > h2:nth-child(3)").classList.toggle("red")
// //false

// document.querySelector("body > h2:nth-child(3)").removeAttribute("class")

//accesing parent and sibling elements:

document.querySelector("body > p:nth-child(5) > a:nth-child(2)")
//<a href=​"https:​/​/​en.wikipedia.org/​wiki/​Graphical_user_interface">​graphical user interface​</a>​
document.querySelector("body > p:nth-child(5) > a:nth-child(2)").parentElement
//<p>​…​</p>​
document.querySelector("body > p:nth-child(5) > a:nth-child(2)").parentElement.parentElement
//<body style=​"font-family:​ sans-serif;​">​…​</body>​
document.querySelector("body > p:nth-child(5) > a:nth-child(2)").parentElement.parentElement.parentElement
//<html lang=​"en">​view-sourcescroll<head>​…​</head>​<body style=​"font-family:​ sans-serif;​">​…​</body>​</html>​
document.querySelector("body > p:nth-child(5) > a:nth-child(2)").parentElement.parentElement.parentElement.parentElement
//null

const firstLink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)")
console.log(firstLink);

firstLink.nextElementSibling
//<a href=​"https:​/​/​en.wikipedia.org/​wiki/​HTML
//">​HTML​</a>​
firstLink.nextElementSibling.nextElementSibling
//null
//firstLink.nextSibling //node //text
//use const keyword before declared these functions
firstLink.nextSibling
//" for websites and web applications through the use of"
firstLink.nextSibling
//" for websites and web applications through the use of"
document.querySelector("body > h1")
//<h1>​Frontend Development​</h1>​
document.querySelector("body > h1").nextElementSibling
//<hr>​
document.querySelector("body > h1").nextSibling
//#text
document.querySelector("body > h1").innerText
//'Frontend Development'
document.querySelector("body > h1").textContent
//'Frontend Development'
firstLink.nextElementSibling
//<a href=​"https:​/​/​en.wikipedia.org/​wiki/​HTML
//">​HTML​</a>​
firstLink.previousElementSibling
//<b>​Introduction to Frontend Development​</b>​
firstLink.previousSibling
//"it is the development of the "

