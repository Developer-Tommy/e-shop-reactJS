import React from 'react';

const SearchBar = ({searchBox}) => {
    return (
        <div style={{
            display: "flex",
            flexBasis: "30%"
        }}>
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
