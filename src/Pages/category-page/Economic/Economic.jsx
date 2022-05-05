import React from 'react';
import "./Economic.css";
import {Link} from "react-router-dom"


function Economics() {
  return (
    <div className='economics-subtopic-container'>
     <Link to="/Rules">
      <div className='eco-subcontainer'>
          <img className='eco-img1' src="./images/eco1.jpeg" alt="image" />
          <h2>Macro Economics</h2>
        </div>
     </Link>

      <Link to="/Rules">
        <div className='eco-subcontainer'>
          <img className='eco-img1' src="./images/eco2.jpg" alt="image" />
          <h2>Micro Economics</h2>
        </div>
      </Link>
    </div>
  )
}

export {Economics}
