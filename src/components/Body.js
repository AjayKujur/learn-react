import {Button, Navbar, Container, Nav, Form, FormControl, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResCard from "./ResCard.js";
import restaurantList from "../utils/mockData.js";
import { useState } from 'react';


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);


    return (
        <div className="body">
            <div className="search">
                <input type="text" className="search-input" placeholder="Search for restaurants or cuisines" />
                <Button className="search-btn" variant="outline-success">Search</Button>
                <Button variant="outline-primary" 
                    onClick={
                        ()=> { 
                            const filteredList = listOfRestaurants.filter(res => res.rating > 4.5);
                            setListOfRestaurants(filteredList); 
                        }}>
                            Sort
                </Button>
            </div>

            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => 
                        <ResCard key={restaurant.id} restaurantData={restaurant} />)
                }
            </div>
        </div>
    )
};

export default Body;