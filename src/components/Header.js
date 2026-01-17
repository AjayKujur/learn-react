import {HEADER_LOGO_URL} from "../utils/constants.js";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src={HEADER_LOGO_URL} alt="React Logo" />
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

export default Header;