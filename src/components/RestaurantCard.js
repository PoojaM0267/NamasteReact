const RestaurantCard = (props) => {

    const {resData} = props;
    const {resName, cuisine, starRating, deliveryTime} = resData;
    return (
            <div className="res-card">
                    <img className="res-logo" alt="res logo" src="https://b.zmtcdn.com/data/pictures/1/20417701/a97231a7c99e1ef71d546d50581807b4_o2_featured_v2.jpg?output-format=webp"/>
                    <h3>{resName}</h3>
                    <h4>{cuisine}</h4>
                    <h4>{starRating } stars </h4>
                    <h4>{deliveryTime}</h4>
            </div>
    )
}

export default RestaurantCard;