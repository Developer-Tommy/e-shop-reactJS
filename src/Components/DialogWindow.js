import React from 'react';
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import Form from "./Form";

const DialogWindow = ({open, handleClose, addCustomers, logIn}) => {
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Sign-in to your account</DialogTitle>
                <DialogContent>
                    <Form logIn={logIn} addCustomer={addCustomers} handleClose={handleClose}/>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DialogWindow;
