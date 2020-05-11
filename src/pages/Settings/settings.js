import React, { Component } from 'react';
import './settings.css';
import Header from '../../components/Header/header';
import ChangePass from './ChangePass/changepass';
import AccountDetail from './AccountDetail/accountdetail';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Settings extends Component {
  constructor(props){
    super(props);
    this.account_details = {
      type: 'Residential Proxy Plan',
      quality: '2GB',
      length: '30 Days'
    }
  }

  render() {
    return (
      <div className="setting-page">
        <Header/>
        <Container>
          <Row className="mt-5">
            <Col md={6} xs={12}>
              <ChangePass/>
            </Col>
            <Col md={6} xs={12}>
              <AccountDetail account_details={this.account_details}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Settings;