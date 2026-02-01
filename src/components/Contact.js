import React from "react";
import UserClass from "./UserClass";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        //console.log("Parent constructor");
    }

    componentDidMount() {
        //console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent render");
        return(
            <div>
                <h4>This is the contact page (for test).</h4>
                <hr/>
                <UserClass name="AjayKujur" />
            </div>
        )
    }
};

// const Contact = () => {
//     return(
//         <div>
//             <h4>This is the contact page (for test).</h4>
//             <hr/>
//             <UserClass name="Ajay Kumar Kujur" />
//         </div>
//     )
// };

export default Contact;

