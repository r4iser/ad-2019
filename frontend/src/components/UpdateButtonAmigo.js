import React, { Component } from 'react'
import {api} from '../axios_api';
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,
  Form,
} from 'semantic-ui-react'

export default class UpdateButtonAmigo extends Component {
  state = { open: false, name: this.props.amigoName, email: this.props.amigoEmail, submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = async () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })

    await api.patch(`/UpdateAmigos/${this.props.title}`, {
      name : name,
      email : email,
    })

  }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  render() {
    const { open, name, email, submittedName, submittedEmail } = this.state

    return (
      <TransitionablePortal
        closeOnTriggerClick
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        openOnTriggerClick
        trigger={
          <Button
            content={'Editar'}
            active={open}
          />
        }
      >
        <Segment
          style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
        >
          <Header>Editar amigo</Header>
          <div id="editForm">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Input
                  required={true}
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                />
                <Form.Input
                  type="email"
                  required={true}
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                />
                <Form.Button content='Submit' />
              </Form.Group>
            </Form>
        </div>
        </Segment>
      </TransitionablePortal>
    )
  }
}
