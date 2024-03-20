// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import React, { useState } from 'react';
import Alert from './Alert';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  // let greet=<b>Good Morning</b>;

  const[mode, setMode]=useState('light');

  const[alert, setAlert]=useState(null);

  const alertFunction=(message, type)=>{
    setAlert({
     msg: message,
     type: type
    })
    
    setTimeout(()=>{
      setAlert(null);
    }, 1500);

 }
  
  const toggleFunction=()=>{
     if(mode==='light'){
       setMode('dark');
       document.body.style.backgroundColor= 'rgb(15,50,85)';
       alertFunction("Dark mode has been enabled", "success");

     }
     else{
      setMode('light');
      document.body.style.backgroundColor='white';
      alertFunction("Light mode has been enabled", "success");
     }
  }

  return (
    <>

    <BrowserRouter>
    <Routes>
     
     <Route path="/" element={
      <>
     <Navbar title="Sejal" link="Links" mode={mode} toggle={toggleFunction}/>
     <Alert alert={alert}/>
     <Textform heading="Enter the text" mode={mode} alertFunction={alertFunction}/>
     </>
     } />

     <Route path="/About" element={
      <>
      <Navbar title="Sejal" link="Links" mode={mode} toggle={toggleFunction}/>
      <About/>
      </>

     } />

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
