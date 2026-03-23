import {HEADER_LOGO_URL} from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
    
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between border-2">
            <div className="logo-container">
                <img className="w-25" src={HEADER_LOGO_URL} alt="React Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 space-x-4 font-bold">
                    <li>Status {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">AboutUs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;