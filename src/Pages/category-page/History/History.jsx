import React from 'react';
import "./History.css";
import {Link} from "react-router-dom";
import {ancientHistory, medievalHistory, modernHistory} from "../../../DataBase/index";
import { useQuestion} from "../../../Context/UseContext";

function History() {

  const { setData} = useQuestion();

  return (
    <div className='history-subtopic-container'>
      <Link to="/Rules">
        <div className='history-img-text' onClick={ () => setData(ancientHistory)}>
            <img className='history-img' src="./images/ancient-history.jpg" alt="history-img" />
            <h2>Ancient History</h2>
        </div>
      </Link>

     <Link to="/Rules">
      <div className='history-img-text' onClick={ ()=> setData(medievalHistory)}>
          <img className='history-img2' src="./images/med-history.jpg" alt="" />
          <h2>Medieval History</h2>
        </div>
     </Link>

      <Link to="/Rules">
        <div className='history-img-text' onClick={ () => setData(modernHistory)}>
          <img className='history-img2' src="./images/modern-history.jpg" alt="" />
          <h2>Modern History</h2>
        </div>
      </Link>
    </div>
  )
}

export {History}