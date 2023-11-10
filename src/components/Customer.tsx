import React from "react";

interface IPROPS {
    name: String;
    title: String;
    age?: Number;
}
let Customer: React.FC<IPROPS> = ({ name, title}) => {
    return (
        <div>
            <h1>Customer Component</h1>
            <h4>Name : {name}</h4>
            <h4>Title : {title}</h4>
        </div>
    );
};

export default Customer;
