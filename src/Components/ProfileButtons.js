import React from 'react';
import {useNavigate} from "react-router";
import './StyleProduct.css';

const ProfileButtons = () => {

    let history = useNavigate();

    return (
        <div className="menu" style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "20px",
            padding: "20px 45px 0 45px",
        }}>
            <button className="search cartBtn" style={{
                width: "15%",
                padding: "10px",
                display: "inline-block",
                borderRadius: "20px",
                cursor: "pointer",
                backgroundColor: "black",
                color: "white",
                fontSize: "1rem"}}
                    onClick={() => {
                history("/cart");
            }}>Cart</button>
            <button className="search cartBtn" style={{
                width: "15%",
                padding: "10px",
                display: "inline-block",
                borderRadius: "20px",
                cursor: "pointer",
                backgroundColor: "black",
                color: "white",
                fontSize: "1rem"}}
                    onClick={() => {
                history("/bookmark");
            }}>Bookmarks</button>
        </div>
    );
};

export default ProfileButtons;
