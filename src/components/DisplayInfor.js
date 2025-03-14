import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring
        const { name, age } = this.props;

        console.log(this.props);
        return (
            <div>
                <h1>Display Information</h1>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </div>
        );
    }
}

export default DisplayInfor;
