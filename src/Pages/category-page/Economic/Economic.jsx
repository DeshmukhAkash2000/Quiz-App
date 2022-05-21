import React from 'react';
import "./Economic.css";
import {Link} from "react-router-dom"
import {useQuestion} from "../../../Context/UseContext"
import { macroEconomics, microEconomics } from '../../../DataBase/index';


function Economics() {

  const { setData} = useQuestion();
  return (
    <div className='economics-subtopic-container'>
     <Link to="/Rules">
      <div className='eco-subcontainer' onClick={ () => setData(macroEconomics)}>
          <img className='eco-img1' src="./images/eco1.jpeg" alt="" />
          <h2>Macro Economics</h2>
        </div>
     </Link>

      <Link to="/Rules">
        <div className='eco-subcontainer' onClick={ () => setData(microEconomics)}>
          <img className='eco-img1' src="./images/eco2.jpg" alt="" />
          <h2>Micro Economics</h2>
        </div>
      </Link>
    </div>
  )
}

export {Economics}
