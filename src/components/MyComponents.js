// class components

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Huy", age: 24 },
            { id: 2, name: "Tuan", age: 16 },
            { id: 3, name: "Duc", age: 28 },
        ],
    };

    render() {
        return (
            <div>
                <h1>First component!!!</h1>
                <UserInfor />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;
