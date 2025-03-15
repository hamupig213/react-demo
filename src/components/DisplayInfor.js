import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
    state = {
        isShowed: false,
    };
    HandleShowHide = () => {
        this.setState({
            isShowed: !this.state.isShowed,
        });
    };

    HandleDeleteUser = (id) => {
        return this.props.handlerDeleteUser(id);
    };

    render() {
        //destructuring
        const { listUsers } = this.props;
        return (
            <div className="display-infor-container">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <h3 onClick={this.HandleShowHide}>
                        {this.state.isShowed === true
                            ? "Hide User"
                            : "Show User"}
                    </h3>
                </div>
                {this.state.isShowed && (
                    <>
                        {listUsers.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={item.age > 18 ? "green" : "red"}
                                >
                                    <div>
                                        <h3>Name: {item.name}</h3>
                                        <p>Age: {item.age}</p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() =>
                                                this.HandleDeleteUser(item.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        );
    }
}

export default DisplayInfor;
