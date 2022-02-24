import React from 'react';
import SearchBar from "./SearchBar";
import SortBox from "./SortBox";

const MenuBar = ({search, sorting}) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            padding: "0 45px",
            gap: "50px"
        }}>
            <SearchBar searchBox={search}/>
            <SortBox sortBox={sorting}/>
        </div>
    );
};

export default MenuBar;
