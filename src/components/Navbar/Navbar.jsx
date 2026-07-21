import React, { useState } from 'react';
import "./Navbar.css";

export default function Navbar({ isDarkMode, toggleDarkMode }) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleSettingsMenu = () => {
        setIsSettingsOpen((prevState) => !prevState);
    };

    return (
        <nav className={isDarkMode ? "dark" : ""}>
            <div className="logo-area">
                <div className="tooltip">
                    <span className="material-symbols-outlined hover" style={{color: '#535555'}}>menu</span>
                    <span className="tooltip-text">Main Menu</span>
			    </div>
                <img className="logo" src="/logo.png" alt="Google Keep Logo" style={{width: '40px', height: '40px'}}/>
                <div className="logo-text">Keep</div>
            </div>
            <div className="search-area">
                <div className="tooltip">
                    <span className="material-symbols-outlined hover">search</span>
                    <span className="tooltip-text">Search</span>
                </div>
                <input type="text" placeholder="Search"/>                
            </div>

		    <div className="settings">
			    <div className="tooltip">
                    <span className="material-symbols-outlined hover">refresh</span>
                    <span className="tooltip-text">Refresh</span>
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined hover">view_agenda</span>
                    <span className="tooltip-text">List view</span>
                </div>

                <div className="settings-tooltip">
                    <div className="tooltip settings-trigger" onClick={toggleSettingsMenu}>
                        <span className="material-symbols-outlined hover">settings</span>
                        <span className="tooltip-text">Settings</span>
                    </div>
                    {isSettingsOpen && (
                        <div className="settings-menu">
                            <ul>
                                <li className="settings-title">Settings</li>
                                <li>
                                    <button type="button" className="settings-option" onClick={toggleDarkMode}>
                                        {isDarkMode ? "Disable dark theme" : "Enable dark theme"}
                                    </button>
                                </li>
                                <li><button type="button" className="settings-option">Send Feedback</button></li>
                                <li><button type="button" className="settings-option">Help</button></li>
                                <li><button type="button" className="settings-option">App Downloads</button></li>
                                <li><button type="button" className="settings-option">Keyboard shortcuts</button></li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined hover" style={{color: '#535555'}}>apps</span>
                    <span className="tooltip-text">Google apps</span>
                </div>
                <div className="tooltip account">
                    <span className="material-symbols-outlined hover profile-img"><img src="/profile-circle.jpg" alt="Account" style={{width: '30px', height: '30px', borderRadius: '50%'}}/></span>
                    <span className="tooltip-text google-acc">Google accounts 
                    <p>Nhluvuko Baloyi</p>
                    <p>nhluvukot9@gmail.com</p>
                    </span>
                </div>
            </div>
        </nav>
    );
}

