
import '../styles/Login.css';
import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";


export default function Signup(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    function performValidation() {
        return username.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="Signin">
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
                <FormGroup controlId="login" bsSize="large">
                    <h1>Login</h1>
                    <FormControl
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        type="text"
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
                    <FormGroup controlId="email" bsSize="large">
                        <h1>Email</h1>
                        <FormControl
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                        />
                    </FormGroup>
                <Button block bsSize="large" disabled={!performValidation()} type="submit">
                    Signin
                </Button>
            </form>
        </div>
    );
}


