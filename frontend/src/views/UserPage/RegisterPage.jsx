import React, { Component } from "react";
import axios from "axios"; 

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
  Row, 
  Col 
} from 'reactstrap';
import Button from "../../components/CustomButton/CustomButton.jsx";

class RegisterPage extends Component {
  constructor () {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
    }
  }
  
  registerPatient(){
    const name = this.state.nome;
    const email = this.state.email;
    const cpf = this.state.cpf;

    const patient = {
      name,
      email,
      cpf,
  };

  console.log(patient);

  axios.post('http://localhost:3003/patient/register', patient)
      .then(response => {
          alert("sucess");
          window.location = "/"
      })
      .catch((error) => {
        alert("Sorry");
    });
      
  }

  render(){
    return (
      <div className="content">
          <Col md={12} xs={12}>
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
                            value={this.state.nome}
                            onChange={(event) => this.setState({nome: event.target.value})}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6} xs={12}>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input 
                            type="text" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={(event) => this.setState({email: event.target.value})}
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
                            value={this.state.cpf}
                            onChange={(event) => this.setState({cpf: event.target.value})}
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
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
      </div>
    );
  }
}

export default RegisterPage;
