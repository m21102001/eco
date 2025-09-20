import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
    return (
        <>
            <footer className="custom-footer"
                style={{
                    backgroundColor: ' #0c0d11',
                    color: ' #ccc',
                    padding: '40px 20px',
                    fontSize: '1rem',
                    position: 'relative'
                }}>
                <div className="container d-flex justify-content-between align-items-center flex-wrap">
                    <p className="footer-text m-0">Theme by <strong style={{color:'#eee'}} >Colorlib</strong> Powered by <strong>WordPress</strong></p>
                    <div className="footer-icons">
                        <a href="#" style={{  color: '#ccc',
  fontSize: '1.2rem',
  marginLeft: '15px',
  transition: 'color 0.3s'}}><FaFacebook /></a>
                        <a href="#"style={{  color: '#ccc',
  fontSize: '1.2rem',
  marginLeft: '15px',
  transition: 'color 0.3s'}}><FaXTwitter /></a>
                        <a href="https://www.instagram.com/laaylaa.s?igsh=NHN1OWttem55dDFt&utm_source=qr" style={{  color: '#ccc',
  fontSize: '1.2rem',
  marginLeft: '15px',
  transition: 'color 0.3s'}}><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/layla-samir-17b520366?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEElfFMK%2FSeiyZav%2Bm457HA%3D%3D"
                        style={{  color: '#ccc',
  fontSize: '1.2rem',
  marginLeft: '15px',
  transition: 'color 0.3s'}}><CiLinkedin /></a>
                    </div>
                </div>


            </footer >

        </>
    )
}

export default Footer