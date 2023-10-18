import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Masculino', value: 'male' },
  { key: 'f', text: 'Feminino', value: 'female' },
]

class CreatePage extends React.Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Primeiro Nome'
            placeholder='Primeiro Nome' />
          <Form.Field
            control={Input}
            label='Ultimo Nome'
            placeholder='Ultimo Nome' />
          <Form.Field
            control={Select}
            label='Género'
            options={options}
            placeholder='Género' />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange} />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange} />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange} />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Observações'
          placeholder='' />
        <Form.Field control={Button}>Submeter</Form.Field>
      </Form>          
      <Link to="/list">
          <Button secondary>Voltar à tabela</Button>
      </Link>
      </>
    )
  }
};

export default CreatePage;
