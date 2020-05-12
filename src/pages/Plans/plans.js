import React, { Component } from 'react';
import './plans.css';
import Header from '../../components/Header/header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlanTable from './PlanTable/plantable';
import AddPlan from './AddPlan/addplan';

class Plans extends Component {
  constructor(props){
    super(props);
    this.plan_data = [
      {id:1, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:2, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:3, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:4, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 0 },
      {id:5, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:6, username: 'ivancoder', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:7, username: 'ivancoder', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 0 },
      {id:7, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:8, username: 'ivancoder', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:9, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:10, username: 'conner_star', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:11, username: 'conner_star', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:12, username: 'conner_star', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:13, username: 'conner_star', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:14, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:15, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:16, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:17, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:18, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:19, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:20, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 },
      {id:21, username: 'username', password: 'password', active_from: '15/4/2020', expires_at: '15/10/2020', data_remain: 0.1, action: 1 }

    ]
  }

  render() {
    return (
      <div className="plan-page">
        <Header/>
        <Container>
          <div className="mt-4">
            <PlanTable plan_data={this.plan_data}/>
          </div>
          <div className="mt-4">
            <AddPlan/>
          </div>
        </Container>
      </div>
    );
  }
}

export default Plans;