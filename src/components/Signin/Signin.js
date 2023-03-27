import React, { useState } from "react";
import './Signin.css';
import { Login } from "./Login";
import { Register } from "./Register";

export default function App(props) {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">

      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} seller={props.seller} dealer={props.dealer} setLogin={props.setLogin} removeLogin={props.removeLogin}/> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}
