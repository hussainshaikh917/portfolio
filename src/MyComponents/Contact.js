import React from 'react'
import "../MyStyles/Contact.css";
export const Contact = () => {
    return (
        <>
        <div>
         <img className="logo1" src="./images/Linkdin.png" alt="linkdin" />
         <img className="logo2" src="./images/Insta.png" alt="insta" />
         <img className="logo3" src="./images/gmail.png" alt="gmail" />
        </div>

        <div className="header-container-contact">
            <div className="wrapper-contact">

                <div className="flexx"><img src="./images/phonevec.png" alt="phone" /><p className="personal">+91 9967370658</p></div>
                <div className="flexx"><img src="./images/linkdinvec.png" alt="linkdin" /><a href="https://www.linkedin.com/in/hussain-shaikh-0bbaa41a0/" rel="noreferrer" className="personal"  target="_blank">https://www.linkedin.com/in/hussain-shaikh-0bbaa41a0/</a></div>
                <div className="flexx"><img src="./images/gmailvector.png" alt="gmail" /><p className="personal">hussainsk9179@gmail.com</p></div>
                <div className="flexx"><img src="./images/igvector.png" alt="ig" /><a href="https://www.instagram.com/hussain/" rel="noreferrer" className="personal"  target="_blank">https://www.instagram.com/hussaim/</a></div>
                            
            </div>
        </div>
        </>


    )
}
