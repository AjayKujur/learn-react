import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            userInfo: {
                login: "Dummy Name",
                url: "https://dummyurl.com",
                avatar_url: "https://dummyimage.com/600x400/000/fff"
            }
        };

        //console.log("Child constructor");
    }


    async componentDidMount() {
        //console.log("Child componentDidMount");

        const data = await fetch("https://api.github.com/users/" + this.props.name);
        const json = await data.json();
        this.setState({
            userInfo: json
        }); 
    };

    

    render() {
        //console.log("Child render");

        const {login, url, avatar_url} = this.state.userInfo;

        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <h1>User Class Component</h1>
                <h6>Name: {login}</h6>
                <h6>Contact: UnwiserCarpet</h6>
                <h6><a href={url} target="_blank" rel="noopener noreferrer"> {url}</a></h6>
                <img src={avatar_url} alt="User Avatar" />
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Click</button>
            </div>
        )
    }
};

export default UserClass;