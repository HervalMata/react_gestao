import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { connect } from 'react-redux'

class UnidadesNew extends Component {
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
                Cadastro de Unidades
              </CardHeader>
              <CardBody>
                <a href="#/unidades/list" className="btn btn-success mb-4">Listar Unidades</a>
                <Form>
                  <FormGroup>
                    <Label htmlFor="name">Nome da Unidade</Label>
                    <Input type="text" name="name" placeholder="Entre o nome da unidade"></Input>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="Button" color="success">Cadastrar</Button>
              </CardFooter>
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

export default connect(mapStateToProps, mapDispatchToProps)(UnidadesNew)
