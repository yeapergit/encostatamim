import React, { useEffect } from "react";
import { getUserDetails } from "../actions/";
import { connect } from "react-redux";

import {
  Button,
  Form,
  Input,
  Select,
  TextArea
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const options = [
  { key: "m", text: "Masculino", value: "male" },
  { key: "f", text: "Feminino", value: "female" }
];

const ViewPage = props => {
  let isEditable = false;

  if (props.location.state !== undefined) {
    isEditable = props.location.state.isEditable;
  }

  useEffect(() => {
    props.getUserDetails(props.match.params.id);
  }, [props, props.match.params.id]);

  /*return (
    <div>
      {props.user.name}
      <br></br>
      {props.user.id}
    </div>
  ); */

  return (
    <><Form>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Primeiro Nome</label>
          <Input disabled={!isEditable} value={props.user.firstName}></Input>
        </Form.Field>
        <Form.Field>
          <label>Último Nome</label>
          <Input disabled={!isEditable} value={props.user.lastName}></Input>
        </Form.Field>
        <Form.Field
          control={Select}
          label="Género"
          options={options}
          placeholder="Género" />
      </Form.Group>
      <Form.Group inline>
        <Form.Field>
          <label>NIF</label>
          <Input disabled={!isEditable} value={props.user.nif}></Input>
        </Form.Field>
        <Form.Field>
          <label>Número Sócio</label>
          <Input disabled={!isEditable} value={props.user.number}></Input>
        </Form.Field>
      </Form.Group>
      <Form.Field disabled={!isEditable} control={TextArea} label="Observações" placeholder="" />
      <Form.Field disabled={!isEditable} control={Button}>Submeter</Form.Field>
    </Form><Link to="/list">
        <Button secondary>Voltar à tabela</Button>
      </Link></>
  );
};

const mapStateToProps = state => {
  return {
    user: state.details
  };
};

export default connect(mapStateToProps, { getUserDetails })(ViewPage);
