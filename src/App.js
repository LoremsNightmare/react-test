import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let employeeStylee = {
    border: '2px solid red',
    margin: '10px'
  }

  const employee = ['Alam', 'Raju', 'Motaher', 'Jamal']
  return (
    <div className="App">
      <header className="App-header">
        <img style={employeeStylee} src={logo} className="App-logo" alt="logo" />

        <Person name={employee[0]} job='Clerk'></Person>
        <Person name={employee[0]} job='Manager'></Person>
        <Person name={employee[0]} job='Engineer'></Person>



        
      </header>
    </div>
  );
}

function Person(props){

  let employeeStyle = {
    border: '2px solid red',
    margin: '10px'
  }

  return (
    <div style={employeeStyle}>
      <h1>Name: {props.name} </h1>
  <h3 style={{border: '2px solid yellow', borderRadius: '15px' }}>Job: {props.job}</h3>
    </div>
  )
}


export default App;
