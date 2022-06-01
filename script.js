//Variables
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");

//Canvas size
cnv.width = 700;
cnv.height = 700;

//WASD box
let keyboxX = 50;
let keyboxY = 50;
let keyboardUp = false;
let keyboardDown = false;
let keyboardRight = false;
let keyboardLeft = false;

//Arrow box
let arrowX = 600;
let arrowY = 600;
let arrowkUp = false;
let arrowkDown = false;
let arrowkRight = false;
let arrowkLeft = false;

//Animation
requestAnimationFrame(draw);
function draw () {

    //Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    //Keyboard up
    if(keyboardUp) {
        keyboxY += -7;
    }

    //Keyboard down
    if(keyboardDown) {
        keyboxY += 7;
    }

    //Keyboard right
    if(keyboardRight) {
        keyboxX += 7;
    }

    //Keyboard left
    if(keyboardLeft) {
        keyboxX += -7;
    }

    //Arrow up
    if(arrowkUp) {
        arrowY += -7;
    }

    //Arrow down
    if(arrowkDown) {
        arrowY += 7;
    }

    //Arrow right
    if(arrowkRight) {
        arrowX += 7;
    }

    //Arrow left
    if(arrowkLeft) {
        arrowX += -7;
    }

    //WASD box
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.strokeRect(keyboxX, keyboxY, 50, 50);

    //Arrow box
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 3;
    ctx.strokeRect(arrowX, arrowY, 50, 50);
    requestAnimationFrame(draw);
}

ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.strokeRect(keyboxX, keyboxY, 50, 50);

//Event listener for keyboard box
document.addEventListener("keydown", keyboard);

//Event listener for arrow box
document.addEventListener("keydown", arrowKey);

//Event listener for staying still
document.addEventListener("keyup", still);

//Keyboard
function keyboard (event) {
    if(event.code === "KeyW") {
        keyboardUp = true;
    } else if (event.code === "KeyS"){
        keyboardDown = true;
    } else if(event.code === "KeyD") {
        keyboardRight = true;
    } else if(event.code === "KeyA") {
        keyboardLeft = true;
    }

    if(keyboxY <= 5) {
        keyboardUp = false;
    } else if(keyboxY >= 646) {
        keyboardDown = false;
    } else if(keyboxX >= 646) {
        keyboardRight = false;
    } else if(keyboxX <= 6) {
        keyboardLeft = false;
    }
}

//Arrow
function arrowKey (event) {
    if(event.code === "ArrowUp") {
        arrowkUp = true;
    } else if(event.code === "ArrowDown") {
        arrowkDown = true;
    } else if(event.code === "ArrowRight") {
        arrowkRight = true;
    } else if(event.code === "ArrowLeft") {
        arrowkLeft = true;
    }

    if(arrowY <= -55) {
        arrowY = 700;
    } else if(arrowY >= 700) {
        arrowY = 0;
    } else if(arrowX >= 700) {
        arrowX = 0;
    } else if(arrowX <= -55) {
        arrowX = 700;
    }
}

//Staying still
function still () {
    //Keyboard box
    keyboardUp = false;
    keyboardDown = false;
    keyboardRight = false;
    keyboardLeft = false;

    //Arrow box
    arrowkUp = false;
    arrowkDown = false;
    arrowkRight = false;
    arrowkLeft = false;
}