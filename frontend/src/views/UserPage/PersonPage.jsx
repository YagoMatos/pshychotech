import React, { Component } from "react";
import axios from "axios"; 

import CardAuthor from "../../components/CardElements/CardAuthor.jsx";
import { 
  FormGroup, 
  Input, 
  Label, 
  Form, 
  Alert,
  Card, 
  CardHeader, 
  CardBody, 
  CardTitle,
  CardFooter,
  Row, 
  Col 
} from 'reactstrap';
import Button from "../../components/CustomButton/CustomButton.jsx";
import damirBosnjak from "../../assets/img/damir-bosnjak.jpg";
import mike from "../../assets/img/mike.jpg";

class PersonPage extends Component {
  constructor () {
    super()
    this.state = {
      patientName: '',
      patientCpf: '',
      patientEmail: '',
      patientId: '',
      patientEnable: '',
      patient: {
        name: '',
        cpf: '',
        rg: '',
        enable: '',
        email: '',
        _id: '',
    }
  }
}

  handleChangeName(event) {
    this.setState({
      patientName: event.target.value
    })
  }

  handleChangeEnable(event) {
    this.setState({
      patientEnable: event.target.value
    })
  }

  handleChangeRg(event) {
    this.setState({
      patientRg: event.target.value
    })
  }

  handleChangeCpf(event) {
    this.setState({
      patientCpf: event.target.value
    })
  }

  handleChangeEmail(event) {
    this.setState({
      patientEmail: event.target.value
    })
  }

  componentDidMount(){
    // console.log(this.props.location.pathname)
    const patientId = this.props.location.pathname;
    axios.get(`http://localhost:3003${patientId}`)
    .then(response => {
      const patient = response.data;
      this.setState({ patient: patient.patient });
      this.setState({
        patientName: patient.patient.name,
        patientCpf: patient.patient.cpf,
        patientEmail: patient.patient.email,
        patientId: patient.patient._id,
        patientEnable: patient.patient.enable,
      });
      console.log(patient.patient);
    })
  }

  registerPatient(){
    const name = this.state.patientName;
    const email = this.state.patientEmail;
    const rg = this.state.patientRg;
    const cpf = this.state.patientCpf;
    const patientId = this.state.patient._id;
    const enable = this.state.patientEnable;

    const patient = {
      name,
      cpf,
      rg,
      enable,
      email,
      patientId,
  };

  console.log(patientId);

  axios.put(`http://localhost:3003/patient/${patientId}`, patient)
      .then(response => {
          alert("sucess");
          console.log(response.data);
        })
  }
  
  render(){
    const { name, cpf, rg, enable, email } = this.state.patient;

    return (
      <div className="content">
        <Row>
          <Col md={4} xs={12}>
            <Card className="card-user">
              <div className="image">
                <img src={damirBosnjak} alt="..." />
              </div>
              <CardBody>
                <CardAuthor
                  avatar={mike}
                  avatarAlt="..."
                  title={name} //props.name
                  description={email} //props.email
                />
                <p className="description text-center">
                  (11) 94564-4849 
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} className="ml-auto">
                      <h5>
                        12
                        <br/>
                        <small>Consultas</small>
                      </h5>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} className="mr-auto ml-auto">
                      <h5>
                        12
                        <br/>
                        <small>Relatórios</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
              </CardHeader>
              <CardBody>
              <Form>
                  <Row>
                    <Col md={6} xs={12}>
                      <FormGroup> 
                          <Label>Nome</Label>
                          <Input 
                            type="text" 
                            placeholder="Nome" 
                            value={this.state.patientName}
                            onChange={(event) => this.handleChangeName(event)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6} xs={12}>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input 
                            type="text" 
                            placeholder="Email" 
                            value={this.state.patientEmail}
                            onChange={(event) => this.handleChangeEmail(event)}
                          />
                        </FormGroup>
                      </Col>
                  </Row>
                  <Row>
                    <Col md={6} xl={12}>
                      <FormGroup>
                          <Label>RG</Label>
                          <Input 
                            type="text" 
                            placeholder="RG" 
                          />
                      </FormGroup>
                    </Col>
                    <Col md={6} xl={12}>
                      <FormGroup>
                          <Label>CPF</Label>
                          <Input 
                            type="text" 
                            placeholder="CPF" 
                            value={this.state.patientCpf}
                            onChange={(event) => this.handleChangeCpf(event)}
                          />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button 
                        color="success" 
                        round
                        onClick={() => this.registerPatient()}
                      >Salvar</Button>
                      </div>
                      <div className="update ml-auto mr-auto">
                       <Button 
                        color="danger" 
                        round
                        onClick={() => this.handleCancel()}
                      >Cancelar</Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PersonPage;
