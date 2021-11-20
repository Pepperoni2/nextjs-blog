import Head from "next/head";
import React from "react";
import Link from "next/link";
import NavLogin from "../../../components/header-login";
import Header1 from "/components/head";
import { GiAries } from "@react-icons/all-files/gi/GiAries";
import { GiAzulFlake } from "@react-icons/all-files/gi/GiAzulFlake";

export default function Distributor(params) {
  const style = { color: "white", fontSize: "1.5em" };
  function ToggleDrop() {
    document.getElementById("Drop").classList.toggle("show");
  }
  window.onload = function(){  
  let test = document.getElementById("Drop");

  document.getElementById("Drop").addEventListener("mouseover", function( event ) {
    alert("mouse over test!");
    console.log("hi");}
    
    , false);
  }
  
  // if(document.getElementById("togh1").style.className.hovered === true)
  // {
  //   document.getElementById("").style.transform="translateY(250%)";
  // }
  /*
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#togh1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    
  } 
  */
  return (
    <div id="wrapperdistributer">
      <Header1 />
      <h1 id="titledistributor">Choose</h1>
      <div id="box">
        {/* <Link href="/login/distributor/o-register"> */}
          <button className="boxes0">
            <a className="link0">
              <GiAries id="icon0" />
              <h1 onClick={ToggleDrop} id="togh1">
                Organizer
              </h1>
              <div className="dropdown-content" id="Drop">
                <p>
                  As an <i>Organizer</i> you have the ability to create and to
                  organize your own events or parties.
                </p>
              </div>
            </a>
          </button>
       {/* </Link> */}
        <Link href="/login/distributor/p-register">
          <button className="boxes1">
            <a className="link1">
              <GiAzulFlake id="icon1" />
              <h1>Participator</h1>
            </a>
          </button>
        </Link>
      </div>
    </div>
  );
}
