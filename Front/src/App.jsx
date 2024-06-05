import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Open from './Components/Open.jsx';
import './App.css';
import Doclist from './Components/Doclist.jsx';
import Vedio from './Components/Vedio.jsx';
import SignIn from './Components/SignIn.jsx';
import UploadFile from './Components/UploadFile.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/" element={<Open />} />
        <Route path='/doctors' element={<Doclist />} />
        <Route path='/confrence' element={<Vedio />}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/upload' element={<UploadFile />} />
      </Routes>
    </Router>

    
  );
}

export default App;
