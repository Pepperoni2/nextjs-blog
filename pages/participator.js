import NavigationLeft from "../components/navigation_after";
import styles from "../styles/modules/afterlogin/main_after.module.scss";
import { getData } from '../util/fetchData'
import { DataContext } from '../store/GlobalState'
import { useContext, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import EventItem from '../components/event/EventItem'
import { useRouter } from "next/router";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";

export default function Participator(props) {
  const [events, setEvents] = useState(props.events)
  const { state } = useContext(DataContext)
  const { auth } = state

  const [current, setCurrent] = useState(0);
  const length = events.length;
  console.log(length)
  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  

  
  return (

    <div className={styles.wrapper}>
      <NavigationLeft />
      <div className={styles.container}>
      <section className={styles.slider}> 
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

      {
        events.length === 0 || Object.keys(auth).length === 0
        ? <div></div>
        : events.map((event) => (
          <EventItem key={event._id} event={event}/>
          
        ))
      
        }
        
        </section>
        </div>
    </div>
    
    
  );
}
// || Object.keys(auth).length === 0
export async function getServerSideProps() {
  const res = await getData('event')
  console.log(res)
  // server-side-rendering, console.log() will not be displayed in the browser
  return {
    props: {
      events: res.events,
      result: res.result
    }, // will be passed to the page component as props
  }
}