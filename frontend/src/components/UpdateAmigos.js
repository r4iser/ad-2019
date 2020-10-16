import React, { Component } from 'react'
import { Form, Button, Grid, Header, Segment, Portal } from 'semantic-ui-react';

import {api} from '../axios_api';

export default class UpdateAmigos extends Component {
  state = { open: false }
  state = { name: '', email: '', submittedName: '', submittedEmail: '' }

  handleClose = () => this.setState({ open: false })
  handleOpen = () => this.setState({ open: true })

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = async () => {
    const { name, email } = this.state

    this.setState({ name, email })

    await api.patch(`/UpdateAmigos/${this.props.title}`, {
      name : name,
      email : email,
    });

  }

  render() {
    const { name, email } = this.state
    const { open } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Button
            content='Editar'
            disabled={open}
            onClick={this.handleOpen}
          />

          <Portal onClose={this.handleClose} open={open}>
            <Segment
              style={{
                left: '40%',
                position: 'fixed',
                top: '50%',
                zIndex: 1000,
              }}
            >
              <Header>Editar amigo</Header>
              <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Input
                  placeholder='Nome'
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                />
                <Form.Button positive content='Enviar' />
                </Form.Group>
              </Form>
            </Segment>
          </Portal>
        </Grid.Column>
      </Grid>
    )
  }
}