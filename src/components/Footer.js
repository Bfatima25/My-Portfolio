import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia"> 
                <LinkedInIcon />
                <TwitterIcon />
                <GitHubIcon />
            </div>
            <p> &copy; 2022 bushrafatima.com</p>
            
        </div>
    );
}

export default Footer;
