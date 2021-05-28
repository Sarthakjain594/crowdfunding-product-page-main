//setting menu bar in mobile view .

let menudiv = document.getElementById("menu");
let hambtn = document.getElementById("ham");

hambtn.addEventListener("click", function () {
  menudiv.style.display = "block";
  closeham.style.display = "block";
  hambtn.style.display = "none";
});

let closemenu = document.getElementById("closehamburger");

let closeham = document.getElementById("closeham");
closeham.addEventListener("click", function () {
  if (menudiv.style.display === "block") {
    menudiv.style.display = "none";
    hambtn.style.display = "block";
    closeham.style.display = "none";
  }
});

// setting up modal screen

let modal = document.getElementById("modal");
let modalbg = document.getElementById("modal-bg");
let closemodal = document.getElementById("closemodal");
let modalbtn = document.getElementsByClassName("cyanbtn");
for(i=0 ; i<modalbtn.length -1 ; i++){
  modalbtn[i].addEventListener("click", function () {
    modal.style.display = "block";
    modalbg.style.display = "block";
    if (menudiv.style.display === "block") {
      menudiv.style.display = "none";
      hambtn.style.display = "block";
      closeham.style.display = "none";
    }
  });
}



closemodal.addEventListener("click", function () {
  if (modal.style.display === "block") {
    modal.style.display = "none";
    modalbg.style.display = "none";
  }
});

let pledgesection = document.getElementsByClassName("pledgesection");

let modal1 = document.querySelector(".modal1");

let modal2 = document.querySelector(".modal2");
let pledgesection1 = document.querySelector(".pledgesection1");
modal2.addEventListener("click", function () {
  if (pledgesection1.style.display === "none") {
    pledgesection1.style.display = "block";
  }
  if ((pledgesection2.style.display = "block")) {
    pledgesection2.style.display = "none";
  }
  if ((pledgesection3.style.display = "block")) {
    pledgesection3.style.display = "none";
  }
});

let modal3 = document.querySelector(".modal3");
let pledgesection2 = document.querySelector("#pledgesection2");
modal3.addEventListener("click", function () {
  if ((pledgesection2.style.display = "none")) {
    pledgesection2.style.display = "block";
  }
  if ((pledgesection1.style.display = "block")) {
    pledgesection1.style.display = "none";
  }
  if ((pledgesection3.style.display = "block")) {
    pledgesection3.style.display = "none";
  }
});

let modal4 = document.querySelector(".modal4");
let pledgesection3 = document.querySelector("#pledgesection3");
modal4.addEventListener("click", function () {
  if ((pledgesection3.style.display = "none")) {
    pledgesection3.style.display = "block";
  }
  if ((pledgesection1.style.display = "block")) {
    pledgesection1.style.display = "none";
  }
  if ((pledgesection2.style.display = "block")) {
    pledgesection2.style.display = "none";
  }
});



let successscr = document.querySelector("#successscr");
let successcontent = document.querySelector("#modalsuccess");
let successbtn = document.getElementsByClassName("modalcyanbtn");

for(let i=0 ; i<successbtn.length ; i++){
  successbtn[i].addEventListener("click", function () {
    modalbg.style.display = "block";
    // successscr.style.display = "block";
    successcontent.style.display = "block";
  if (modal.style.display === "block") {
      modal.style.display = " none";
  }
  });
}


let gotit = document.getElementById("gotit");

gotit.addEventListener("click", function () {
  modalbg.style.display = "none";
  successcontent.style.display = "none";
});
