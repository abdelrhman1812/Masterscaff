
/* increment Number in section in home page */
let nums=document.querySelectorAll(".num")
console.log(nums)

let interval=5000;

nums.forEach((num)=>{

  let startValue=0;
  let endValue=parseInt(num.getAttribute("data-val"));
  console.log(endValue);

  let duration=Math.floor(interval / endValue);
  let counter=setInterval(()=>{

    startValue +=1;
    num.textContent=startValue;
    if(startValue ==endValue){
      clearInterval(counter)
    }
  },duration)

})

/*======================= Slider Projects id ================================== */
let number = 0;
let parentImg = document.getElementById("parent");
let sliderImages = Array.from(document.querySelectorAll(".child"));
console.log(sliderImages);

console.log(parentImg);

for (let i = 0; i < sliderImages.length; i++) {
  sliderImages[i].addEventListener("click", function (e) {
    let getSrc = e.target.getAttribute("src");
    console.log(getSrc);
    parentImg.src = getSrc;
    number = i;
    console.log(number);
  });
}

function moveplus() {
  number++;
  if (number >= sliderImages.length) {
    number = 0;
  }

  let srcAllImage = sliderImages[number].getAttribute("src");
  parentImg.src = srcAllImage;
}

function moveNegative() {
  number--;
  if (number < 0) {
    number = sliderImages.length - 1;
  }
  let srcAllImage = sliderImages[number].getAttribute("src");
  parentImg.src = srcAllImage;
}



/* ===================== Home - Projects display image when click img ===============  */


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

function movepluss() {
  counter++;

  if (counter == allImages.length) {
    counter = 0;
  }

  let srcAllImage = allImages[counter].getAttribute("src");
  imgHtml.style.backgroundImage = `url(${srcAllImage})`;
  //   console.log(counter);
}

function moveNegativee() {
  counter--;

  if (counter == -1) {
    counter = allImages.length - 1;
  }
  let srcAllImage = allImages[counter].getAttribute("src");
  imgHtml.style.backgroundImage = `url(${srcAllImage})`;
  //   console.log(counter);
}

iLeft.addEventListener("click", moveNegativee);
iRight.addEventListener("click", movepluss);
iClose.addEventListener("click", function () {
  imgInfo.classList.add("d-none");
});












/* Change Backgroung  */

function changeColor() {
  let navbar = document.getElementById("navbar");
  let scroll = window.scrollY;
  if (scroll < 150) {
    navbar.classList.remove("bg-nav");
    
  } else {
    navbar.classList.add("bg-nav");
  }
}

window.addEventListener("scroll", changeColor);






/* ========================= */


/* ================ Slider ===============  */


$(document).ready(function() {
  
  $(".skitter-large").skitter(
    {
      itemes:1
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






/* ===========  text =============== */



// let allProject = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
// /* et allProject = [{id:1, name:"image/1.jpg" ,title:"one"}, {id:2, name:"image/2.jpg" ,title:"Two"}];
// let project = document.getElementById('project');
// console.log(allProject);

// function displayProject(allProject) {
//   let empty = '';
//   for (let i = 0; i < allProject.length; i++) {
//     empty += `
//     <div class="col-6">
//         <img src="${allProject[i].name}" class="w-100" alt="">
//         <button class="btn btn-danger w-100" onclick="getById('${allProject[i]}')">Details</button>
//     </div>
//     `;
//   }
//   project.innerHTML = empty;
// }

// displayProject(allProject);

// function getById(img) {
//   let id = [img]; // Create a new array with the current image
//   console.log(img);
//   localStorage.removeItem("id"); // Remove the old value from local storage
//   localStorage.setItem('id', JSON.stringify(id)); // Set the new value
//   window.location.href = "projectid.html";
// }

// let id = JSON.parse(localStorage.getItem('id')) || [];
// console.log(id);
// console.log(id); */

// let project = document.getElementById('project');
// console.log(project);

// let allProject = [{id: 1, name: "image/1.jpg", title: "one"}, {id: 2, name: "image/2.jpg", title: "Two"}];
// console.log(allProject);

// function displayProject(allProject) {
//   let empty = '';
//   for (let i = 0; i < allProject.length; i++) {
//     empty += `
//     <div class="col-6">
//         <img src="${allProject[i].name}" class="w-100" alt="">
//         <button class="btn btn-danger w-100" onclick="getById(${allProject[i]})">Details</button>
//     </div>
//     `;
//   }
//   project.innerHTML = empty;
// }

// displayProject(allProject);

// function getById(obj) {
//   let data = obj;
//   console.log(data);
//   localStorage.removeItem("data");
//   localStorage.setItem('data', JSON.stringify(data));
//   window.location.href = "projectid.html";
// }

// let data = JSON.parse(localStorage.getItem('data')) || [];
// console.log(data);
