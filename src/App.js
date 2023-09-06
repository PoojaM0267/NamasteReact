import React from "react";
import  ReactDOM from "react-dom/client";       
   
import Header from "./components/Header";
import Body from "./components/Body";


      

        const resObj = {
                resName: "KFC", 
                cuisine: "Burgers, Fast Food",
                deliveryTime: "35 mins",
                starRating: "4.4"
        }

        const resList = [{
                id:101,
                resName: "Meghana Foods", 
                cuisine: "Birayani, Fast Food, Chinese",
                deliveryTime: "40 mins",
                starRating: "4.7"
        },
        {
                id:102,
                resName: "Dominos", 
                cuisine: "Pizza, American Food",
                deliveryTime: "30 mins",
                starRating: "4.0"
        },
        { 
                id:103,
                resName: "Cafe Coffee Day", 
                cuisine: "Coffee, Snacks",
                deliveryTime: "25 mins",
                starRating: "4.2"
        },
        { 
                id:104,
                resName: "Subway", 
                cuisine: "Subs, Fast Food",
                deliveryTime: "35 mins",
                starRating: "4.1"
        }
        ]

        

        const AppLayout = () => {
                return (
                        <div className="app">
                                <Header />
                                <Body />
                        </div>
                )
        }


        const root = ReactDOM.createRoot(document.getElementById("root"));

       root.render(<AppLayout />);