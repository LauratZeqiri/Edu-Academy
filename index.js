let navbar = document.querySelector(".navbar");
let body = document.querySelector("body");
let section1 = document.querySelector(".section1")
let section2 = document.querySelector(".section2")
let mbledhja = section2.offsetTop

window.addEventListener("scroll", (event) =>{
   if(window.scrollY > mbledhja){
    navbar.classList.add("fixed")
    // navbar.style.backgroundColor = "#fff"
   }else{
    navbar.classList.remove("fixed")
   }
})

let box = document.querySelector(".box");
let boxes = document.querySelectorAll(".box1");
// boxes.forEach(element => {
//     element.style.transform = "translateX(-0x)"
//     // element.classList.remove("hide")
// });

let currentBox = 2
function updateBox(){
    // let currentBox = 2
    boxes.forEach(element =>{
        element.style.transform =  `translateX(-${(currentBox - 1) * 400}px)`;
    })
    currentBox++;
    if(currentBox == 7){
        currentBox = 2;
    }
}

setInterval(() => {
    updateBox()
  
}, 4000);

let sectionbox = document.querySelectorAll(".box3");

let ndrrimiBox = 2;
function ndryshimiBoxev(){
sectionbox.forEach(e =>{
    
    e.style.transform =  `translateX(-${(ndrrimiBox - 1) * 295}px)`;
    })
    ndrrimiBox++;
    if(ndrrimiBox == 5){
        ndrrimiBox = 0;
    }

}
// setInterval(() => {
//     ndryshimiBoxev()
// }, 4000);

// ndryshimiBoxev();

let shenjat = document.querySelector(".shenjat");

let prev = document.querySelector(".prev")
prev.addEventListener("click", ()=>{
    ndryshimiBoxev();
})


let next = document.querySelector(".next")
next.addEventListener("click", ()=>{
    ndryshimiBoxev();
})
