import {LOGO_CDN_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () =>{

   //let btnName = "Login";
   const [btnName, setBtnName] = useState("Login");


    return (
            <div className="header">
                    <div className="logo">
                            <img src={LOGO_CDN_URL} />                               
                    </div>
                    <div className="nav-items">
                            <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact Us </Link> </li>
                                    <li>Cart</li>
                                    <button className="login-btn" 
                                    onClick={() => {
                                        //btnName = "Logout";                                        
                                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                                        }}>{btnName}</button>
                            </ul>
                    </div>
            </div>
            )
    }

    export default Header;
    