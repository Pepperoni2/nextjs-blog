import React, {useEffect} from 'react';
import styles from "../styles/modules/afterlogin/imageSlider_after.module.scss";
import { getData } from '../util/fetchData'
import { DataContext } from '../store/GlobalState'
import { useContext, useState } from "react";
import EventItem from './event/EventItem';
import { useRouter } from "next/router";

export default function ImageSlider(props){
    const [events, setEvents] = useState(props.events)
    const { state } = useContext(DataContext)
    const { auth } = state
    return(
        <>
        {
        events.length === 0 || Object.keys(auth).length === 0
        ? <div></div>
        : events.map(event => (
          <EventItem key={event._id} event={event}/>
        ))
    }
        </>
    );
    
}

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

