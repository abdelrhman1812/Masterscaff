/* ================ Slider ===============  */


$(document).ready(function() {
    $(".skitter-large").skitter(
      {
        itemes:3
      }
    );
  });


  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      itemes:3,
      autoplay:true,
      autoplayTimeout:1000,
      margin:10,
      loop:true
    });
  });



  /* wow */



/* ===================== Projects ===============  */


let imgInfo = document.querySelector(".infoo");
let imgHtml = document.querySelector(".imgHtml");
let iClose = document.querySelector(".close");
let iLeft = document.querySelector(".left");
let iRight = document.querySelector(".right");
let allImages = Array.from(document.querySelectorAll(".img"));
console.log(allImages)
let counter = 0;
// console.log(imgInfo);
// console.log(allImages);
// console.log(iLeft);
// console.log(iRight);
// console.log(iClose);

for (let i = 0; i < allImages.length; i++) {
  //   console.log(allImages[i]);
  allImages[i].addEventListener("click", function (e) {
    imgInfo.classList.remove("d-none");
    console.log(imgInfo)

    let getSrc = e.target.getAttribute("src");
    console.log(getSrc);

    imgHtml.style.backgroundImage = `url(${getSrc})`;

    let indexOfImg = allImages.indexOf(e.target);
    counter = indexOfImg;
    // console.log(indexOfImg);
  });
}

function moveplus() {
  counter++;

  if (counter == allImages.length) {
    counter = 0;
  }

  let srcAllImage = allImages[counter].getAttribute("src");
  imgHtml.style.backgroundImage = `url(${srcAllImage})`;
  //   console.log(counter);
}

function moveNegative() {
  counter--;

  if (counter == -1) {
    counter = allImages.length - 1;
  }
  let srcAllImage = allImages[counter].getAttribute("src");
  imgHtml.style.backgroundImage = `url(${srcAllImage})`;
  //   console.log(counter);
}

iLeft.addEventListener("click", moveNegative);
iRight.addEventListener("click", moveplus);
iClose.addEventListener("click", function () {
  imgInfo.classList.add("d-none");
});


/* navbar */

// function changeColor() {
//   let navbar = document.getElementById("navbar");
//   let scroll = window.scrollY;
//   if (scroll < 150) {
//     navbar.classList.remove("bg-nav");
    
//   } else {
//     navbar.classList.add("bg-nav");
//   }
// }

// window.addEventListener("scroll", changeColor);