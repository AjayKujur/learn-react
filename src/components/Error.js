import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1><b>404 - Page Not Found</b></h1>
            {console.log(error)}
        </div>
    );
};

export default Error;