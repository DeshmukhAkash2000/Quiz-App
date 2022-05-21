import "./header.css"
import { Link } from "react-router-dom"

import React from 'react'

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
         <h1 className="quiz-title">Spark-Quiz</h1>
      </Link>
      <Link to={"/Login"}>
        <i className="fa fa-user head-icon"></i>
      </Link>
    </div>
  )
}

export {Header}
