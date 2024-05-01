import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Open from './Components/Open.jsx';
import './App.css'
import Calendar from './Components/Calender.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/open" element={<Open />} />
        <Route path="/book" element={<Calendar />}/>
      </Routes>
    </Router>
  );
}

export default App;
