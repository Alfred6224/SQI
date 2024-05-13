import React from 'react'
import './Firstcontainer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Firstcontainer = () => {
  return (
    <>
    <div className="container">
        <div className="container-i">
            <div className="i"><FaFacebookF /></div>
            <div className="ii"><FaTwitter /></div>
            <div className="iii"><FaLinkedinIn /></div>
        </div>

        <div className="container-t">
            <h1>Study to become a global talent</h1>
            <p className='pi'>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
            <button className='start'>Start Now</button>
            <div className="what">
                <div className="cir"><FaWhatsapp /></div>
                <div className="nex"><p>Need Help? <span>Chat with us</span></p></div>
            </div>
        </div>

        <div className="container-th">
            <img className='img' src={require("./img/bg-header-sqi-1.png")} alt="" />
        </div>
    </div>
    </>
  )
}

export default Firstcontainer;