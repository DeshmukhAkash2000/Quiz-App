import React from 'react'
import "./home.css"
import {Link} from "react-router-dom"

function Home() {

  const scrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight)
}

  return (
    <div>
      <div className="main-home-container">
        <img className='home-img' src="/images/quiz-pic.svg" alt="quiz-pic"/>
        <div>
          <h2 className='home-text'>Let's Know <br/> Your Knowledge!!!!</h2>
          <button className='explore-btn' onClick={scrollDown}>Let's Explore !</button>
        </div>

      </div>
      <h2 className='topics-container'>Topics</h2>
      <div className="topic-container">
        <Link to="./History">
          <div className="history-container">
            <i class="fa fa-history topic-icon"></i>
            <button className="topic-text">History</button>
          </div>
        </Link>

       <Link to="./Economics">
        <div className="economics-container">
            <i class="fa fa-bar-chart topic-icon"></i>
            <button className="topic-text">Economics</button>
        </div>

       </Link>
       
       <Link to="./Polity">
        <div className="economics-container">
            <i class="fa fa-institution topic-icon"></i>
            <button className="topic-text">Polity</button>
          </div>
       </Link>
      </div>
    </div>
  )
}

export {Home}
