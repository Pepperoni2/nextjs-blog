import NavigationLeft from "../components/navigation-afterlogin";
import { useSession } from "next-auth/client";
import styles from "../styles/modules/afterloginpage.module.scss";
import { getData } from '../util/fetchData'
import { useState } from "react";
import { DataContext } from '../store/GlobalState'
import { useContext } from "react";
import EventItem from '../components/event/EventItem'
import { useRouter } from "next/router";

export default function Participator(props) {
  const [events, setEvents] = useState(props.events)
  const { state } = useContext(DataContext)
  return (

    <div className={styles.wrapper}>
      <NavigationLeft />
      <div id="test">
      {
        events.length === 0 
        ? <h2>keine Events</h2>
        : events.map(event => (
          <EventItem key={event._id} event={event} />
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
