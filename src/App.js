import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './views';

function App() {
  return (
    // <Router>
    //     <Routes>
    //       <Route path="/portifolio" element={<Home />} inital={true} exact />
    //     </Routes>
    // </Router>
    <Home />
  );
}

export default App;
