import React, { Component } from "react";
import axios from 'axios';

import { Card, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";

import Stats from "../../components/Stats/Stats.jsx";

class Dashboard extends Component {
  state = {
    patientLength: '',
    reportLength: '',
  }

  componentDidMount(){
    axios.get(`http://localhost:3003/patient/`)
    .then(response => {
        const patient = response.data
        this.setState({ patientLength: patient.patient.length });
        console.log(this.state.patientLength);
    });

    axios.get(`http://localhost:3003/report/`)
    .then(response => {
        const report = response.data
        this.setState({ reportLength: report.report.length });
        console.log(this.state.reportLength);
    })

  }
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-bell-55 text-warning" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Notificações</p>
                      <CardTitle tag="p">Nenhum</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-sync-alt",
                      t: "Atualizar"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-badge text-success" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Paciente</p>
                      <CardTitle tag="p">{this.state.patientLength}</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "far fa-calendar",
                      t: "Ultimo mês"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-chat-33 text-danger" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Atendimentos</p>
                      <CardTitle tag="p">{this.state.reportLength}</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "far fa-clock",
                      t: "Ultima Semana"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
