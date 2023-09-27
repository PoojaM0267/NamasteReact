const User = (props) => {
    return <div className="user-card m-4 p-4 bg-grey-50 rounded-lg">
        <h2>Name: {props.name}</h2>
        <h3>Location: Bokaro, Jharkhand</h3>
        <h4>Contact: @pooja0267</h4>
    </div>

}

export default User;