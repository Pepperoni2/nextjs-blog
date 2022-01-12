import NavigationLeftO from "../components/navigationO_after";
import styles from "../styles/modules/afterlogin/main_after.module.scss";
import { getData } from '../util/fetchData'
import { DataContext } from '../store/GlobalState'
import { useContext, useState, useEffect } from "react";
import EventItem from '../components/event/EventItem'
import { useRouter } from "next/router";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaSlideshare } from "react-icons/fa";
import { slideLogicc } from "./slideLogic";

export default function Organizer(props) {
  const router = useRouter()
  const [events, setEvents] = useState(props.events)
  const { state } = useContext(DataContext)
  const { auth } = state
  
  useEffect(() =>{
    if(Object.keys(auth).length !== 0) {
      if(auth.user.role === 'organizer'){
        router.push("/organizer")
      }
      else if(auth.user.role === 'participator') router.push("/participator")
    }
  },[auth])

  slideLogicc();

  return (
    
    <div className={styles.wrapper}>
      <NavigationLeftO />
      <div id="test">
      {
        events.length === 0 || Object.keys(auth).length === 0
        ? <div></div>
        : events.map(event => (
          <EventItem key={event._id} event={event}/>
        ))
      }
      </div>
    </div>
  );
}
// || Object.keys(auth).length === 0
export async function getServerSideProps() {
  const res = await getData('event')
/*   console.log(res)
 */  // server-side-rendering, console.log() will not be displayed in the browser
  return {
    props: {
      events: res.events,
      result: res.result
    }, // will be passed to the page component as props
  }
}
