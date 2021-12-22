import React, {Component} from "react";



class LoginForm extends Component{

    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };




    render()
    {
        return (
         
            <div style={{ justifyContent: 'center',  flex:1, padding: 0, marginTop:50, paddingLeft:'13%',paddingRight:'21%'}}>
                <h1 style={{marginTop:50}}>Login</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="username">Email address</label>
                        <input value={this.state.account.username}
                               name="username"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="username"
                               aria-describedby="emailHelp"
                               placeholder="Username"/>
                        {this.state.errors.username &&
                        <div className="alert alert-danger">{this.state.errors.username}</div>}
                    </div>
                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password}
                               name="password"
                               onChange={this.handleChange}
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password"/>
                        {this.state.errors.password &&
                        <div className="alert alert-danger">{this.state.errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "black",marginTop:20}}>Login</button>
                </form>

            </div>
            
        );
    }



}

export default LoginForm