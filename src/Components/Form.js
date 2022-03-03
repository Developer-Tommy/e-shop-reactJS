import React, {useContext, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import {useNavigate} from "react-router";
import {UserContext} from "./Hooks/UserContext";
import { Login } from "./Login";

const Form = ({handleClose, logIn}) => {

    const [id, setId] = useState(1);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isBackgroundGreen, setIsBackgroundGreen] = useState(false);
    const [passwordText, setPasswordText] = useState('');
    const [userExist, setUserExist] = useState(false);

    const { user, setUser } = useContext(UserContext);

    let history = useNavigate();

    const handlePassword = (name, tmpPassword) => {
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
        handleLogInCustomers()
    }

    const handleSubmit = e => {
        e.preventDefault();
        logIn(true);
        history("/cart");
        handleClose();
    };

    const handleLogInCustomers = () => {
        if (user.length > 0){
            setId(user[user.length-1].id + 1)
        }
        checkUserExist()
    }

    const checkUserExist = (name, pass) => {
        if (user.find(({ password }) => password === pass && user.find(({ username }) => username === name))){
            console.log("user existuje")
            setUserExist(true);
            console.log(userExist);
        }
    }

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
                onChange={e => {
                    setUsername(e.target.value)
                    checkUserExist(e.target.value, password)
                }}
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
                    handlePassword(username, e.target.value)
                    checkUserExist(username, e.target.value)
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
                <Button onClick={async () => {
                    const newUser = await Login({id, username, password});
                    setUser(prevUsers => [
                        ...prevUsers, newUser
                    ]);
                    console.log(user)
                }} style={{
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
