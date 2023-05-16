import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Footer from './Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Title     from './components/Title/Title';
import About     from './components/About/About';
import POPOSList from './components/POPOSList/POPOSList';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Title />
        <Routes>
          <Route exact path="/" element={<POPOSList />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/details/:id" element={<POPOSDetails />} />
        </Routes>
        <Footer />
        </Router>
    </div>
  );
}


export default App;
