import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { api }  from '../axios_api';

class SortAmigos extends Component {
  state = {}
  handleClick = () =>
    api.get('/SortAmigos');

  render() {
    const { active } = this.state

    return (
      <Button
      className="SortAmigos_btn"
      toggle
      active={active}
      onClick={this.handleClick}>
        Sortear
      </Button>
    )
  }
}

export default SortAmigos
