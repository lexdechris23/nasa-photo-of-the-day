import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

export default function NasaPhoto (){
const [title, setTitle] = useState ([]); 
const [date, setDate] = useState([]); 
const [photo, setPhoto] = useState([]);
const [explanation, setExplanation] = useState ([]);
const [credit, setCredit] = useState ([]);

      useEffect (() =>{
          axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
          .then(response => {

            console.log(response);

                setTitle(response.data.title)
                setDate(response.data.date)
                setPhoto(response.data.url)
                setExplanation(response.data.explanation)
                setCredit(response.data.copyright)
          })
          .catch(error => console.log(error))
      },[])


  return (
    <div className ="nasa-info">

          <h1>NASA Photo of the Day</h1>
          <h2> {title} </h2>
          <h3> {date}</h3>
          <img src= {photo} alt= "Daily Pic"/>
          <h4>Photo By: {credit}</h4>
          <h3>Picture Info:</h3>
          <p> {explanation} </p>

        </div>
    )



  }  