import NavigationLeft from "../components/navigation_after";
import { useSession } from "next-auth/client";

import { getData } from '../util/fetchData'
import { useState } from "react";
import { DataContext } from '../store/GlobalState'
import { useContext } from "react";
import EventItem from '../components/event/EventItem'
import { useRouter } from "next/router";
import styles from "../styles/modules/afterlogin/main_after.module.scss"
import PopUp from "../components/event/popup_after";




export default function Participator(props) {
  const [events, setEvents] = useState(props.events)
  const { state } = useContext(DataContext)
  const { auth } = state

  
 

  return (

    <div className={styles.wrapper}>
      
      <NavigationLeft />
      
      <div className={styles.container}>
      {
        events.length === 0 || Object.keys(auth).length === 0
        ? <h2>keine Events</h2>
        : events.map(event => (
          <EventItem key={event._id} event={event} index={index}/>
        ))
      }
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
