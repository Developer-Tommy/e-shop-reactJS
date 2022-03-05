import React from 'react';
import './StyleProduct.css';


const SearchBar = ({searchBox}) => {
    return (
        <div className="search">
            <input style={{
                width: "100%",
                padding: "10px",
                borderRadius: "20px"
            }} type="text" placeholder="Search" onChange={(event) => {
                searchBox(event.target.value)
            }}/>
        </div>
    );
};

export default SearchBar;
