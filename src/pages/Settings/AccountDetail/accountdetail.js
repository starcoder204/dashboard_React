import React, { Component } from 'react';
import './accountdetail.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AccountDetail extends Component {
  constructor(props){
    super(props);
  }

  render() {
      const { account_details } = this.props;
    return (
        <div className="main-block account-detail">
            <h5> Account Details  </h5>
            <h6 className="mt-4"> Most Recent Order </h6>
            <Row className="mt-3">
                <Col> 
                    <span className="detail-title"> Type : </span> <span className="detail-content"> {account_details.type} </span>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col> 
                    <span className="detail-title"> Quality : </span> <span className="detail-content"> {account_details.quality} </span>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col> 
                    <span className="detail-title"> Length : </span> <span className="detail-content"> {account_details.length} </span>
                </Col>
            </Row>
        </div>
    );
  }
}

export default AccountDetail;