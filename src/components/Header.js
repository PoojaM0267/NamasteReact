import {LOGO_CDN_URL} from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import UserContext from "../utils/UserContext";


const Header = () =>{

   //let btnName = "Login";
   const [btnName, setBtnName] = useState("Login");
   const onlineStatus = useOnlineStatus();

   const {loggedInUser} = useContext(UserContext);

    return (
            <div className="flex justify-between bg-pink-100 shadow-lg">
                    <div className="logo">
                            <img className="w-56" src={LOGO_CDN_URL} />                               
                    </div>
                    <div className="flex items-center">
                            <ul className="flex p-4 m-4">   
                                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                                    <li className="px-4 hover:border-b-2 border-black"><Link to="/">Home</Link></li>
                                    <li className="px-4 hover:border-b-2 border-black"><Link to="/about">About Us</Link></li>
                                    <li className="px-4 hover:border-b-2 border-black"><Link to="/contact">Contact Us </Link> </li>
                                    <li className="px-4 hover:border-b-2 border-black"><Link to="/grocery">Grocery </Link> </li>
                                    <li className="px-4 hover:border-b-2 border-black">Cart</li>
                                    <button className="hover:border-b-2 border-black ml-2"  
                                    onClick={() => {
                                        //btnName = "Logout";                                        
                                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                                        }}>{btnName}</button>
                                     <li className="px-4 font-bold">{loggedInUser}</li>
                            </ul>
                    </div>
            </div>
            )
    }

    export default Header;
    