import React from 'react';
import './App.css';
import ListAmigos from './components/ListAmigos';
import CreateAmigoPortal from './components/CreateAmigoPortal';
import SortAmigos from './components/SortAmigos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Amigo Secreto</h1>
       <div className="staticButtons">
       < CreateAmigoPortal />
       < SortAmigos />
       </div>
       </header>
       <div className="amigosList">
        < ListAmigos />
       </div>
    </div>
  );
}

export default App;
