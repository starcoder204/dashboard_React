/* eslint-disable */
import React, { Component } from 'react';
import './rundata.css';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'

class RunData extends Component {
  constructor(props){
    super(props);
    this.run_data = this.props.run_data;
    console.log(this.run_data);
  }

  runData() {
      return (
        <tbody>
            {this.props.run_data.map((element, index) => (
                <tr key={index}>
                    <td>{element.domain}</td>
                    <td>{element.request}</td>
                    <td>{element.data + 'GB'}</td>
                </tr>
            ))}
        </tbody>
      )
  }

  render() {
    return (
        <Col lg={6} md={6} xs={12}>
            <div className="main-block">
                <h4> Data Usage Rundown </h4>
                <div className="main-run-data">
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>Domain</th>
                            <th>Requests</th>
                            <th>Data</th>
                            </tr>
                        </thead>
                        {this.runData()}
                    </Table>
                </div>
            </div>
        </Col>
    );
  }
}

export default RunData;