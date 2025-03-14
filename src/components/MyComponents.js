// class components

import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>First component!!!</h1>
                <UserInfor></UserInfor>
            </div>
        );
    }
}

export default MyComponent;
