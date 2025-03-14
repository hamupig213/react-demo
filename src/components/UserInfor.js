import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "ChuHuy",
        add: "Hanoi",
        age: 24,
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("Submit", this.state);
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };

    render() {
        return (
            <div>
                My name is {this.state.name} <br />
                My address is {this.state.add} <br />
                My age is {this.state.age} <br />
                <br />
                <br />
                <form onSubmit={this.handleOnSubmit}>
                    <label>Tên của bạn?</label>
                    <br></br>
                    <input
                        type="text"
                        onChange={this.handleOnChangeName}
                        value={this.state.name}
                    ></input>
                    <br></br>
                    <label>Tuổi của bạn?</label>
                    <br></br>
                    <input
                        type="text"
                        onChange={this.handleOnChangeAge}
                        value={this.state.age}
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;
