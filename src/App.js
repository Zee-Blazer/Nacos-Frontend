import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './Components/styling.css';

// Components
import { Home } from './Components/home';
import { Login } from './Components/login';
import { Signup } from './Components/signup';
import { AddStudent } from './Components/addStudent';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/add' element={ <AddStudent /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
