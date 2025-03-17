import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: "ChuHuy",
//         add: "Hanoi",
//         age: 24,
//     };

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         // truyền props từ cha sang con
//          props.handleAddUser({
//             id: Math.floor(Math.random() * 100 + 1) + "-random",
//             name:  state.name,
//             age:  state.age,
//         });
//     };

//     handleOnChangeName = (event) => {
//          setState({
//             name: event.target.value,
//         });
//     };

//     handleOnChangeAge = (event) => {
//          setState({
//             age: event.target.value,
//         });
//     };

//     // component = template + logic js
//     render() {
//         return (
//             <div>
//                 My name is { state.name} <br />
//                 My address is { state.add} <br />
//                 My age is { state.age} <br />
//                 <br />
//                 <br />
//                 <form onSubmit={ handleOnSubmit}>
//                     <label>Tên của bạn?</label>
//                     <br></br>
//                     <input
//                         type="text"
//                         onChange={ handleOnChangeName}
//                         value={ state.name}
//                     ></input>
//                     <br></br>
//                     <label>Tuổi của bạn?</label>
//                     <br></br>
//                     <input
//                         type="text"
//                         onChange={ handleOnChangeAge}
//                         value={ state.age}
//                     ></input>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState("Chu Huy");
    const [age, setAge] = useState(24);
    const [address, setAddress] = useState("Hanoi");

    const handleOnSubmit = (event) => {
        event.preventDefault();
        // truyền props từ cha sang con
        props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: name,
            age: age,
        });
    };

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    };

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            My name is {name} <br />
            My address is {address} <br />
            My age is {age} <br />
            <br />
            <br />
            <form onSubmit={handleOnSubmit}>
                <label>Tên của bạn?</label>
                <br></br>
                <input
                    type="text"
                    onChange={handleOnChangeName}
                    value={name}
                ></input>
                <br></br>
                <label>Tuổi của bạn?</label>
                <br></br>
                <input
                    type="text"
                    onChange={handleOnChangeAge}
                    value={age}
                ></input>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddUserInfor;
