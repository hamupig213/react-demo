// class components

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Huy",
        add: "Hanoi",
        age: 24,
    };

    handleClick = (event) => {
        console.log("Heello", this.state.name);
        this.setState({
            name: "Huy Chu",
            age: Math.floor(Math.random() * 100 + 1),
        });
    };

    handleOnMouseOver = (event) => {
        alert("Hello World!");
    };

    render() {
        return (
            <div>
                <h1>First component!!!</h1>
                My name is {this.state.name} <br />
                My address is {this.state.add} <br />
                My age is {this.state.age} <br />
                {/* <button onMouseOver={this.handleOnMouseOver}>Alert!</button> */}
                <button onClick={this.handleClick}>Click!</button>
            </div>
        );
    }
}

export default MyComponent;
