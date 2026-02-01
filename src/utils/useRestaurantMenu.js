import { useState, useEffect } from "react";
import { MENU_URL } from "./constants.js";

const useResaurantMenu = (restaurantId) => {
  // Custom hook logic to fetch and manage restaurant menu data

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
      restaurantMenu();
    }, []);

  const restaurantMenu = async () => {
    const data = await fetch(MENU_URL + restaurantId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;

};

export default useResaurantMenu;