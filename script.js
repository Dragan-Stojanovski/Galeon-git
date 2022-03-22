const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }




  var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// image list
images[0] = 'https://galeon.pl/wp-content/uploads/2021/12/DJI_0461.jpg';
images[1] = 'https://galeon.pl/wp-content/uploads/2021/12/DJI_0157.jpg';
images[2] = 'https://galeon.pl/wp-content/uploads/2021/12/DJI_0144-kopia.jpg';


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;



//Menu

let menuBtn=document.querySelector(".menu");
let menuContent=document.querySelector(".wraper-vis");
console.log(menuContent)

var counter=1;
menuBtn.addEventListener("click",function(){
  if(counter===1){
  menuContent.style.visibility="visible";
  counter++;
}else if(counter===2){
  menuContent.style.visibility="hidden";
  counter--;
}
})



window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 1080px)").matches) {
   menuContent.style.visibility="visible";
  } else {
    console.log("Screen less than 1080px")
  }
})