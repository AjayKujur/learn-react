const ResCard = ({restaurantData}) => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="Restaurant Logo" />
            <h2>{restaurantData.info.name}</h2>
            <h5>{restaurantData.info.cuisines[0]}</h5>
            <h6>{restaurantData.info.avgRatingString}</h6>
            <h6>{restaurantData.info.sla.slaString} minutes to delivery</h6>
        </div>
    )
};

export default ResCard;
