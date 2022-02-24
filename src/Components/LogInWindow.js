import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import DialogWindow from "./DialogWindow";

const LogInWindow = () => {

    const [open, setOpen] = useState(false);

    const handleToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

    return (
        <div style={{
            position: "relative"
        }}>
            <h1 style={{
                margin: "0",
                padding: "40px",
                backgroundColor: "black",
                color: "white"
            }}>E-shop MobileShop</h1>

            <FontAwesomeIcon className="logedUser" style={{
                position: "absolute",
                top: "30%",
                right: "50px",
                fontSize: "3rem",
                color: "white",
                cursor: "pointer"
            }} icon={faCircleUser} onClick={handleToOpen}/>
            <DialogWindow open={open} handleClose={handleToClose}/>
        </div>
    );
};

export default LogInWindow;
