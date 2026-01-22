import {HEADER_LOGO_URL} from "../utils/constants.js";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src={HEADER_LOGO_URL} alt="React Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">AboutUs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;