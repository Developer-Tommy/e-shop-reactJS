import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";

const Form = ({handleClose}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isBackgroundGreen, setIsBackgroundGreen] = useState(false);
    const [passwordText, setPasswordText] = useState('');

    const handlePassword = (tmpPassword) => {
        let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
        if (strongPassword.test(tmpPassword)) {
            setIsBackgroundGreen(true)
            setPasswordText("Strong")
            console.log("strong")
        }
        else {
            setIsBackgroundGreen(false)
            setPasswordText("Weak")
            console.log("weak")
        }

        console.log(password)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(username, password);
        handleClose();
    };

    return (
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: "20px"

        }} onSubmit={handleSubmit}>
            <TextField style={{
                marginBottom: "10px",
                width: "100%"
            }}
                label="Username"
                variant="filled"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <TextField style={{
                margin: "10px 0 20px 0",
                width: "100%"
            }}
                label="Password"
                variant="filled"
                       required
                       type="password"
                value={password}
                onChange={e => {
                    setPassword(e.target.value)
                    handlePassword(e.target.value)
                }}
            />
            <span style={{
                width: "100%",
                height: "15px",
                fontSize: "13px",
                textAlign: "center",
                borderRadius: "10px",
                backgroundColor: isBackgroundGreen ? "#2ecc71" : "#e74c3c"
            }}>{passwordText}</span>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 50px"

            }}>
                <Button style={{
                    margin: "20px"

                }} variant="contained" onClick={handleClose}>
                    Cancel
                </Button>
                <Button style={{
                    margin: "20px",
                    backgroundColor: "black",
                    color: "white"
                }} type="submit" variant="contained">
                    Log-in
                </Button>
            </div>
        </form>
    );
};

export default Form;
