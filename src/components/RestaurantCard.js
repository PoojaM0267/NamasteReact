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

return (
        <div className="res-card">
          <img
            src={
              CDN_URL +
              (cloudinaryImageId === ""
                ? "s6fhwzl0tss0vgrqvcid"
                : cloudinaryImageId)
            }
            alt="" height="100px" width="150px"
            className="res-logo"
          />
          <div className="res-details px-2">
            <h4 className="font-medium text-base text-black">{name}</h4>
            <span className="">{cuisines.join(", ")}</span>
            <div className="flex justify-between items-center my-2 font-medium">
              <div className="flex items-center gap-1 px-1 text-white bg-green-500 font-semibold">
                <span className="text-[0.6rem]">&#9733;</span>
                <span className="text-[0.6rem]">
                  {avgRating === "--" ? "4.2" : avgRating}
                </span>
              </div>
              <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
              <span className="">{slaString}</span>              
              <div className="res-price">
                <span className="text-xs">
                 ₹{costForTwo / 100} FOR TWO
                </span>
              </div>
            </div>
            <div className="flex border-t pt-4 gap-2  font-semibold"></div>
            <span className="text-[#a0522d] text-center">
              {!aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
                ? "30% off | Use NEWFUD"
                : aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
            </span>
          </div>
        </div>
      );
}

export default RestaurantCard;