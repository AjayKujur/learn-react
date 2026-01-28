import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResCard from "./ResCard.js";
import { useState, useEffect } from 'react';
import { RESTAURANT_LIST_URL } from '../utils/constants.js';
import { Link } from 'react-router-dom';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        remoteData();
    }, []);

    const remoteData = async () => {
        const data = await fetch(RESTAURANT_LIST_URL);
        const json = await data.json();
        const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);

    };

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
                    filteredRestaurants.map((restaurant) => (
                    <Link 
                    to = {"/restaurants/" + restaurant.info.id} key={restaurant.info.id} 
                    style={{ textDecoration: "none", color: "inherit"}} >
                        <ResCard key={restaurant.info.id} restaurantData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Body;