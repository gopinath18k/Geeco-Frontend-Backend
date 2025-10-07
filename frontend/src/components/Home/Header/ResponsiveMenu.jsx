import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export const ResponsiveMenu = ({menuopen}) => {
  return (
    <div className="Navbar__MobileMenu">
            <div className="Navbar__AllMobilemenu">
                    <Link to="/" className="Nav_Mobile_Home">Home</Link>
                    <Link to="/about-us" className="Nav_Mobile_About_Us">About Us</Link>
                    <Link to="/all-pumps" className="Nav_Mobile_Pumps">All Pumps</Link>
                    <Link to="/pump-selection-tool" className="Nav_Mobile_Pump_Selection_Tool">Pump Selection Tool</Link>
                    <Link to="/warranty-registration" className="Nav_Mobile_Warranty_Registration">Warranty Registration</Link>
                </div>
        </div>
  )
}
