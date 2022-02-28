import React from 'react';
import {Button} from "@material-ui/core";

const LogOutWindow = ({handleClose, logIn}) => {
    return (
        <>
            <Button style={{
                margin: "20px"

            }} variant="contained" onClick={handleClose}>
                Cancel
            </Button>
            <Button onClick={logIn(false)} style={{
                margin: "20px",
                backgroundColor: "black",
                color: "white"
            }} type="submit" variant="contained">
                Log-Out
            </Button>
        </>
    );
};

export default LogOutWindow;
