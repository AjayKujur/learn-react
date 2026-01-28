import { useState, useEffect, use } from "react";
import { MENU_URL } from "../utils/constants.js";
import Error from "./Error.js";
import { useParams } from "react-router";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(""); 
    const [menuInfo, setmenuInfo] = useState(null);

    const { resId } = useParams();

    useEffect( () => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        const restaurantInfo = json?.data?.cards[2]?.card?.card?.info;
        setResInfo(restaurantInfo);
        const menuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        setmenuInfo(menuItems);

    }
    return menuInfo == null ? <Error /> : (
        <div className="menu">
            <h2>{resInfo.name}</h2>
            <h6>{resInfo.avgRating} ⭐</h6>
            <h6>{resInfo.cuisines.join(", ")}</h6>
            <h6>{resInfo.costForTwo }</h6>
            <hr />
            <ul>
                {menuInfo.map( item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ₹ {item.card.info.price / 100}
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default RestaurantMenu;