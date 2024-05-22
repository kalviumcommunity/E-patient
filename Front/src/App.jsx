import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Open from './Components/Open.jsx';
import './App.css';
import Doclist from './Components/Doclist.jsx';
import Vedio from './Components/Vedio.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/" element={<Open />} />
        <Route path='/doctors' element={<Doclist />} />
        <Route path='/confrence' element={<Vedio />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
