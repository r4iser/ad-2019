import './ListAmigos.css';
import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { api }  from '../axios_api';


export default function ListAmigos() {

  const [ amigos, setAmigos ] = useState<any[]>([])
  
  useEffect(() => {
    async function loadAmigos() {
      const response = await api.get("/ListAmigos");
      console.log(response.data);
      setAmigos(response.data);
      console.log(amigos);
    }
    loadAmigos();
  }, [amigos]);
  return (
    <>
    <div className="container">
      <ul className="amigos-list">
        {amigos.map(amigo =>(
          <li key ={ amigo._id }>
            { amigo.name }
            <br/>
            { amigo.email }
            <Button className="btn-delete" negative>
              <Icon name="delete"/>
              Deletar
            </Button>
            <Button>
             <Icon name="edit"/>
             Editar
            </Button>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}