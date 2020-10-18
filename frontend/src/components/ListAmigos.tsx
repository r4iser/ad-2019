import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { api }  from '../axios_api';

import DeleteButtonAmigo from './DeleteButtonAmigo';
import UpdateButtonAmigo from './UpdateButtonAmigo';

export default function ListAmigos() {

  const [ amigos, setAmigos ] = useState<any[]>([]);

  useEffect(() => {
    async function loadAmigos() {
      const response = await api.get("/ListAmigos");
      setAmigos(response.data);
    }
    loadAmigos();
  }, [amigos]); //Todo refresh ao adicionar novo amigo
  return (
    <>
    <div className="container">
      <ul className="amigos-list">
        {amigos.map(amigo =>(
          <li key ={ amigo._id }>
            { amigo.name }
            <br/>
            { amigo.email }
            <br/>
            <div className="listButtons">
            < UpdateButtonAmigo title={amigo._id} amigoName={amigo.name}  amigoEmail={amigo.email} />
            < DeleteButtonAmigo title={amigo._id} amigoName={amigo.name} />
            </div>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}