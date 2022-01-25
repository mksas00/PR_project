import React, {Component, useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
const axios = require('axios');


const LoginForm = () =>{

    const [usernamme, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})
    let navigate = useNavigate();

    const validate = () => {
        const errors = {};

        if (usernamme.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (password.trim() === '') {
            errors.password = 'Password is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate();
        setErrors(errors || {});
        if (errors) return;

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: usernamme,
                password: password
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            console.log(response.data.token)
            console.log(usernamme)
            console.log(password)
            navigate('/')
        }).catch((error) => {
            const errors = {};
            errors.password = 'Given username does\'t exists or password is wrong!';
            setErrors( errors || {});
            console.log(error);
        });
    };

    
        return (
         <div style={{backgroundColor:'black', flex:1}}>
            <div style={{ justifyContent: 'center',  flex:1, padding: 0, marginTop:50, paddingLeft:'13%',paddingRight:'21%' }}>
                <h1 style={{marginTop:50, color:'white'}}>Login</h1>
                <form onSubmit={ e=>{handleSubmit(e)}} >
                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="username" style={{color:'white'}}>Login</label>
                        <input 
                               name="username"
                               onChange={e=>{setUsername(e.target.value)}}
                               type="text"
                               className="form-control"
                               id="username"
                               aria-describedby="emailHelp"
                               placeholder="Username"/>
                        {errors.username &&
                        <div className="alert alert-danger">{errors.username}</div>}
                    </div>
                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="password" style={{color:'white'}}>Password</label>
                        <input 
                               name="password"
                               onChange={e=>{setPassword(e.target.value)}}
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password"/>
                        {errors.password &&
                        <div className="alert alert-danger">{errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "white",marginTop:20, color:'black'}}>Login</button>
                </form>

            </div>
            </div>
        );
    



}

export default LoginForm