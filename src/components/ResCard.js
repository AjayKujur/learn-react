const ResCard = ({restaurantData}) => {
    return (
        <div className="res-card">
            <img className="res-logo" src={restaurantData.image_url} alt="Restaurant Logo" />
            <h3>{restaurantData.name}</h3>
            <h4>{restaurantData.cuisine}</h4>
            <h4>{restaurantData.rating}</h4>
            <h4>{restaurantData.delivery_time_minutes} minutes to delivery</h4>
        </div>
    )
};

export default ResCard;
