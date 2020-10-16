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
import { api }  from '../axios_api';
import { Link } from 'react-router-dom';


export default function ListAmigos() {

  const [ amigos, setAmigos ] = useState<any[]>([])
  
  useEffect(() => {
    async function loadAmigos() {
      const response = await api.post("/CreateAmigos");
      console.log(response.data);
      setAmigos(response.data);
      console.log(amigos);
    }
    loadAmigos();
  }, []);
  return (
      <>
      </>
  );
}