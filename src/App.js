import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import NavbarMain from './components/navbar/NavbarMain';
import PersonalLoan from './components/personalLoan/PersonalLoan';
import PersonalLoanProcess from './components/personalLoanProcess/PersonalLoanProcess';
import LoanDetails from './components/loanDetails/LoanDetails';

function App() {
  return (
    <Router> 
      <div className="App">
        <NavbarMain />
        <Routes>
        <Route path="*" element={<PersonalLoan />} />
          <Route path="/" element={<PersonalLoan />} />
          <Route path="/loan" element={<PersonalLoan />} />
          <Route path="/loanProcess" element={<PersonalLoanProcess/>} />
          <Route path="/loanDetails" element={<LoanDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
