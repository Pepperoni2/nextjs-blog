export const slideLogicc= async () => {
  const track = document.querySelector(".tracker");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".rightarr");
  const prevButton = document.querySelector(".leftarr");

  const slideWith1 = sliders[0].getBoundingClientRect().width;

  const setSliderPosition = (slide, index) => {
    slide.style.left = slideWith * index + "px";
  };
  slides.forEach(setSliderPosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current.slide");
    targetSlide.classList.add("current.slide");
  };
  prevButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
  });

  nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
  });

  console.log(track.children);

  
}
