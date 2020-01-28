import React, { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
    const [ credentials, setCredentials ] = useState({
            username: '',
            password: ''
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();

        axios
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <h2>this is the login form</h2>
            <form onSubmit={login}>
                <input name='username' type='text' onChange={handleChange} />
                <input name='password' type='text' onChange={handleChange} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;