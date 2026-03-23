import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1><b>404 - Page Not Found</b></h1>
        </div>
    );
};

export default Error;