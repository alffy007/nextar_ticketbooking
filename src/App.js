import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Animatedroutes from './Animatedroutes';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Router>
      <NavBar/>
    <Animatedroutes/>
     </Router>
    </div>
  );
}

export default App;
