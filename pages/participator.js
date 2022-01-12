import NavigationLeftP from "../components/navigationP_after";
import styles from "../styles/modules/afterlogin/main_after.module.scss";
import { getData } from "../util/fetchData";
import { DataContext } from "../store/GlobalState";
import { useContext, useState, useEffect } from "react";
import EventItem from "../components/event/EventItem";
import { useRouter } from "next/router";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaSlideshare,
} from "react-icons/fa";
import { slideLogicc } from "./slideLogic";
import { hoursToSeconds, set } from "date-fns";

export default function Participator(props) {
  const [events, setEvents] = useState(props.events);
  const { state } = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      if (auth.user.role === "participator") {
        router.push("/participator");
      } else if (auth.user.role === "organizer") router.push("/organizer");
    }
  }, [auth]);

  

  useEffect(() => {
    const track = document.querySelector(".tracker");
    const slides = Array.from(track.children);
    slides[0].classList.add("current-slide");
    console.log(slides);
    const index = slides.findIndex(find => find === track.querySelector(".current-slide"));
    const slideWith = slides[0].getBoundingClientRect().width;

    const setSliderPosition = (slide, index) => {
  
      slide.style.left = slideWith * index + "px";
    };
    slides.forEach(setSliderPosition);
  });

  useEffect(() => {
    const interval = setInterval(() => {
    
      const track = document.querySelector(".tracker");
      const slides = Array.from(track.children);
      const nextButton = document.querySelector(".rightarr");
      const prevButton = document.querySelector(".leftarr");
      

      if (track.querySelector(".current-slide").nextElementSibling === null) {
        nextButton.classList.add("is-hidden");
        nextButton.classList.remove("is-visible");
        prevButton.classList.remove("is-hidden");
        prevButton.classList.add("is-visible");
        
      }

      if (
        track.querySelector(".current-slide").previousElementSibling === null
      ) {
        prevButton.classList.add("is-hidden");
        prevButton.classList.remove("is-visible");
        nextButton.classList.remove("is-hidden");
        nextButton.classList.add("is-visible");
      }

     


    }, 500);
     return () => clearInterval(interval);
  }, []);

  const moveToSlide = async (track, currentSlide, targetSlide) => {
    const nextButton = document.querySelector(".rightarr");
    const prevButton = document.querySelector(".leftarr");
    if (targetSlide == null) {
    } else {
      prevButton.classList.remove("is-hidden");
      prevButton.classList.add("is-visible");
      nextButton.classList.remove("is-hidden");
      nextButton.classList.add("is-visible");

      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
      
    }
  };

  function nextBt() {
    const track = document.querySelector(".tracker");
    const slides = Array.from(track.children);
    const currentSlide = track.querySelector(".current-slide");
    console.log(track.querySelector(".current-slide"));
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);

    const slideWith = slides[0].getBoundingClientRect().width;

    const setSliderPosition = (slide, index) => {
  
      slide.style.left = slideWith * index + "px";
    };
    slides.forEach(setSliderPosition);
  }

  function prevBt() {
    const track = document.querySelector(".tracker");
    const slides = Array.from(track.children);
    const currentSlide = track.querySelector(".current-slide");

    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);

    const slideWith = slides[0].getBoundingClientRect().width;

    const setSliderPosition = (slide, index) => {
  
      slide.style.left = slideWith * index + "px";
    };
    slides.forEach(setSliderPosition);
  }

  return (
    <div className={styles.wrapper}>
      <NavigationLeftP />
      <div className={styles.container}>
        <section className={styles.slider}>
          <FaArrowAltCircleLeft className="leftarr" onClick={prevBt} />
          <FaArrowAltCircleRight className="rightarr" onClick={nextBt} />
          <div className="tracker">
            {events.length === 0 || Object.keys(auth).length === 0 ? (
              <div></div>
            ) : (
              events.map((event) => <EventItem key={event._id} event={event} />)
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
// || Object.keys(auth).length === 0
export async function getServerSideProps() {
  const res = await getData("event");

  // server-side-rendering, console.log() will not be displayed in the browser
  return {
    props: {
      events: res.events,
      result: res.result,
    }, // will be passed to the page component as props
  };
}
