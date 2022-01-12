import { useEffect } from "react";



export function slideLogicc(props) {
  const track = document.querySelector(".tracker");
  
    
  useEffect(() => {
    const nextButton = document.querySelector(".rightarr");

    const prevButton = document.querySelector(".leftarr");
  })
  
  
  

 

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  prevButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");

    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
  });

  nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    console.log(track.querySelector(".current-slide"));
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
  });
}
