import "./FooterStyles.css";
import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
//import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left" >
                <div className="location">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                     hloninkwinika@gmail.com
                    </h4>
                </div>
                <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                +27-67-042-7612
                </h4>
            </div>
            </div>
           
            <div>
            <h4>About Nhlonipho</h4>
                <p> I specialize in creating visually appealing and user-friendly
                 web apps using HTML, CSS, JavaScript, and frameworks like React and Angular.
                </p>
                <div className="social">
                    <a href="https://github.com/NhloniNkwinika"target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    </a>
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    <a href="https://www.linkedin.com/in/nhlonipho-nkwinika-a30306257"target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    </a>
                    
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Footer