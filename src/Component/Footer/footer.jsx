import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer-container'>
     <h2 className='footer-text'> Made by <span className='footer-subtext'>AkashDeshmukh_IFS</span></h2>  
     <div className="social-links">
                <a href="https://www.linkedin.com/in/akash-deshmukh-b30b36217/">
                    <i className="fa fa-linkedin footIcons"></i>
                </a>

                <a href="https://twitter.com/AkashIFS2025">
                    <i className="fa fa-twitter footIcons"></i>
                </a>

                <a href="https://github.com/DeshmukhAkash2000">
                    <i className="fa fa-github footIcons"></i>
                </a>

            </div>
    </div>
  )
}

export{Footer}