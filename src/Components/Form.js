import React, {useContext, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import {useNavigate} from "react-router";
import {UserContext} from "./Hooks/UserContext";
import {CurrentUserContext} from "./Hooks/CurrentUserContext";
import { Login } from "./Login";

const Form = ({handleClose, logIn}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isBackgroundGreen, setIsBackgroundGreen] = useState(false);
    const [passwordText, setPasswordText] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);


    const { users, setUsers } = useContext(UserContext);
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    let history = useNavigate();

    const handleEmail = (name) => {
        let correctEmail = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        if (correctEmail.test(name)){
            console.log("valid email")
            setEmailValid(true)
        }

    }

    const handlePassword = (name, tmpPassword) => {
        let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
        if (strongPassword.test(tmpPassword)) {
            setIsBackgroundGreen(true)
            setPasswordText("Strong")
            console.log("strong")
            setPasswordValid(true)
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
        if (emailValid && passwordValid) {
            checkUserExist()
            logIn(true);
            console.log(currentUser);
            history("/cart");
            handleClose();
        }
        else if (!emailValid && passwordValid){
            history("/")
            alert("Incorrect format of e-mail!")
        }
        else if (emailValid && !passwordValid){
            history("/")
            alert("Incorrect format of password!")
        }
        else {
            history("/")
            alert("Incorrect format of Login!")
        }

    };

    const checkUserExist = () => {
        if (users.find(user => user.username !== currentUser.username) || users.length < 1) {
            setUsers(prevUsers => [
                ...prevUsers, currentUser
            ]);
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
                    handleEmail(e.target.value)
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
                    const newUser = await Login({username, password});
                    console.log(users)
                    console.log(newUser)
                    setCurrentUser(newUser);
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
