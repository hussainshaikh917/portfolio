import React from 'react'
import {Link} from "react-router-dom";
import "../MyStyles/Navbar.css";
export const Navbar = (props) => {
    return (
        <div className="nav-container">
           {/* <div className="wrapper"> */}
               <nav>
                   <ul className="nav-items">
                       <li><Link to="/">HOME</Link></li>
                       <li><Link to="/about">ABOUT ME</Link></li>
                       {/* <li><Link to="/projects">PROJECTS</Link></li> */}
                       <li><Link  to="/contact">CONTACT</Link></li>
                   </ul>
               </nav>
           {/* </div> */}
        </div>
    )
}
