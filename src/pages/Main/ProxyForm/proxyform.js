import React, { Component } from 'react';
import './proxyform.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ProxyFrom extends Component {
  constructor(props){
    super(props);
    this.clickHandleGenerate = this.clickHandleGenerate.bind(this);
    this.clickHandleSave = this.clickHandleSave.bind(this);
    this.clickHandleCopy = this.clickHandleCopy.bind(this);
    this.state = {
        proxy_region: '',
        proxy_type: '',
        proxy_amount: '',
        proxy_detail: ''
    }
  }

  handleRegion(e) {
    this.setState({proxy_region: e.target.value});
  }

  handleType(e) {
    this.setState({proxy_type: e.target.value});
  }

  handleAmount(e) {
    this.setState({proxy_amount: e.target.value});
  }

  handleDetail(e) {
    this.setState({proxy_detail: e.target.value});
  }

  clickHandleGenerate() {
    console.log(this.state);
  }
  clickHandleCopy() {
    console.log(this.state);
  }
  clickHandleSave() {
    console.log(this.state);
  }
  

  render() {
    return (
        <Col lg={6} md={6} xs={12}>
            <div className="main-block">
                <h4> Generate Proxies </h4>
                <Row className="mt-3 mb-4">
                    <Col md={6} xs={12}>
                        <span className="help-text"> Region </span>
                        <input type="text" className="form-control" 
                        onChange={(e)=>this.handleRegion(e)} value={this.state.proxy_region} 
                        placeholder="Type proxy region" />
                    </Col>
                    <Col md={6} xs={12}>
                        <span className="help-text"> Type </span>
                        <input type="text" className="form-control" 
                        onChange={(e)=>this.handleType(e)} value={this.state.proxy_type} 
                        placeholder="Type proxy type" />
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    <Col md={6} xs={12}>
                        <span className="help-text"> Amount </span>
                        <input type="text" className="form-control" 
                        onChange={(e)=>this.handleAmount(e)} value={this.state.proxy_amount} 
                        placeholder="Type proxy amount" />
                    </Col>
                </Row>
                <Row className="mt-4 mb-5">
                    <Col md={12}>
                        <span className="help-text"> Detail </span>
                        <textarea className="form-control" 
                        onChange={(e)=>this.handleDetail(e)} value={this.state.proxy_detail} 
                        placeholder="Type proxy detail" />
                    </Col>
                </Row>
                <Row className="m-4 text-center">
                    <Col lg={4} xs={12}>
                        <div className="form-btn generate-btn">
                            <Button variant="danger" onClick={this.clickHandleGenerate}>Generate</Button>
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                        <div className="form-btn copy-btn">
                            <Button variant="danger" onClick={this.clickHandleCopy}>Copy</Button>
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                        <div className="form-btn save-btn">
                            <Button variant="danger" onClick={this.clickHandleSave}>Save</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
  }
}

export default ProxyFrom;