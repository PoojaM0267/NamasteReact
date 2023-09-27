import {CDN_URL} from "../utils/constants";


const RestaurantCard = (props) => {

    const {resData} = props;



    //const {resName, cuisine, starRating, deliveryTime} = resData;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        deliveryTime,
        cuisines,
        slaString,
        costForTwo,
        aggregatedDiscountInfo,
      } = resData;


//     return (
//             <div className="res-card">
//                     <img className="res-logo" alt="res logo" src="https://b.zmtcdn.com/data/pictures/1/20417701/a97231a7c99e1ef71d546d50581807b4_o2_featured_v2.jpg?output-format=webp"/>
//                     <h3>{resName}</h3>
//                     <h4>{cuisine}</h4>
//                     <h4>{starRating } stars </h4>
//                     <h4>{deliveryTime}</h4>
//             </div>
//     )

// console.log(name);



return (
        <div className="m-4 p-4 w-[300px] bg-gray-100 rounded-lg hover:bg-gray-200" >
          <img
            src={CDN_URL + cloudinaryImageId }
            alt="" 
            className="w-[250px] h-[150px] rounded-lg"
          />
          

           
          <div className="py-4">
            <h4 className="font-bold py-2 text-lg">{name}</h4>
            <span className="">{cuisines.join(", ")}</span>
            <div >
              <div >
                <span>&#9733;</span>
                <span>
                  {avgRating === "--" ? "4.2" : avgRating}
                </span>
              </div>
              <div ></div>
              <span>{slaString}</span>              
              <div className="res-price">
                <span className="text-xs">
                 {/* ₹{costForTwo / 100} FOR TWO */}
                 {costForTwo}
                </span>
              </div>
            </div>
            
          </div>
        </div>
      );
}

export default RestaurantCard;