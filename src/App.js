import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import NavbarMain from './components/navbar/NavbarMain';
import PersonalLoan from './components/personalLoan/PersonalLoan';

function App() {
  return (
    <Router> 
      <div className="App">
        <NavbarMain />
        <Routes>
          {/* <Route path="/" element={<PersonalLoan />} /> */}
          <Route path="/loan" element={<PersonalLoan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
