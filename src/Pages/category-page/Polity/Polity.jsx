import React from 'react'
import "./Polity.css"
import {Link} from "react-router-dom"
import { indianPolity,indianGovernance } from "../../../DataBase/index";
import { useQuestion } from "../../../Context/UseContext";

function Polity() {

    const {data, setData} = useQuestion();

  return (
    <div className='polity-subpoint-container'>
      <Link to="/Rules">
        <div className='pol-img-text-container' onClick={ ()=> setData(indianPolity)}>
          <img className='pol-img' src="./images/Indian-Polity1.jpg" alt="img"/>
          <h2>Indian Polity</h2>
        </div>
      </Link>
      <Link to="/Rules" >
        <div className='pol-img-text-container' onClick={ ()=> setData(indianGovernance)}>
          <img className='pol-img2' src="./images/indian-polity2.png" alt="img"/>
          <h2>Indian Governance</h2>
        </div>
      </Link>
    </div>
  )
}

export {Polity}