import React, { Component } from 'react';
import './changepass.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ChangePass extends Component {
    constructor(props){
        super(props);
        this.clickHandleSave = this.clickHandleSave.bind(this);
        this.state = {
            current_pass:'',
            new_pass:'',
            confirm_new_pass:'',
            isIncorrectPass: true,
            isWeakPass: true,
            isMatched: true,
        }
    }

    handleCurrentPass(e) {
        this.setState({current_pass: e.target.value});
        // if current password id incorrect, 
        // this.setState({isIncorrectPass: false});
    }

    handleNewPass(e) {
        this.setState({new_pass: e.target.value});
        if(e.target.value.length < 5){
            this.setState({isWeakPass: false});
        } else{
            this.setState({isWeakPass: true});
        }
    }

    handleConfirmNewPass(e) {
        this.setState({confirm_new_pass: e.target.value});
        if (this.state.new_pass != this.state.confirm_new_pass) {
            this.setState({isMatched: false});
        }
    }

    clickHandleSave() {
      if (this.state.isIncorrectPass && this.state.isWeakPass && this.state.isMatched) {
          // handle change password
          console.log(this.state);
      }
    }

    render() {
        return (
        <div className="main-block">
            <h5> Change Password  </h5>
            <Row className="mt-3">
                <Col>
                    <span className="help-text"> Current Password </span>
                    <input type="password" className="form-control" 
                    onChange={(e)=>this.handleCurrentPass(e)} value={this.state.current_pass} 
                    placeholder="Type current password..." />
                    <span className="help-block-info" style={this.state.isIncorrectPass ? {display: 'none'} : {display:'block'}}> Current Password is incorrent </span>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <span className="help-text"> New Password </span>
                    <input type="password" className="form-control" 
                    onChange={(e)=>this.handleNewPass(e)} value={this.state.new_pass} 
                    placeholder="Type new password..." />
                    <span className="help-block-info" style={this.state.isWeakPass ? {display: 'none'} : {display:'block'}}> New Password is weak </span>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <span className="help-text"> Confirm New Password </span>
                    <input type="password" className="form-control" 
                    onChange={(e)=>this.handleConfirmNewPass(e)} value={this.state.confirm_new_pass} 
                    placeholder="Type confirm password..." />
                    <span className="help-block-info" style={this.state.isMatched ? {display: 'none'} : {display:'block'}}> Confirm Password is not matched </span>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="setting-save-btn">
                    <Button variant="danger" onClick={this.clickHandleSave}>Save</Button>
                </Col>
            </Row>
        </div>
        );
    }
}

export default ChangePass;