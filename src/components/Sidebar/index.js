import React, { useState } from 'react'
import refreshIcon from "../assests/images2/refresh.svg";
import closeIcon from "../assests/images2/close.svg";
import polygonIcon from "../assests/images2/polygon.svg";
import copyIcon from "../assests/images2/copy.svg";
import linkIcon from "../assests/images2/link.svg";
import tokenImg from "../assests/images2/token-img.svg";
import swapIcon from "../assests/images2/swap.svg"; 
import "./style.css";

export default function Sidebar()
{
    const [isOpen, setOpen] = useState(false);
    // Refresh btn
    const [isRotating, setIsRotating] = useState(false);
    const handleRefreshClick = () => {
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 500); // rotate for 5 milliseconds
      };


        return (
            <div className="sidebar-container">
                <button className="toggle-button" onClick={() => setOpen(!isOpen)}>
                Toggle
                </button>
                <nav className={`sidebar ${isOpen ? "show" : "hide"}`}>
                    <div className='sidebar-heading'>
                        <div className='header'>          
                            <div className='heading-txt'>Your Wallets</div>
                            <div className='sidebar-options'>
                                <div className='icon-wrapper' onClick={handleRefreshClick}>
                                    <img className={`refresh-icon ${isRotating ? "rotating" : ""}`} src={refreshIcon} alt="refresh-icon"/>
                                </div>
                                <div className='icon-wrapper'>
                                    <img className='close-icon' onClick={()=>setOpen(false)} src={closeIcon} alt="close-icon"/>
                                </div>
                            </div>
                        </div>
                          <div className='wallet-balance'>- $ 757.89</div>
                    </div>
                    <div className='wallet-id-div'>
                        <div className='wallet-id-desc'>
                            <img src={polygonIcon} alt="polygon-icon"/>
                            <div className='wallet-name'>BSC</div>
                        </div>
                        <div className='wallet-id-options'>
                            <div className='wallet-id'>Xciwu2....34dnd</div>
                            <div className='icon-wrapper'>
                                <img className='copy-icon' src={copyIcon} alt="copy-icon"/>
                            </div>
                            <div className='icon-wrapper'>
                                <img className='link-icon' src={linkIcon} alt="link-icon"/>
                            </div>
                        </div>
                    </div>
                    <div className='transfer-div'>
                            <div className='network-div'>
                                <img src={tokenImg} alt="token-img"/>
                                <div>
                                    <div>BUSD</div>
                                    <div>BSC</div>
                                </div>
                            </div>
                            <div>
                                <div>0.379</div>
                                <div>$0.3876</div>
                            </div>
                            <div className='swap-icon-wrapper'>
                                <img src={swapIcon} alt="swap-icon" />
                            </div>
                    </div>
                    <div className='separator'></div>
                    <div className='other-wallets-wrapper'>
                        <div className='other-wallets-text'>Other wallets</div>
                        <div className='other-wallets-list'>
                            
                        <div className='wallet-id-div'>
                        <div className='wallet-id-desc'>
                            <img src={polygonIcon} alt="polygon-icon"/>
                            <div className='wallet-name'>Polygon</div>
                        </div>
                        <div className='wallet-id-options'>
                            <div className='wallet-id'>Xciwu2....34dnd</div>
                            <div className='icon-wrapper'>
                                <img className='copy-icon' src={copyIcon} alt="copy-icon"/>
                            </div>
                            <div className='icon-wrapper'>
                                <img className='link-icon' src={linkIcon} alt="link-icon"/>
                            </div>
                        </div>
                        </div>

                        </div>
                        <div className='no-token-txt'>No tokens found</div>
                    </div>
                </nav>
            </div>
        );
};