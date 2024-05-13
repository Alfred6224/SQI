import React from 'react'
import './Nav.css';
import { FaAngleDown } from "react-icons/fa";


export const Nav = () => {
  return (
    <div>
        <div className='nov'>
            <div className="">
                <img className='img' src={require("./img/co.jpg")} alt="" />
            </div>
            <div className="nov-i">
                <ul>
                    <li><a href="#">About <FaAngleDown /></a>
                        <div className="dropdown__menu">
                            <ul>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Campus Info</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Programmes <FaAngleDown /></a>
                        <div className="dropdown_menu">
                            <ul>
                                <li><a href="#">National Innovation Diploma</a></li>
                                <li><a href="#">Professional Diplonal Program</a></li>
                                <li><a href="#">Executive Professional Certificate  -Programme</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Admissions <FaAngleDown /></a>
                        <div className="dropdown-menu">
                            <ul>
                                <li><a href="#">Apply for a Programme</a></li>
                                <li><a href="#">Mode of Study</a></li>
                                <li><a href="#">Tuition</a></li>
                                <li><a href="#">Frequently Asked Questions</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">E-Portal <FaAngleDown /></a>
                        <div className="dropdownMenu">
                            <ul>
                                <li><a href="#">Student</a></li>
                                <li><a href="#">Staff</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">SQI Scholarship</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav;

