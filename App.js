import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Register } from './Register';
import { Login } from './Login';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
