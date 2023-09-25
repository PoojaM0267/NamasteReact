import User from './User';
import UserClass from './UserClass';

const About = () => {
    return (<div>
        <h1>About</h1>
        <h2>This is the About page. </h2>
        {/* <User name={"Pooja Mahtha"} location={"Bokaro, Jharkhand"}/> */}
        <UserClass name={"Pooja Mahtha"} location={"Ranchi, Jharkhand"}/>
    </div>)
}

export default About;