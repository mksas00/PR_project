import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const axios = require('axios');



const SignUpForm = () =>{



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [errors, setErrors] = useState({})
    let navigate = useNavigate();


    const validate = () => {
        const errors = {};

       
        if (username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (email.trim() === '') {
            errors.email = 'Email is required!';
        }
        if (password.trim() === '') {
            errors.password = 'Password is required!';
        }
        if (login.trim() === ''){
            errors.login = 'Login is required'
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
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: username,
                email: email,
                password: password
            }
        }).then((response) => {
            navigate('/login')
        }).catch((error) => {
            console.log(error)
            const errors = {};
            errors.login = 'Given username or email is already taken!';
            errors.password = 'Given username or email is already taken!';
            setErrors( errors || {});
            console.log(error);
        });
    };

 
    
        return (
            <div style={{backgroundColor:'black', flex:1}}>
            <div style={{ justifyContent: 'center',  flex:1, padding: 0, marginTop:50, paddingLeft:'13%',paddingRight:'21%'}}>
                <h1 style={{marginTop:50}} style={{color:'white'}}>Sign Up</h1>
                <form onSubmit={e=>{handleSubmit(e)}}>

                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="login" style={{color:'white'}}>Login</label>
                        <input 
                               name="login"
                               onChange={e=>{setLogin(e.target.value)}}
                               type="text"
                               className="form-control"
                               id="login"
                               aria-describedby="emailHelp"
                               placeholder="Login"/>
                        {errors.login &&
                        <div className="alert alert-danger">{errors.login}</div>}
                    </div>

                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="username" style={{color:'white'}}>Name</label>
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
                        <label htmlFor="email" style={{color:'white'}}>Email address</label>
                        <input 
                               name="email"
                               onChange={e=>{setEmail(e.target.value)}}
                               type="email"
                               className="form-control"
                               id="email"
                               aria-describedby="emailHelp"
                               placeholder="Email"/>
                        {errors.email &&
                        <div className="alert alert-danger">{errors.email}</div>}
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

                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "black",marginTop:20, color:'black', backgroundColor:'white'}}>SignUp</button>
                </form>

            </div>
            </div>
        );
    

}

export default SignUpForm;