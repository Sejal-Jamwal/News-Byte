import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
       
      <div>
      
      <BrowserRouter>

      <Navbar/>

      <Routes>

      <Route exact path="/business" element={
        <News key="business" pageSize={8} country="in" category="business"/>
      }/>

      <Route exact path="/entertainment" element={
        <News key="entertainment" pageSize={8} country="in" category="entertainment"/>
      }/>

      <Route exact path="/health" element={
        <News key="health" pageSize={8} country="in" category="health"/>
      }/>

      <Route exact path="/science" element={
        <News key="science" pageSize={8} country="in" category="science"/>
      }/>

     <Route exact path="/sports" element={
        <News key="sports" pageSize={8} country="in" category="sports"/>
      }/>

     <Route exact path="/technology" element={
        <News key="technology" pageSize={8} country="in" category="technology"/>
      }/>

      <Route exact path="/" element={
        <News key="general" pageSize={8} country="in" category="general"/>
      }/>
 
      </Routes>
      </BrowserRouter>

      </div>
      
    )
  }
}

export default App



