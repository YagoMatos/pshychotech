import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from "reactstrap";
import { Route, Redirect } from "react-router-dom";
import Dashboard from '../../layouts/Dashboard/Dashboard';


class Auth extends Component {
    constructor () {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    handleEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    handlePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    callDash(){
        return (
            <Route path="/dashboard" component={Dashboard} />
        )
    }

    login(){
        const email = this.state.email;
        const password = this.state.password;

        const user = {
            email,
            password,
        };

        axios.post("http://localhost:3003/auth/authenticate", user)
        .then( res => {
            console.log(res);
        })
        .catch((error) => {
            console.log("Sorry");
            console.log(error);
        });
    }


    render(){
        return(
            <div className="content">
                <Row>
                    <Col md={6}>
                        <form className="auth">
                            <input className='form-control'
                                placeholder='Email'
                                value={this.state.email}
                                onChange={(e) => { this.handleEmail(e)}}>
                            </input>
                            <input className='form-control'
                                type="password"
                                placeholder='Senha'
                                value={this.state.password}
                                onChange={(e) => { this.handlePassword(e)}}>
                            </input>
                            <button type="submit"
                            onClick={() => { this.login()}}>
                            Logar</button>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Auth;