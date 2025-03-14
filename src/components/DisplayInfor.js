import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring
        const { listUsers } = this.props;

        console.log(this.props);
        return (
            <div>
                <h1>Display Information</h1>
                {listUsers.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>Name: {item.name}</h3>
                            <p>Age: {item.age}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DisplayInfor;
