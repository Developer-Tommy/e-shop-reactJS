import React from 'react';
import SearchBar from "./SearchBar";
import SortBox from "./SortBox";

const MenuBar = ({search, sorting}) => {
    return (
        <div className="menu">
            <SearchBar searchBox={search}/>
            <SortBox sortBox={sorting}/>
        </div>
    );
};

export default MenuBar;
