// class components

import React from "react";

class MyComponent extends React.Component {
    trangThai = {
        name: "Huy",
        add: "Hanoi",
    };

    render() {
        return (
            <div>
                <h1>First component!!!</h1>
                My name is {this.trangThai.name} <br/>
                My address is {this.trangThai.add}
            </div>
        );
    }
}

export default MyComponent;
