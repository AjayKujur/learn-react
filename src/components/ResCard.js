import { IMAGE_CDN_URL } from "../utils/constants";

const ResCard = ({restaurantData}) => {
    return (
        <div className="m-4 p-4 w-52 border-2">
            <img className="res-logo" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="Restaurant Logo" />
            {/* <img className="res-logo" src={ IMAGE_CDN_URL + restaurantData.info.cloudinaryImageId} alt="Restaurant Logo" /> */}
            <h2 className="font-bold p4-4">{restaurantData.info.name}</h2>
            <h5>{restaurantData.info.cuisines.join(", ")}</h5>
            <h6>{restaurantData.info.avgRatingString}</h6>
            <h6>{restaurantData.info.sla.slaString} minutes to delivery</h6>
        </div>
    )
};

export default ResCard;
