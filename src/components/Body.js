import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResCard from "./ResCard.js";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRestaurantList from '../utils/useRestaurantList.js';
import Shimmer from './Shimmer.js';

const Body = () => {

     const [listOfRestaurants, setListOfRestaurants] = useState([]);
     const [filteredRestaurants, setFilteredRestaurants] = useState([]);
     const [searchText, setSearchText] = useState("");

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

    if(resInfo == null) {
        return <Shimmer />;
    } else {
        return (
        <div className="body">
            <div className="search">
                <input type="text" className="search-input" 
                value={searchText} 
                onChange={(e) => {setSearchText(e.target.value)}}
                placeholder="Search for restaurants or cuisines" />
                <Button className="search-btn" 
                onClick={ () => {
                    const searchFilteredList = 
                    listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                    setFilteredRestaurants(searchFilteredList);
                }}
                variant="outline-success">Search</Button>
                <Button variant="outline-primary" 
                    onClick={
                        ()=> { 
                            const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.5);
                            setFilteredRestaurants(filteredList); 
                        }}>
                            Sort
                </Button>
            </div>

            <div className="res-container">
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

    
};

export default Body;