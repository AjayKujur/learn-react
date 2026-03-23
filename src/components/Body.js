// removed react-bootstrap and bootstrap imports
import ResCard from "./ResCard.js";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRestaurantList from '../utils/useRestaurantList.js';
import Shimmer from './Shimmer.js';
import useOnlineStatus from '../utils/useOnlineStatus.js';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();


    const resInfo = useRestaurantList();

    useEffect( () => {
        const restaurants = resInfo?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if(restaurants && Array.isArray(restaurants)) {
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        }
    }, [resInfo]);
    

    // setFilteredRestaurants(Restaurants);
    // setListOfRestaurants(Restaurants);
    //let listOfRestaurants = resInfo?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    // useEffect(() => {
    //     setListOfRestaurants(resInfo?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setFilteredRestaurants(resInfo?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }, [resInfo]);

    // const remoteData = async () => {
    //     const data = await fetch(RESTAURANT_LIST_URL);
    //     const json = await data.json();
    //     const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //     setListOfRestaurants(restaurants);
    //     setFilteredRestaurants(restaurants);

    // };

    if(onlineStatus === false) {
        return <h1>🔴 You are offline! Please check your internet connection.</h1>
    } else {

        if(resInfo == null) {
        return <Shimmer />;
    } else {
        return (
        <div className="body">
            <div className="search m-4 p-4 border">
                <input type="text" className="border border-solid border-black" 
                value={searchText} 
                onChange={(e) => {setSearchText(e.target.value)}}
                placeholder="Search for restaurants or cuisines" />
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={ () => {
                    const searchFilteredList = 
                    listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                    setFilteredRestaurants(searchFilteredList);
                }}
                >Search</button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.5);
                        setFilteredRestaurants(filteredList);
                    }}
                >
                    Sort
                </button>
            </div>

            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurants && filteredRestaurants.map((restaurant) => (
                    <Link 
                    to = {"/restaurants/" + restaurant.info.id} key={restaurant.info.id} 
                    style={{ textDecoration: "none", color: "inherit"}} >
                        <ResCard key={restaurant.info.id} restaurantData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    )
    }

    }


    

    
};

export default Body;