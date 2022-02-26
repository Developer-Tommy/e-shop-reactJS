import React from 'react';
import {useNavigate} from "react-router";

const ProfileButtons = () => {

    let history = useNavigate();

    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "20px",
            padding: "20px 0 0 45px"
        }}>
            <button style={{
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
            <button style={{
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
