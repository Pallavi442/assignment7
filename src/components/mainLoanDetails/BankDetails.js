import React from 'react';
import CommonNav from './CommonNav';
import { useNavigate } from 'react-router-dom';
import './BankDetails.css';

function BankDetails() {
  return (
    <div className='bank-details'>
      <CommonNav activeTab={4} />
      <form 
    //   onSubmit={handleSubmit}
      >
      <h3>Bank Details</h3>
      <div className='main-grp'>
        <div className='grp-1'>
     
            <div>
              <label>Bank Name</label>
              <select
                name="bankName"
                // value={formData.incomeType}
                // onChange={handleInputChange}
              >
                <option value="">--select Income Type--</option>
                <option value="axis">Axis</option>
                <option value="hdfc">Hdfc</option>
                <option value="icici">ICICI</option>
                <option value="kotak">Kotak</option>
              </select>
              {/* {errors.incomeType && <small>{errors.incomeType}</small>} */}
            </div>
       
            <div>
            <label>IFSC Code</label>
              <input
                type="text"
                name="ifsCode"
                // value={formData.annualIncome}
                // onChange={handleInputChange}
                placeholder="Enter Ifcs Code"
              />
              {/* {errors.annualIncome && <small>{errors.annualIncome}</small>} */}
            </div>
            <div>
            <input
                type="text"
                name="accountNo"
                // value={formData.annualIncome}
                // onChange={handleInputChange}
                placeholder="Enter Account No"
              />
              {/* {errors.annualIncome && <small>{errors.annualIncome}</small>} */}
            </div>
        </div>
        <div className='grp-2'>
            <div>
            <label>Type Of Account</label>
              <select
                name="typeOfAccount"
                // value={formData.incomeType}
                // onChange={handleInputChange}
              >
                <option value="">--select Account Type--</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
            <div>
            <label>Any Previous Loan</label>
              <select
                name="anyPrevLoan"
                // value={formData.incomeType}
                // onChange={handleInputChange}
              >
                <option value="">--select Prev Loan--</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
        </div>
        <div>
            <button>Go Back</button>
            <button>Save and Proceed</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default BankDetails