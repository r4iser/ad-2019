import React from 'react';
import ReactDOM from 'react-dom';
import ListAmigos from './components/ListAmigos';
import PortalExampleControlled from './components/CreateAmigoPortal';

ReactDOM.render(
  <React.StrictMode>
    <PortalExampleControlled/>
    <ListAmigos />
  </React.StrictMode>,
  document.getElementById('root')
);
