import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

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

export default AppLayout;