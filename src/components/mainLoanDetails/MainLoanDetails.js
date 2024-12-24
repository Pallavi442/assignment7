import React, { useState } from 'react';
import './MainLoanDetails.css';
import { useNavigate } from 'react-router-dom';
import CommonNav from './CommonNav';

function MainLoanDetails() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [year, setYear] = useState('');

  const isButtonDisabled = !amount || !year;

  const handleSubmit=()=>{
    navigate('/personalDetails');
  }


  return (
    <div className="mainDetails-Container">
     <CommonNav activeTab={1}/>
      <form onSubmit={handleSubmit}>
        <h2>Welcome! <br /> Start your personal loan process</h2>
   
        <div className="loanDetails-Form">
        <p>How much loan is required</p>
        <input
          type="text"
          placeholder="Enter the amount you require"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <small>Loan amount should not exceed more than 50,00,000</small>
        <p>Please select the year</p>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="" disabled selected>
            Select year
          </option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
          <option value="5">5 Years</option>
        </select>
        <div className='btnClass'>
        <button disabled={isButtonDisabled}>Proceed</button>
        </div>
    
      </div>
      </form>
    </div>
  );
}

export default MainLoanDetails;
