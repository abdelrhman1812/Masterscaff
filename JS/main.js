



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






/* ================================= videos ================================== */
let madiaLayout=document.getElementById("madiaLayout")
let media=document.getElementById("media")
console.log(media)

let allVideo=["media/home.webm","media/about.webm","media/system.webm","media/projects.webm","media/download.webm","media/events.webm", ]

let modifiedVideo = allVideo.map(video => {
  return video.replace("media/", "").replace(".webm", "");
});

console.log(modifiedVideo);

function displayVideo(){
  let emptyy=""
  for(let i = 0 ;i<allVideo.length ;i++){
    emptyy +=
    `
    <div class="col-md-6 col-lg-4  wow animate__animated animate__zoomIn animate__slow ">
    <div class="event-item">
        <div class="video shadow">
            <video autoplay muted loop controls class="videos">
                <source src="${allVideo[i]}" type="video/mp4">
            </video>
    
        </div>
        <div class="event-text ">
            <div class="bg-white  shadow py-5 content">

                <h6>Polivardo Buliding </h6>
                <p>June 10, 2019 </p>
                <button class="btn bg-btn-media w-100" onclick="displaymadiaLayout(${i})">show ${modifiedVideo[i]}</button>
            </div>
        </div>
    </div>
</div>
    
    `
    
  }
  media.innerHTML=emptyy
}



displayVideo()


function displaymadiaLayout(idx){
  madiaLayout.classList.remove("d-none")
  madiaLayout.innerHTML =  `
  <div class="col-md-6  col-lg-4   ">
  <div class="video position-relative">
  <i class=" fa-solid fa-xmark position-absolute top-0 end-0 z-idx  cursor  p-2" onclick="dNonemadiaLayout()"></i>

      <video autoplay muted loop controls class="videos">
          <source src="${allVideo[idx]}" type="video/mp4">
      </video>

  </div>
</div>
`
  
}

function dNonemadiaLayout(){
  madiaLayout.classList.add("d-none")
  console.log("close")

}




/* ====================== Change Backgroung =====================  */

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






/* ================ Slider ===============  */

