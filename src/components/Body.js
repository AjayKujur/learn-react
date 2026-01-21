import {Button, Navbar, Container, Nav, Form, FormControl, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResCard from "./ResCard.js";
import restaurantList from "../utils/mockData.js";
import { useState, useEffect } from 'react';


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        remoteData();
    }, []);

    const remoteData = async () => {
        const data = await fetch(
            "https://namastedev.com/api/v1/listRestaurants"
        );
        const json = await data.json();
        //console.log("remoteData called");
        //console.log(json);
        //console.log("remoteData received");
        //console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //setListOfRestaurants(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //console.log(listOfRestaurants);
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
                    listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                    //console.log(searchFilteredList);
                    setFilteredRestaurants(searchFilteredList);
                }}
                variant="outline-success">Search</Button>
                <Button variant="outline-primary" 
                    onClick={
                        ()=> { 
                            const filteredList = listOfRestaurants.filter(res => res.rating > 4.5);
                            setFilteredRestaurants(filteredList); 
                        }}>
                            Sort
                </Button>
            </div>

            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => 
                        <ResCard key={restaurant.id} restaurantData={restaurant} />)  
                }
            </div>
        </div>
    )
};

export default Body;