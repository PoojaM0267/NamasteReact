import { useContext } from "react";
import User from './User';
import UserClass from './UserClass';
import UserContext from "../utils/UserContext";

const About = () => {

    const {loggedInUser} = useContext(UserContext);

    return (<div className='px-5'>
        <h1 className='font-bold py-5 text-lg'>About</h1>
        <h2 className='text-md pb-4'>This is the About page. </h2>
        <h2 className='text-md pb-4'>Logged in User : {loggedInUser}</h2>
        {/* <User name={"Pooja Mahtha"} location={"Bokaro, Jharkhand"}/> */}
        <UserClass name={"Pooja Mahtha"} location={"Ranchi, Jharkhand"}/>
    </div>)
}

export default About;