import { useState, useEffect} from "react";
import { RESTAURANT_LIST_URL } from "./constants.js";

const useRestaurantList = () => {
    // Custom hook logic to fetch and manage restaurant list

    const [restaurantList, setRestaurantList] = useState(null);

    useEffect( () => {
        fetchRestaurantList();
    }, []);

    const fetchRestaurantList = async () => {
        const data = await fetch(RESTAURANT_LIST_URL);
        const json = await data.json();
        setRestaurantList(json);
    }    
    return restaurantList;
};

export default useRestaurantList;