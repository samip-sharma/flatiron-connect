import React from 'react'
import { MDBAnimation } from "mdbreact";

export default class Login extends React.Component{
    state={
        user_name:'',
        password:''
    }
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleLoginSubmit=(e)=>{
        e.preventDefault()
        this.props.handleLoginSubmit(this.state)
    }

    render(){
        if (localStorage.token) {this.props.history.push('/home')}
        return(
            <div className="login-container">
                <h3 className="register-login-heading">
                <MDBAnimation type="bounce" infinite> 
                 Login
                </MDBAnimation>
                    </h3>
                <div className="login-form">
                <form onSubmit={ this.handleLoginSubmit }>
                    <input onChange={ this.handleInputChange } value={ this.state.user_name } type="text" placeholder="User Name" name="user_name" required/>
                    <input onChange={ this.handleInputChange } value={ this.state.password }  type="password" placeholder="Password" name="password" required/>
                    <input type="submit" value="submit"/>
                    <button className="login-register" onClick={()=>{this.props.history.push('/register')}}>Register</button>
                    </form>
            
                
                </div>
            </div>
        )
    }
}