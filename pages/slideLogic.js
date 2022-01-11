import { useEffect } from "react";

export async function slideLogicc() {
  // if (
  //   document.querySelector(".rightarr").clicked ||
  //   document.querySelector(".leftarr").clicked
  // ) 
  
  useEffect(() => 
  {
    const track = document.querySelector(".tracker");
    console.log(track);
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".rightarr");
    
    const prevButton = document.querySelector(".leftarr");
    console.log(prevButton);

    const slideWith = slides[0].getBoundingClientRect().width;
    console.log(slideWith);
    const setSliderPosition = (slide, index) => {
      slide.style.left = slideWith * index + "px";
      slides.forEach(setSliderPosition);
      console.log("hier");
      const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
      };
      console.log("hier");
      const handlePrevClick = (e) => {
        prevButton.addEventListener("click", (e) => {
        1
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;

        moveToSlide(track, currentSlide, prevSlide);
      });
    }

      nextButton.addEventListener("click", (e) => {
        
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;

        moveToSlide(track, currentSlide, nextSlide);
      });

      console.log(track.children);
    };
  })
}
