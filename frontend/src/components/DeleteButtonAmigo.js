import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { api }  from '../axios_api';

class DeleteButtonAmigo extends Component {
  state = {}
  handleClick = () =>
    api.delete(`/RemoveAmigos/${this.props.title}`);

  render() {
    const { active } = this.state

    return (
      <Button negative toggle active={active} onClick={this.handleClick}>
        Deletar
      </Button>
    )
  }
}

export default DeleteButtonAmigo
