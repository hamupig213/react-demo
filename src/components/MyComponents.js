// class components

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Huy", age: 24 },
        { id: 2, name: "Tuan", age: 16 },
        { id: 3, name: "Duc", age: 28 },
        {id: 4, name: "Hieu", age: 3}
    ]);

    const test = "Cin chào ngay moi";
    const obj = { name: "John", email: "contact@gmail.com" };

    const handleAddUser = (user) => {
       setListUsers([user, ...listUsers]);
    };

    const handleDeleteUser = (id) => {
        let cloneListUsers = [...listUsers];
        cloneListUsers = cloneListUsers.filter((user) => user.id !== id);
        setListUsers(cloneListUsers);
    };

    return (
        <>
            {test}
            <br />
            {/*obj không thể in trực tiếp => cần convert về string*/}
            {JSON.stringify(obj)}
            <br />
            <h1>First component!!!</h1>
            <AddUserInfor handleAddUser={handleAddUser} />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    );
};

export default MyComponent;
