import React from "react";

class UserClass extends React.Component
{

    constructor(props){
        super(props);

        this.state ={
                userInfo:{
                    name : "Poo",
                    location: "Default Location",
                    avatar_url: "",
                    bio: "",
                    login:""
                }
            
        }
    }  
    
    
    async   componentDidMount() {
        const data = await fetch("https://api.github.com/users/PoojaM0267");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json
        })
    }

    render(){
        const { name, location, avatar_url, bio, login } = this.state.userInfo;

        return <div className="user-card bg-gray-50 rounded-lg flex">
            <div>
            <img className="w-[300px] rounded-lg" src={avatar_url} />
            </div>
            <div className="mx-auto p-10 items-center"> 
                <h2 className="m-2 p-2">Name: <span className="font-bold">{name}</span></h2>
                <h3 className="m-2 p-2">Bio: <span className="font-bold">{bio} </span></h3>
                <h3 className="m-2 p-2">Location: <span className="font-bold">{location} </span></h3>
                <h4 className="m-2 p-2">Contact: <span className="font-bold"> {login} </span></h4>
            </div>
       
        
    </div>
    }

}

export default UserClass;

