import {CDN_URL} from "../utils/constants";


const RestaurantCard = (props) => {

    const {resData} = props;


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

      //console.log(resData);


return (
        <div data-testid="resCard" className="m-4 p-4 w-[300px] bg-gray-100 rounded-lg hover:bg-gray-200" >
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
                 {costForTwo}
                </span>
              </div>
            </div>
            
          </div>
        </div>
      );
};

// Higher Order Components
// imput: rest card 
// output: promoted rest card

export const withPromotedLabel = (RestaurantCard) => {
  // returning component
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 ml-4 p-2 rounded-lg">Top Rated</label>
        <RestaurantCard {...props}/>
      </div>
    );
  }

}




export default RestaurantCard;