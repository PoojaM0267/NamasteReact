import {LOGO_CDN_URL} from "../utils/constants";
import { useState } from "react";


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
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Contact Us </li>
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
    