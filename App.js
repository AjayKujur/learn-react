import React from "react";
import ReactDOM from "react-dom/client";
import {Button, Navbar, Container, Nav, Form, FormControl, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const restaurantList = {
  data: [
    {
      id: "rest_001",
      name: "The Golden Spoon",
      rating: 4.6,
      review_count: 324,
      cuisine: "Italian",
      price_range: "$$$",
      is_open: true,
      delivery_time_minutes: 35,
      address: "123 Olive Street, San Francisco, CA",
      tags: ["pasta", "wine", "romantic"],
      image_url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      created_at: "2025-10-12T14:23:11Z",
      image_id: "photo-1528605248644-14dd04022da1"
    },
    {
      id: "rest_002",
      name: "Spice Route Kitchen",
      rating: 4.3,
      review_count: 210,
      cuisine: "Indian",
      price_range: "$$",
      is_open: false,
      delivery_time_minutes: 45,
      address: "88 Curry Lane, San Jose, CA",
      tags: ["spicy", "curry", "vegan options"],
      image_url: "https://images.unsplash.com/photo-1600628422019-8a62a52c6d70",
      created_at: "2025-09-05T09:11:42Z",
      image_id: "photo-1600628422019-8a62a52c6d70"
    },
    {
      id: "rest_003",
      name: "Sakura Sushi Bar",
      rating: 4.8,
      review_count: 512,
      cuisine: "Japanese",
      price_range: "$$$$",
      is_open: true,
      delivery_time_minutes: 25,
      address: "45 Cherry Blossom Rd, Palo Alto, CA",
      tags: ["sushi", "omakase", "fresh seafood"],
      image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      created_at: "2025-08-18T18:47:03Z",
      image_id: "photo-1546069901-ba9599a7e63c"
    },
    {
      id: "rest_004",
      name: "El Camino Grill",
      rating: 4.2,
      review_count: 178,
      cuisine: "Mexican",
      price_range: "$$",
      is_open: true,
      delivery_time_minutes: 30,
      address: "777 Sunset Blvd, Los Angeles, CA",
      tags: ["tacos", "grill", "family friendly"],
      image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      created_at: "2025-11-01T12:05:55Z",
      image_id: "photo-1600891964599-f61ba0e24092"
    },
    {
      id: "rest_005",
      name: "Green Leaf Café",
      rating: 4.5,
      review_count: 266,
      cuisine: "Vegetarian",
      price_range: "$$",
      is_open: true,
      delivery_time_minutes: 20,
      address: "19 Market Street, Berkeley, CA",
      tags: ["healthy", "organic", "gluten-free"],
      image_url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      created_at: "2025-07-22T08:31:19Z",
      image_id: "photo-1555396273-367ea4eb4db5"
    }
  ]
};

    

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src="https://cdn-icons-png.flaticon.com/512/1183/1183694.png" alt="React Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
};

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

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" className="search-input" placeholder="Search for restaurants or cuisines" />
                <Button className="search-btn" variant="outline-success">Search</Button>
            </div>
            <div className="res-container">
                {
                    restaurantList.data.map((restaurant) => 
                        <ResCard key={restaurant.id} restaurantData={restaurant} />)
                }
            </div>
        </div>
    )
};

const Footer = () => {
    return (
        <div className="footer">
            <h4>© 2024 Test FoodieApp. All rights reserved.</h4>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <h1>This is JSX Header Component</h1>
            <Header />
            <Body />
            <Footer />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);