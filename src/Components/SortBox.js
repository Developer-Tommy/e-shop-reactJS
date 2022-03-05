import React from 'react';
import './StyleProduct.css';

const SortBox = ({sortBox}) => {
    return (
        <div className="search">
            <select style={{
                width: "100%",
                padding: "10px",
                borderRadius: "20px"
            }} onChange={(event) => {
                sortBox(event.target.value)
            }}>
                <option defaultValue="id">Default</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
            </select>
        </div>
    );
};

export default SortBox;
