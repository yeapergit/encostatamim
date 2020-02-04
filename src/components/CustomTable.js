import React from "react";
import { Button, Checkbox, Icon, Table,Pagination } from 'semantic-ui-react'

class CustomTable extends React.Component {
  render() {
    return (
      <Table compact fixed>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Nif</Table.HeaderCell>
            <Table.HeaderCell>Número Sócio</Table.HeaderCell>
            <Table.HeaderCell/>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>123456789</Table.Cell>
            <Table.Cell>19823798237</Table.Cell>
            <Table.Cell>
              <Button primary>Ver</Button>
              <Button secondary>Editar</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>123456789</Table.Cell>
            <Table.Cell>19823798237</Table.Cell>
            <Table.Cell>
              <Button primary>Ver</Button>
              <Button secondary>Editar</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>123456789</Table.Cell>
            <Table.Cell>19823798237</Table.Cell>
            <Table.Cell>
              <Button primary>Ver</Button>
              <Button secondary>Editar</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

                <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>123456789</Table.Cell>
            <Table.Cell>19823798237</Table.Cell>
            <Table.Cell>
              <Button primary>Ver</Button>
              <Button secondary>Editar</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Adicionar Pessoa
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default CustomTable;
