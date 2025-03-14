// class components

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Huy",
        add: "Hanoi",
    };

    handleClick = (event) => {
        alert("Hello World!");
        //console.log(event.pageX);
    };

    handleOnMouseOver = (event) => {
        console.log(this.state.name);
        console.log(this.state.add);
    };

    render() {
        return (
            <div>
                <h1>First component!!!</h1>
                My name is {this.state.name} <br />
                My address is {this.state.add} <br />
                <button onMouseOver={this.handleOnMouseOver}>Click me!</button>
                <button onClick={this.handleClick}>Alert</button>
            </div>
        );
    }
}

export default MyComponent;
