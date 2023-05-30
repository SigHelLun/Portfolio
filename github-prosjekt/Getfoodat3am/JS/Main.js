

//start//
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let baseend = document.getElementById("BaseEnd");
let sleepend = document.getElementById("SleepEnd0");
let storeend = document.getElementById("StoreEnd");
//basement//
let basekom1 = document.getElementById("Base1");
let basekom2 = document.getElementById("Base2");
let ratkick = document.getElementById("Base3");
let ratpunch = document.getElementById("Base4");
//sleep//
let sleep = document.getElementById("Base5");
let kill = document.getElementById("Base9");
let buy = document.getElementById("Base8");
//Store//
//start IMG//
let img1 = document.getElementById("bilde1");
let img2 = document.getElementById("bilde2");
let img3 = document.getElementById("bilde3");
//Basement IMG//
let img4 = document.getElementById("bilde4");
let img5 = document.getElementById("bilde5");
let img6 = document.getElementById("bilde6");
let img7 = document.getElementById("bilde7");
let img8 = document.getElementById("bilde8");
let img10 = document.getElementById("bilde9");
let img11 = document.getElementById("bilde11");
let img12 = document.getElementById("bilde12");
let img13 = document.getElementById("bilde13");
let img9 = document.getElementById("bilde10");
let img14 = document.getElementById("bilde14");
function turn1() {
    img1.style.display = "none"
    choice1.style.display = "none"
    choice2.style.display = "block"
    img2.style.display = "block"
    
};
function turn2() {
    img2.style.display = "none"
    img3.style.display = "block"
    choice2.style.display = "none"
    baseend.style.display = "block"
    sleepend.style.display = "block"
    storeend.style.display = "block"
};
//Store Ending//
function Store24() { 
    img3.style.display = "none"
    baseend.style.display = "none"
    sleepend.style.display = "none"
    storeend.style.display = "none"
    img12.style.display = "block"
    kill.style.display = "block"
    buy.style.display = "block"
};
function BuyP(){
    img12.style.display = "none"
    kill.style.display = "none"
    buy.style.display = "none"
    img14.style.display = "block"
};
function KillP(){
    img12.style.display = "none"
    kill.style.display = "none"
    buy.style.display = "none"
    img13.style.display = "block"
};
//Sleep ending//
function SleepEnd() { 
    img3.style.display = "none"
    img9.style.display = "block"
    baseend.style.display = "none"
    sleepend.style.display = "none"
    storeend.style.display = "none"
    sleep.style.display = "block"
};
function Sleep1(){
    img9.style.display = "none"
    sleep.style.display = "none"
    img11.style.display = "block"
};
//basement//
function BaseEnd() { 
    img3.style.display = "none"
    img4.style.display = "block"
    baseend.style.display = "none"
    sleepend.style.display = "none"
    storeend.style.display = "none"
    basekom1.style.display = "block"
    basekom2.style.display = "block"
};
function basement1() {
    img4.style.display = "none"
    img5.style.display = "block"
    basekom1.style.display = "none"
    basekom2.style.display = "none"
};
function basement2() {
    img4.style.display = "none"
    img5.style.display = "none"
    img6.style.display = "block"
    basekom1.style.display = "none"
    basekom2.style.display = "none"
    ratkick.style.display = "block"
    ratpunch.style.display = "block"

};
function RatKick(){
    img7.style.display = "block"
    img6.style.display = "none"
    ratkick.style.display = "none"
    ratpunch.style.display = "none"
};
function RatPunch(){
    img8.style.display = "block"
    img6.style.display = "none"
    ratkick.style.display = "none"
    ratpunch.style.display = "none"
};

function StoreEnd() { };
//Store Ending