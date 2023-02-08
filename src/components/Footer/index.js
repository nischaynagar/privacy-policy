import React from "react";
import "./style.css";
import Logo from "../assests/images/logo.svg"
import igIcon from "../assests/images/icon-ig.svg"
import linkedInIcon from "../assests/images/icon-linkedIn.svg"
import telegramIcon from "../assests/images/icon-telegram.svg"
import twitterIcon from "../assests/images/icon-twitter.svg"
import emailIcon from "../assests/images/icon-email.svg"
import sendIcon from "../assests/images/icon-send.svg"

export default function Footer()
{
    return (
        <div className="main-footer">
            <div className="footer-logo-div">
                <div>
                    <div className="title">
                        <img src={Logo} alt =""/>
                        <p>MATRIX LABS</p>
                    </div>
                    <div className="title-desc">One stop for all Blockchain solutions</div>
                </div>
                <div className="socials1">
                    <div>Reach out to us:</div>
                    <div className="social-icon-div">
                        <a href="https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ=">
                            <img src={igIcon} className="social-icons" alt="ig-icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/thematrixlabs/">
                            <img src={linkedInIcon}className="social-icons" alt="linkedIn-icon"/>
                        </a>
                        <a href="https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09">
                            <img src={twitterIcon} className="social-icons" alt="twitter-icon"/>
                        </a>
                        <a href="https://t.me/brickMatrix">
                            <img src={telegramIcon} className="social-icons" alt="telegram-icon"/>
                        </a>
                        <a href="mailto:contact@thematrixlabs.com">
                            <img src={emailIcon} className="social-icons" alt="email-icon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="webpage-links-wrapper">
            <div className="webpage-links">
                <div className="highlighted">Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Projects</div>
            </div>
            <div className="webpage-links">
                <div>Contact us</div>
                <div>FAQs</div>
            </div>
            </div>
            <div className="signup-wrapper">
                <div className="signup-txt">Sign up for updates</div>
                <div  className="signup-input">
                    <input placeholder="email@address.com" />
                    <button>
                        <img src={sendIcon} className="send-icon" alt="send-icon" />
                    </button>
                </div>
            </div>
            <div className="socials2">
                    <div>Reach out to us:</div>
                    <div className="social-icon-div">
                        <a href="https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ=">
                            <img src={igIcon} className="social-icons" alt="ig-icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/thematrixlabs/">
                            <img src={linkedInIcon}className="social-icons" alt="linkedIn-icon"/>
                        </a>
                        <a href="https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09">
                            <img src={twitterIcon} className="social-icons" alt="twitter-icon"/>
                        </a>
                        <a href="https://t.me/brickMatrix">
                            <img src={telegramIcon} className="social-icons" alt="telegram-icon"/>
                        </a>
                        <a href="mailto:contact@thematrixlabs.com">
                            <img src={emailIcon} className="social-icons" alt="email-icon"/>
                        </a>
                    </div>
            </div>
        </div>
    );
};