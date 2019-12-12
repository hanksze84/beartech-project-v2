import React from 'react'; 
import './App.css'; 
import {Link} from 'react-router-dom'; 

const Nav = () => {
    
    const navStyle = {
        color: "white"
    };

    const imgStyle = { 
        width: '10%',
        height: '10%'
    }; 

    return(
        <nav className="nav">
            <Link style= {imgStyle} to="/"> 
                <img src="https://i.ibb.co/pRPSvdf/Bear-Tech-Logo.png" alt="Bear-Tech-Logo" border="0"></img>
            </Link>
            <ul className = 'nav-links'> 
                <Link style={navStyle} to="/projects">
                    <li>Projects</li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav; 