$(document).ready(function() {
    $(".alert").alert();

    $("[data-toggle='tooltipe']").tooltip();
});

//Icon Cloe Btn

const iconClosefirst = document.getElementById("icon-close-1");
const iconCloseSecend = document.getElementById("icon-close-2");
const iconCloseThrid = document.getElementById("icon-close-3");
const iconCloseFour = document.getElementById("icon-close-4");
const iconCloseFive = document.getElementById("icon-close-5");

//Icon Open Btn
const iconOpendfirst = document.getElementById("icon-close-1");
const iconOpenSecend = document.getElementById("icon-close-2");
const iconopenThrid = document.getElementById("icon-close-3");
const iconOpenFour = document.getElementById("icon-close-4");
const iconOpenFive = document.getElementById("icon-close-5");

iconClosefirst.classList.add("display");
iconOpenSecend.classList.add("display");
iconopenThrid.classList.add("display");
iconCloseFour.classList.add("display");
iconCloseFive.classList.add("display");

const buttonFirst = document.getElementById("btn-1");
const buttonSecend = document.getElementById("btn-2");
const buttonThrid = document.getElementById("btn-3");
const buttonFOUR = document.getElementById("btn-4");
const buttonFive = document.getElementById("btn-5");

//function for buttons

buttonFirst.addEventListener("click", function() {
    buttonFirst.children[0].classList.toggle("display");
    buttonFirst.children[1].classList.toggle("display");

    let checkOpen = document.querySelectorAll(".btn");

    //open element

    for (let i = 0; i < checkOpen.length; i++) {
        if (i === 0) {} else {
            if (!checkOpen[i].children[1].classList.contains("display")) {
                //console.log(checkOpen[i].children[0]);
                checkOpen[i].children[0].classList.toggle("display");
                checkOpen[i].children[1].classList.toggle("display");
            }
        }
    }

    console.log(checkOpen);
});

buttonSecend.addEventListener("click", function() {
    buttonSecend.children[0].classList.toggle("display");
    buttonSecend.children[1].classList.toggle("display");

    let checkOpen = document.querySelectorAll(".btn");

    for (let i = 0; i < checkOpen.length; i++) {
        if (i === 1) {} else {
            if (!checkOpen[i].children[1].classList.contains("display")) {
                checkOpen[i].children[0].classList.toggle("display");
                checkOpen[i].children[1].classList.toggle("display");
            }
        }
    }
});

buttonThrid.addEventListener("click", function() {
    buttonThrid.children[0].classList.toggle("display");
    buttonThrid.children[1].classList.toggle("display");

    let checkOpen = document.querySelectorAll(".btn");

    for (let i = 0; i < checkOpen.length; i++) {
        if (i === 2) {} else {
            if (!checkOpen[i].children[1].classList.contains("display")) {
                //console.log(checkOpen[i].children[0]);
                checkOpen[i].children[0].classList.toggle("display");
                checkOpen[i].children[1].classList.toggle("display");
            }
        }
    }
});
buttonFOUR.addEventListener("click", function() {
    buttonFOUR.children[0].classList.toggle("display");
    buttonFOUR.children[1].classList.toggle("display");

    let checkOpen = document.querySelectorAll(".btn");

    for (let i = 0; i < checkOpen.length; i++) {
        if (i === 3) {} else {
            if (!checkOpen[i].children[1].classList.contains("display")) {
                //console.log(checkOpen[i].children[0]);
                checkOpen[i].children[0].classList.toggle("display");
                checkOpen[i].children[1].classList.toggle("display");
            }
        }
    }
});

buttonFive.addEventListener("click", function() {
    buttonFive.children[0].classList.toggle("display");
    buttonFive.children[1].classList.toggle("display");

    let checkOpen = document.querySelectorAll(".btn");

    for (let i = 0; i < checkOpen.length; i++) {
        if (i === 4) {} else {
            if (!checkOpen[i].children[1].classList.contains("display")) {
                //console.log(checkOpen[i].children[0]);
                checkOpen[i].children[0].classList.toggle("display");
                checkOpen[i].children[1].classList.toggle("display");
            }
        }
    }
});