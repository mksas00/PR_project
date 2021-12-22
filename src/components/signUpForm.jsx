import React,{Component} from "react";



class SignUpForm extends Component{


    state = {
        account: {
            login: "",
            username: "",
            email: "",
            password: ""
        },
        errors: {}
    };


    render() {
        return (
            <div style={{ justifyContent: 'center',  flex:1, padding: 0, marginTop:50, paddingLeft:'13%',paddingRight:'21%'}}>
                <h1 style={{marginTop:50}}>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="login">Login</label>
                        <input value={this.state.account.login}
                               name="login"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="login"
                               aria-describedby="emailHelp"
                               placeholder="Login"/>
                        {this.state.errors.login &&
                        <div className="alert alert-danger">{this.state.errors.login}</div>}
                    </div>

                    <div className="form-group" style={{paddingTop: 10}}>
                        <label htmlFor="username">Name</label>
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
                        <label htmlFor="email">Email address</label>
                        <input value={this.state.account.email}
                               name="email"
                               onChange={this.handleChange}
                               type="email"
                               className="form-control"
                               id="email"
                               aria-describedby="emailHelp"
                               placeholder="Email"/>
                        {this.state.errors.email &&
                        <div className="alert alert-danger">{this.state.errors.email}</div>}
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

                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "black",marginTop:20}}>SignUp</button>
                </form>

            </div>
        );
    }



}

export default SignUpForm;