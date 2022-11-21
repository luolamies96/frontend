
import './App.css';
import Home from './Home';
import Login from './Login';
import Protectedview from './Protectedview';
import Signup from './Signup';
import React from 'react';

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div> 
      <h1> react shit</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ < Home/>} />
        <Route path="/login" element={ < Login/>} />
      <Route path="/signup" element={ < Signup/>} />
      <Route path="/protected" element={ < Protectedview/>} />
    
    
    
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
