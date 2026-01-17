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

export default Header;