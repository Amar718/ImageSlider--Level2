//slide.length = 3
//index: 0,1,2
//index the slide index

//Initialize the slide index
let currentSlideIndex = 0;

//creating the show and hide logic 
function showSlide(index){
const slides = document.getElementsByClassName("carousel-slide");
const dots = document.getElementsByClassName("dot");

//condition check if the index is grester than or equal to the number of slides.
//if it is true then it will reset the currentSlideIndex to 0(first image). This will loop back 
//to the begining if the user clicks next on the last slide.
if(index >= slides.length){
    currentSlideIndex = 0;
}else if(index < 0){
    currentSlideIndex = slides.length - 1;
}

//Hide all slides
for(let i=0; i < slides.length; i++){
slides[i].style.display = "none";
}

//Remove active class from all dots
for(let i=0; i< dots.length;i++){
    dots[i].className = dost[i].className.replace("dot-active", "")
}

//Display the current slide and set the corressponding dot as active
slides[currentSlideIndex.slideIndex].style.display = "block";
dots[currentSlideIndex].className += " dot-activ";

//Assigning the currentb image src to img tag in popup
const popupImage = getElementById("popup-image");
popupImage.src = slides[currentSlideIndex].src; 
}

//class="dotdot-active"

//function to change the slide
function changeSlide(n){
    showSlide((currentSlideIndex += n));
}


//function to jump to a specific slide
function currentSlide(n){
    showSlide((currentSlideIndex = n));
}

//Initial display Setup
showSlide(currentSlideIndex);

//Level 2 code for open and close the popup
function openPopup(){
    const modal = document.getElementById("imagePopup");
    modal.style.display = "flex";
}

function closePopup(){
    const modal = document.getElementById("ImagePopup")
    modal.style.display = "none"
}