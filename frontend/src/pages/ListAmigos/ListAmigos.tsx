import './ListAmigos.css';
import React, { Component, useState, useEffect } from 'react';
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,
  Icon,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { api }  from '../../services/api';


const fetchData = async () => {
  const response = await api.get("/ListAmigos");
  console.log(response.data);               //Recebe array do backend /ListAmigos
};


function ListAmigos() {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="ListAmigos">
      <header className="ListAmigos-header">
        <p>
          Edit <code>src/ListAmigos.tsx</code> and save to reload.
        </p>
        <div className="container">
          
        </div>
      </header>
    </div>
  );
}

export default ListAmigos;
