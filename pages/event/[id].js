import Head from "next/head";
import { getData, putData } from "../../util/fetchData";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";
import { addToEnteredEvents } from "../../store/Actions";
import Slider from "react-slick";
// import ImageSlider from "../../components/ImageSlider";
import styles from "../../styles/modules/afterlogin/ids.module.scss";
import { motion } from "framer-motion";
import Footer from "../../components/footer";
import connectDB from "../../util/connectDB";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import NavEvents from "../../components/NavEvents";
import axios from "axios";


const DetailEvent = (props) => {

  const [event] = useState(props.event);
  const { state, dispatch } = useContext(DataContext);
  const { auth, enteredEvent } = state;
  const router = useRouter();
  

  useEffect(() => {
    if (Object.keys(auth).length === 0) router.push("/login");
    
  }, [auth]);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [current, setCurrent] = useState(0);
  const length = event.images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(event.images) || event.images.length <= 0) {
    return null;
  }

  const [jokeState, setJokeState] = useState({
    joke: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const chuckres = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(chuckres.data.value);
    setJokeState({
      ...jokeState,
      joke: chuckres.data.value,
    });
  };

  const enterEvent = async () => {
    const username = auth.user.name
    dispatch(addToEnteredEvents(event, enteredEvent))
    await putData(`event/${event._id}`, username)
    
  }

  const loggedRouter = () => {
    return (
      <div className={styles.wrapper}>
        <Head>
          <title>Detail Event</title>
        </Head>
        <div className={styles.space}></div>
        <NavEvents></NavEvents>
        <div className={styles.space}></div>

        <div className={styles.flexitup}>
          <div className={styles.wrapperimg}>
            <img
              src={event.images[0].url}
              alt={event.images[0].url}
              className={styles.img}
            />
          </div>

          <div className={styles.wrappertext}>
            <div className={styles.stickycontent}>
              <h2 className={styles.title}>{event.title}</h2>
              <div className={styles.containertext}>
                {event.openslots > 0 ? (
                  <h6 className={styles.infoOpen}>
                    Free remaining places: {event.openslots}
                  </h6>
                ) : (
                  <h6 className={styles.infofull}>Full: Event is filled</h6>
                )}
                <h6 className={styles.infocount}>
                  Number of participants: {event.closedSlots}
                </h6>
              </div>

              <div className={styles.divdesc}>
                <p>{event.description}</p>
              </div>
              <div className={styles.divcontent}>
                <p>{event.content}</p>
              </div>
              <div className={styles.divbt}>
                <button
                  className={styles.bt}
                  onClick={enterEvent}
                  disabled={event.openslots === 0 ? true : false}
                >
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.parallax}>
          <div className={styles.more}>
            <h1>Chuck Norris Joke</h1>
            <p>{jokeState.joke}</p>
          </div>
        </div>

        <div className={styles.divslider}>
          <BiLeftArrow className={styles.leftarr} onClick={prevSlide} />
          <BiRightArrow className={styles.rightarr} onClick={nextSlide} />

          <section className={styles.slider}>
            {event.images.map((img, index) => {
              return (
                <div className={index === current ? "slide active" : "slide"}>
                  {index === current && (
                    <img
                      className={styles.imagesslide}
                      key={index}
                      src={img.url}
                      alt={img.url}
                      // style={{ height: "100%", width: "100%" }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        </div>
        {/* <div className={styles.parallax}></div> */}
        <motion.div className={styles.footer}>
          <Footer></Footer>
        </motion.div>
      </div>
    );
  };

  return <>{Object.keys(auth).length === 0 ? <div></div> : loggedRouter()}</>;
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`event/${id}`);
  // console.log(res);
  // server-side-rendering, console.log() will not be displayed in the browser
  return {
    props: { event: res.event }, // will be passed to the page component as props
  };
}

export default DetailEvent;
