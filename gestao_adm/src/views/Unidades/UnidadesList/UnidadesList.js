import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button
} from 'reactstrap'
import { connect } from 'react-redux'

class UnidadesList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                Lista de Unidades
              </CardHeader>
              <CardBody>
                <a href="#/unidades/new" className="btn btn-success mb-4">Cadastrar Unidade</a>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TEU</td>
                      <td>
                        <Button color="warning">Editar</Button>
                        <Button color="danger">Remover</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnidadesList)
