import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm'
import WelcomeLanding from './Components/WelcomeLanding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<LoginForm/>} />
            <Route path='welcome' element={<WelcomeLanding />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
