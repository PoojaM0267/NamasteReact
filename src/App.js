import React, {lazy, Suspense, useState, useEffect}from "react";
import  ReactDOM from "react-dom/client";      
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
     

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

        const Grocery = lazy(() => import("./components/Grocery"));

        const AppLayout = () => {

                const [userName, setUserName] = useState();

                //authentication
                useEffect(() => {
                  // Make an API call and send username and password
                  const data = {
                    name: "Pooja Mahtha",
                  };
                  setUserName(data.name);
                }, []);

                return (
                        <Provider store={appStore}>
                        <UserContext.Provider value = {{loggedInUser:userName, setUserName}}>
                        <div className="app">
                                <Header />
                                <Outlet />
                        </div>
                        </UserContext.Provider>
                        </Provider>
                )
        }

        const appRouter = createBrowserRouter([
                {
                        path: "/",
                        element: <AppLayout />,
                        children:[
                                {
                                        path: "/",
                                        element: <Body />
                                },
                                {
                                        path: "/about",
                                        element: <About />
                                },
                                {
                                        path:"/contact",
                                        element: <ContactUs />
                
                                },
                                {
                                        path:"/cart",
                                        element: <Cart />
                
                                },
                                {
                                        path:"/grocery",
                                        element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /></Suspense>
                
                                },
                                {
                                        path: "/restaurants/:resId",
                                        element: <RestaurantMenu />
                                }
                        ],
                        errorElement: <Error/>
                },                
        ]);

        const root = ReactDOM.createRoot(document.getElementById("root"));

       root.render(<RouterProvider router={appRouter} />);