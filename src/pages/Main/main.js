import React, { Component } from 'react';
import Header from '../../components/Header/header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProxyForm from './ProxyForm/proxyform';
import RunData from './RunData/rundata';

import './main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      data_used: 0.01,
      data_remain: 0.02,
      expiry_date: '12th May 2020',
    }
    this.run_data = [
        { id: 1, domain: 'www.supremenewyork.com', request: 13748382567, data: 0.9 },
        { id: 2, domain: 'www.supremenewyork.com', request: 13748382, data: 0.9 },
        { id: 3, domain: 'www.supremenewyork.com', request: 13748382, data: 0.9 },
        { id: 4, domain: 'www.suprem.com', request: 13748382556775, data: 0.9 },
        { id: 5, domain: 'www.supre.com', request: 13748382575656, data: 0.9 },
        { id: 6, domain: 'www.supre.com', request: 13748382, data: 0.9 },
        { id: 7, domain: 'www.supre.com', request: 13748382, data: 0.9 },
        { id: 8, domain: 'www.supremenewyork.com', request: 13748382, data: 0.9 },
        { id: 9, domain: 'www.supremenewyork.com', request: 13748382, data: 0.9 },
        { id: 10, domain: 'www.supremenewyork.com', request: 13748382, data: 0.9 },
    ]
  }

  mainTop() {
    return (
        <Row className="main-top-div">
          <Col lg={3} md={6}>
            <div className="main-top-block">
              Welcome to Ignify
              <br/>
              Example sub text
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="main-top-block" style={{textAlign: "left"}}>
              <div className="dashboard-main-data">
                {this.state.data_used + 'GB'}
              </div>
              <div className="main-title-data-used">
                Data Used
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="main-top-block" style={{textAlign: "left"}}>
              <div className="dashboard-main-data">
                {this.state.data_remain + 'GB'}
              </div>
              <div className="main-title-data-remain">
                Data Remaining
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="main-top-block" style={{textAlign: "left"}}>
              <div className="dashboard-main-data">
                {this.state.expiry_date}
              </div>
              <div className="main-title-expiry-date">
                Expiry Date
              </div>
            </div>
          </Col>
        </Row>
    );
  }

  render() {
    return (
      <div className="main-page">
        <Header/>
        <Container>
          {this.mainTop()}
          <Row className="dashboard-page">
              <ProxyForm/>
              <RunData run_data={this.run_data}/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;