import React from 'react';
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
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
                    <div className="tooltip settings-trigger">
                        <span className="material-symbols-outlined hover">settings</span>
                        <span className="tooltip-text">Settings</span>
                    </div>
                    {/* <div className="settings-menu">
                        <ul>
                        <li>Settings</li>
                        <li>Enable dark theme</li>
                        <li>Send Feedback</li>
                        <li>Help</li>
                        <li>App Downloads</li>
                        <li>Keybord shortcuts</li>
                        </ul>
                    </div> */}
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined hover" style={{color: '#535555'}}>apps</span>
                    <span className="tooltip-text">Google apps</span>
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined hover profile-img"><img src="/profile-circle.jpg" alt="Account" style={{width: '30px', height: '30px'}}/></span>
                    <span className="tooltip-text google-acc">Google accounts 
                    <p>Nhluvuko Baloyi</p>
                    <p>nhluvukot9@gmail.com</p>
                    </span>
                </div>
            </div>
        </nav>
    );
}

