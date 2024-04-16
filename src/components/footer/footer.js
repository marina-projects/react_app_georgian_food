import React from "react";
import './footer.css';
import logo from '../../images/11234406421538117460.svg';
import photo from "../../images/profile-pic (2) 2.png";
import telegram from '../../images/telegram.svg';
import whatsapp from '../../images/whatsapp.svg';
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
                    <p>This is a basic react app that uses Yelp API to allow users to search Georgian eatery in USA cities. This project is part of a off-line challenge from a Codecademy's Frontend developer path.</p>
                    <p className="read-more">Read more on GitHub:</p>
                    <a href="https://github.com/marina-projects/react_app_georgian_food" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
            <div className="second-column div-column">
                <img src={photo} alt='developer'/>
                <p className="developer-name">Developer Marina Romanova</p>
                <p>Contact me:</p>
                <a href="mailto: info@marina-romanova.com" target="_blank" rel="noreferrer">info@marina-romanova.com </a>
                <a href="https://www.marina-romanova.com" target="_blank" rel="noreferrer">www.marina-romanova.com </a>
                <div className="icons-area div-row">
                    <a href="https://www.linkedin.com/in/yellowmarine/" target="_blank" rel="noreferrer"><img src={linkedin} alt='linkedin-logo' /></a>
                    <a href="https://www.upwork.com/freelancers/marinar18" target="_blank" rel="noreferrer"><img src={upwork} alt='upwork-logo' /></a>
                    <a href="https://wa.me/89119996038" target="_blank" rel="noreferrer"><img src={whatsapp} alt='whatsapp-logo' /></a>
                    <a href="https://t.me/yellowmarine" target="_blank" rel="noreferrer"><img src={telegram} alt='telegram-logo' /></a>
                </div>

            </div>
    
        </div>
    )
}

export default Footer;