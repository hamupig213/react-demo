// class components

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>First component!!!</h1>
                <UserInfor />
                <DisplayInfor name={"Huy"} age={24} />
            </div>
        );
    }
}

export default MyComponent;
