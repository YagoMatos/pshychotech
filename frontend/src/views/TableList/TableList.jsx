import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

//import { thead, tbody } from "../../variables/general";

class RegularTables extends React.Component {

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Consultas</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {this.props.thead.map((prop, key) => {
                        if (key === this.props.thead.length - 1)
                          return (
                            <th key={key} className="text-right">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.tbody.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.data.map((prop, key) => {
                            if (key === this.props.thead.length - 1)
                              return (
                                <td key={key} className="text-right">
                                  {prop}
                                </td>
                              );
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegularTables;
