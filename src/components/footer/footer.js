import React from "react";
import './footer.css';
import logo from '../../images/11234406421538117460.svg';
import photo from "../../images/profile-pic (2) 2.png";
import telegram from '../../images/telegram.svg';
import whatsapp from '../../images/telegram.svg';
import linkedin from '../../images/LinkedIn.svg';
import upwork from '../../images/upwork.svg';


const Footer = () => {
    return (
        <div className="footer div-row">
            <div className="first-column div-column">
                <div className="logo-area div-row">
                    <img src={logo} alt='' />
                    <p>Khinkali Search</p>
                </div>
                <div className="project-description div-column">
                    <p>This is learning prject...</p>
                    <p>Read more on GitHub:</p>
                    <a href="#">GitHab</a>
                </div>
            </div>
            <div className="second-column div-column">
                <img src={photo} alt='developer'/>
                <p>Developer: Marina Romanova</p>
                <p>Contact me:</p>
                <p>Email: </p>
                <p>Website: </p>
                <div className="icons-area div-row">
                    <img src={linkedin} alt='linkedin-logo' />
                    <img src={upwork} alt='upwork-logo' />
                    <img src={whatsapp} alt='whatsapp-logo' />
                    <img src={telegram} alt='telegram-logo' />
                </div>

            </div>
    
        </div>
    )
}

export default Footer;