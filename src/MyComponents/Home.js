import React from 'react'
// import RubberBand from 'react-reveal/RubberBand';

import {Link} from "react-router-dom";
import "../MyStyles/Home.css";

import Bounce from 'react-reveal/Bounce';

// import kunal from '../Img/MyImage.svg';

export const Home = () => {
 
    return (
        <div className="header-container-home">
            <div className="wrapper-home">

                <header>
                <Bounce>
                    <div className="left">
                        <h1>Hello,I’m <p className="blue">Hussain
                       
                        
                        </p>.</h1>
                        <p className="FirstPara">
                            I design and build user interfaces.
                        </p>
                        <p className="SecondPara">
                            I’m currently pursuing MCA,
                        </p>
                        <p className="ThirdPara"> I’m passionate about Software Development.
                        </p>
                        <Link to="/contact">contact me</Link>
                        
                    </div>
                   
                    </Bounce>
                    <div className="right">
                        <img  src="./images/myphoto.jpg" alt="profilePicture" />
                    </div>
                    
                </header>
            </div>

        </div>
    )
}
