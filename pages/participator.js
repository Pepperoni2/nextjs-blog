import NavigationLeft from "../components/navigation_after";
import styles from "../styles/modules/afterlogin/main_after.module.scss";
import { getData } from '../util/fetchData'
import { DataContext } from '../store/GlobalState'
import { useContext, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import EventItem from '../components/event/EventItem'
import { useRouter } from "next/router";

export default function Participator(props) {

  
  return (

    <div className={styles.wrapper}>
      <NavigationLeft />
      <div id="test">
      {/* <ImageSlider  ></ImageSlider> */}
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