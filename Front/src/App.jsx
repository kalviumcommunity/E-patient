import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Open from './Components/Open.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/open" element={<Open />} />
      </Routes>
    </Router>
  );
}

export default App;
