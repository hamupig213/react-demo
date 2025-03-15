import React from "react";
import "../App.css";

class DisplayInfor extends React.Component {
    state = {
        isShowed: false,
    };
    HandleShowHide = () => {
        this.setState({
            isShowed: !this.state.isShowed,
        });
    };

    render() {
        //destructuring
        const { listUsers } = this.props;
        return (
            <div>
                <div>
                    <h3 onClick={this.HandleShowHide} >
                        {this.state.isShowed === true ? "Hide User" : "Show User"}
                    </h3>
                </div>
                {this.state.isShowed && (
                    <div>
                        {listUsers.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={item.age > 18 ? "green" : "red"}
                                >
                                    <h3>Name: {item.name}</h3>
                                    <p>Age: {item.age}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default DisplayInfor;
