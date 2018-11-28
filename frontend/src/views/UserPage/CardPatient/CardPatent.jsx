import React, {Component} from 'react';
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

class CardPatient extends Component{
    render(){
        return(  
            <Card onClick={this.props.clicked}>
                    <Link to={{
                        pathname:`patient/${this.props.id}`
                    }}> 
                        <CardBody>
                        {this.props.enable}
                        {this.props.name} 
                        </CardBody>
                    </Link>
            </Card>
        )
    }
};

export default CardPatient;