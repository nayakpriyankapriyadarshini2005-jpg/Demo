function makeSound(key){ 
    //const key = e.key
    switch (key) {
        case "w":
          var audio = new Audio("./sounds/tom-1.mp3");
                audio.play(); 
            break;
    
        case "a" :
            var audio2 = new Audio("./sounds/tom-2.mp3");
                audio2.play();
            break;

        case "s" :
            var audio3 = new Audio("./sounds/tom-3.mp3");
                audio3.play();
            break;

        case "d" :
            var audio4 = new Audio("./sounds/tom-4.mp3");
                audio4.play();
            break;

        case "j" :
            var audio5 = new Audio("./sounds/snare.mp3");
                audio5.play();
            break;

        case "k" :
            var audio6 = new Audio("./sounds/crash.mp3");
                audio6.play();
            break;

        case "l" :
            var audio7 = new Audio("./sounds/kick-bass.mp3");
                audio7.play();
            break;
        default:
            break;
    }
}

function buttonAnimation (key){
    const activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
} 
//document.addEventListner("keydown", makeSound)
//document.addEventListener("keydown", (e) => makeSound(e.key))
document.addEventListener("keydown", (e) => {
    makeSound(e.key)
    buttonAnimation(e.key)
})
//const numberOfDrumButton = document.querySelectorAll('.drum')
const allDrumButtons = document.querySelectorAll('.drum')
allDrumButtons.forEach(drumBtn => drumBtn.addEventListener('click', (e) =>{
 const key  = drumBtn.innerText 
   makeSound(key)
    buttonAnimation(key)
}))
