import React, { useState, useEffect } from "react";
import { Button, Checkbox, Icon, Table, Pagination } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CustomTable = ({ users }) => {
  return (
    <Table compact fixed>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell>Nome</Table.HeaderCell>
          <Table.HeaderCell>Nif</Table.HeaderCell>
          <Table.HeaderCell>Número Sócio</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map(user => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.number}</Table.Cell>
            <Table.Cell>{user.nif}</Table.Cell>
            <Table.Cell>
              <Link to={`/user/${user.id}`}>
                <Button primary>Ver</Button>
              </Link>

              <Button secondary>Editar</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Link to="/new">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Adicionar Pessoa
              </Button>
            </Link>
            <Link to="/upload">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="upload" /> Upload
              </Button>
            </Link>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default CustomTable;
