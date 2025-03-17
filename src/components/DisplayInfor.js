import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {

//     render() {
//         console.log("render");
//         //destructuring
//         const { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">
//                 {true && (
//                     <>
//                         {listUsers.map((item) => {
//                             return (
//                                 <div
//                                     key={item.id}
//                                     className={item.age > 18 ? "green" : "red"}
//                                 >
//                                     <div>
//                                         <h3>Name: {item.name}</h3>
//                                         <p>Age: {item.age}</p>
//                                     </div>
//                                     <div>
//                                         <button
//                                             onClick={() =>
//                                                 this.HandleDeleteUser(item.id)
//                                             }
//                                         >
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </>
//                 )}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    console.log("render");
    //destructuring
    const { listUsers } = props;
    return (
        <div className="display-infor-container">
            {true && (
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
                                            props.handleDeleteUser(item.id)
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
};

export default DisplayInfor;
