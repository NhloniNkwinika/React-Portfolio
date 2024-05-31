import "./FooterStyles.css";
import React from 'react'
import { FaLinkedin} from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


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
                <p>bla bla bla lbla fuyhrf fyrfn ufbyubygf feuy fjuf hur fur</p>
                <div className="social">
                     <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                     <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                     <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Footer