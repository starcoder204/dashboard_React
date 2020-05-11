import React, { Component } from 'react';
import './login.css';
import history from './../../history.js';
import logo from '../../assets/images/logo.png';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      isInvalidEmail: true,
      isInvalidPassword: true
    }
  }

  componentWillMount(){
   
  }

  handleEmail(e){
    this.setState({email: e.target.value});
    var flag = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (flag == null) {
        this.setState({isInvalidEmail: false});
    } else {
        this.setState({isInvalidEmail: true});
    }
  }

  handlePassword(e) {
    this.setState({password:e.target.value});
    if(e.target.value.length < 5){
        this.setState({isInvalidPassword:false});
    } else{
        this.setState({isInvalidPassword:true});
    }
  }

  handleLogin(e) {
    console.log("Handel Login");
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
    var flag = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (flag == null) {
        this.setState({isInvalidEmail: false});
    } else {
        this.setState({isInvalidEmail: true});
    }
    
    if(this.state.password.length < 5){
        this.setState({isInvalidPassword:false});
    } else{
        this.setState({isInvalidPassword:true});
    }
    if (this.state.isInvalidEmail == true && this.state.isInvalidPassword == true) {
        
        history.push('/main');
    }
  }

  handleRegister() {
    console.log("Handel Register");
  }

  handleForgotPassword() {
    console.log("Forgot Password");
  }

  
  render() {
    var emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    return (
      <div className="login-page pt-5">
        <div className="login_div">
            <div className="p-2 pt-4 pb-4 top_div">
              <div className="m-2"> <img src={logo}></img> </div>
              <div className='detail-title'> Residential Proxy Dashboard </div>
            </div>

            <form className="form p-5">
              <div className="form-group text-left mb-0">
                <div className='inputText'>
                  <span className="help-text"> Email </span>
                  <input type="email" className="form-control" onChange={(e)=>this.handleEmail(e)} name="email" value={this.state.email} required placeholder="Enter your email address" />
                  <span className="help-block-info" style={this.state.isInvalidEmail ? {display:'none'} : {display:'block'}}> Invalid Email </span>
                </div>
              </div>
              
              <div className="form-group text-left">
                <div className='inputText'>
                  <span className="help-text"> Password </span>
                  <input type="password" className="form-control" onChange={(e)=>this.handlePassword(e)} name="password" required placeholder="Enter your password" />
                  <span className="help-block-info" style={this.state.isInvalidPassword ? {display:'none'} : {display:'block'}}> Password is weak </span>
                </div>
              </div>
              
              <button type="button" onClick={(e)=>this.handleLogin(e)} className="btn btn-primary btn-block mb-2">
                  Sign In
              </button>

              <div className="row">
                  <div className="col-md-6">
                    <div className="signup-btn text-left">
                        <span onClick={emailValid?()=>this.handleRegister():null}> Register </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="forgot-btn text-right">
                        <span onClick={emailValid?()=>this.handleForgotPassword():null}> Forgot Password </span>
                    </div>
                  </div>
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default Login;