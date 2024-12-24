import React from 'react';
import CommonNav from './CommonNav';
import { useNavigate } from 'react-router-dom';
import './IncomeDetails.css';

function IncomeDetails() {
  return (
    <div className='incomeDetails-Container'>
        <CommonNav activeTab={3}/>
    </div>
  )
}

export default IncomeDetails