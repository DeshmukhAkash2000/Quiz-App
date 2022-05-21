import React from 'react'
import {Link} from 'react-router-dom'
import "./rules.css"

function Rules() {
  return (
    <div className='rules-page-container'>
     <h1 className='rules-text'>Rules</h1>
     <ol className='rules-list'>
       <li>Every Topic has 5 questions !</li>
       <li>For every correct answer you will get 10 points !</li>
       <li>There is no negative marking for incorrect answer !</li>
       <li>Cheating is not acceptable at all !</li>
     </ol>
     <Link to="/que-ans">
          <button className='lets-play-btn'>Let'play </button>
     </Link>
    
    </div>
    
  )
}

export { Rules }
