import React from "react";
import axios from "axios"; 

import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "../../components/CardElements/CardAuthor.jsx";
import FormInputs from "../../components/FormInputs/FormInputs.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";

import damirBosnjak from "../../assets/img/damir-bosnjak.jpg";
import mike from "../../assets/img/mike.jpg";

class SearchPage extends React.Component {
  constructor () {
    super()
    this.state = {
      nome: ''
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/oapi/paciente/`)
    // .then(response => this.setState({nome: response.data[0].nome} ))
    .then(response => console.log(response.data))
  }
  
  render(){
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
                  title={this.state.nome} //props.name
                  description="chet@gmail.com" //props.email
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
                <form>
                  <FormInputs
                    ncols={["col-md-6", "col-md-6 px-1"]}
                    proprieties={[
                      {
                        label: "Nome",
                        inputProps: {
                          type: "text",
                          defaultValue: "Chetfaker"
                        }
                      },
                      {
                        label: "Email",
                        inputProps: {
                          type: "email",
                          placeholder: "Email"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                    proprieties={[
                      {
                        label: "Telefone",
                        inputProps: {
                          type: "text",
                          placeholder: "(xx) xxxx-xxxx",
                          defaultValue: "(11) 4564-4849"
                        }
                      },
                      {
                        label: "Celular",
                        inputProps: {
                          type: "text",
                          placeholder: "(xx)xxxxx-xxxx)",
                          defaultValue: "(11) 94564-4849"
                        }
                      }
                    ]}
                  />
                    <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                    proprieties={[
                      {
                        label: "RG",
                        inputProps: {
                          type: "text",
                          placeholder: "xx.xxx.xxx-x",
                          defaultValue: "55.321.222-3"
                        }
                      },
                      {
                        label: "CPF",
                        inputProps: {
                          type: "text",
                          placeholder: "xxx.xxx.xxx-xx",
                          defaultValue: "456.374.340-34"
                        }
                      }
                    ]}
                  />
                  <Row>
                      <Col md={12}>
                          
                      </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="success" round>Salvar</Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchPage;
