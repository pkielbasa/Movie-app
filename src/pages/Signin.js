
import '../styles/Login.css';
import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";


export default function Signin(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function performValidation() {
        return username.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                    <h1>Username</h1>
                    <FormControl
                        autoFocus
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <h1>Password</h1>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!performValidation()} type="submit">
                    Signin
                </Button>
            </form>
        </div>
    );
}


