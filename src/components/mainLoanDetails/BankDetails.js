import React, { useState } from 'react';
import CommonNav from './CommonNav';
import { useNavigate } from 'react-router-dom';
import './BankDetails.css';

function BankDetails() {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    bankName: '',
    IFSCCode: '',
    accountNo: '',
    typeOfAccount: '',
    prevLoan: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.bankName) newErrors.bankName = 'Bank Name is required';
    const ifscPattern = /^[A-Z]{4}[0-9]{7}$/;
    if (!data.IFSCCode) {
      newErrors.IFSCCode = 'IFSC Code is required';
    } else if (!ifscPattern.test(data.IFSCCode)) {
      newErrors.IFSCCode = 'Invalid IFSC Code (e.g., ABCD0123456)';
    }
    if (!data.accountNo) {
      newErrors.accountNo = 'Account Number is required';
    } 
    else if (data.accountNo.length < 10 || data.accountNo.length > 18) {
      newErrors.accountNo = 'Account Number must be between 10 and 18 digits';
    }
    if (!data.typeOfAccount) newErrors.typeOfAccount = 'Account Type is required';
    if (!data.prevLoan) newErrors.prevLoan = 'Previous Loan is required';

    setErrors(newErrors);
    setIsButtonDisabled(Object.keys(newErrors).length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isButtonDisabled) return;
    navigate('/docUpload');
  };

  return (
    <div className="bank-details">
      <CommonNav activeTab={4} />
      <form onSubmit={handleSubmit}>
        <h3>Bank Details</h3>
        <div className="bank-grp">
          <div className="grpMain-1">
            <div className="subDiv-1">
              <label>Bank Name</label>
              <select
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
              >
                <option value="">--select Income Type--</option>
                <option value="axis">Axis</option>
                <option value="hdfc">Hdfc</option>
                <option value="icici">ICICI</option>
                <option value="kotak">Kotak</option>
              </select>
              {errors.bankName && <small>{errors.bankName}</small>}
            </div>
            <div className="subDiv-1">
              <label>IFSC Code</label>
              <input
                type="text"
                name="IFSCCode"
                value={formData.IFSCCode}
                onChange={handleInputChange}
                placeholder="Enter IFSC Code"
              />
              {errors.IFSCCode && <small>{errors.IFSCCode}</small>}
            </div>
            <div className="subDiv-1">
              <label>Account No</label>
              <input
                type="text"
                name="accountNo"
                value={formData.accountNo}
                onChange={handleInputChange}
                placeholder="Enter Account No"
              />
              {errors.accountNo && <small>{errors.accountNo}</small>}
            </div>
          </div>
          <div className="grpMain-2">
            <div className="subDiv-1">
              <label>Type Of Account</label>
              <select
                name="typeOfAccount"
                value={formData.typeOfAccount}
                onChange={handleInputChange}
              >
                <option value="">--select--</option>
                <option value="saving">Saving</option>
                <option value="current">Current</option>
                <option value="fixed">Fixed Deposit</option>
                <option value="other">Other</option>
              </select>
              {errors.typeOfAccount && <small>{errors.typeOfAccount}</small>}
            </div>
            <div className="subDiv-2">
              <label>Any Previous Loan</label>
              <select
                name="prevLoan"
                value={formData.prevLoan}
                onChange={handleInputChange}
              >
                <option value="">--select--</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.prevLoan && <small>{errors.prevLoan}</small>}
            </div>
          </div>
          <div className="btn-group" id="btn-class">
            <button type="button" onClick={() => navigate('/incomeDetails')}>
              Go Back
            </button>
            <button type="submit" disabled={isButtonDisabled}>
              Save and Proceed
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BankDetails;
