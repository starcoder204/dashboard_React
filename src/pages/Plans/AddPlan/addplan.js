import React, { Component } from 'react';
import './addplan.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AddPlan extends Component {
  constructor(props){
    super(props);
    this.clickHandleAdd = this.clickHandleAdd.bind(this);
    this.state = {
        email: '',
        order_number: ''
    }
  }

  handleEmail(e) {
    this.setState({email: e.target.value});
  }

  handleOrderNumber(e) {
    this.setState({order_number: e.target.value});
  }

  clickHandleAdd() {
      console.log(this.state);
  }

  render() {
    return (
        <div className="main-block">
            <h5> Add Plan </h5>
            <Row className="mt-3">
                <Col md={4} xs={12}>
                    <span className="help-text"> Email </span>
                    <input type="email" className="form-control" 
                    onChange={(e)=>this.handleEmail(e)} value={this.state.email} 
                    placeholder="Type email..." />
                </Col>
                <Col md={4} xs={12}>
                    <span className="help-text"> Order Number </span>
                    <input type="text" className="form-control" 
                    onChange={(e)=>this.handleOrderNumber(e)} value={this.state.order_number} 
                    placeholder="Type order number..." />
                </Col>
                <Col md={4} xs={12} className="plan-add-btn">
                    <Button variant="danger" onClick={this.clickHandleAdd}>Add</Button>
                </Col>
            </Row>
        </div>
    );
  }
}

export default AddPlan;