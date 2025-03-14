import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: "ChuHuy",
        add: "Hanoi",
        age: 24,
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        // truyền props từ cha sang con
        this.props.handleAddUser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: this.state.name,
            age: this.state.age,
        });
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

export default AddUserInfor;
