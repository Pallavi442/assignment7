import React, { useState } from 'react';
import CommonNav from './CommonNav';
import { useNavigate } from 'react-router-dom';
import './IncomeDetails.css';
import './PersonalDetails.css';
import img from '../../images/UploadImg.png';

function IncomeDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    incomeType: '',
    yearsOfExperience: '',
    annualIncome: '',
    occupation: '',
  });

  const [errors, setErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.incomeType) newErrors.incomeType = 'Income Type is required';
    if (!data.yearsOfExperience) newErrors.yearsOfExperience = 'Years of Experience is required';
    if (!data.annualIncome || isNaN(data.annualIncome)) newErrors.annualIncome = 'Valid Annual Income is required';
    if (!data.occupation) newErrors.occupation = 'Occupation is required';
    setErrors(newErrors);
    setIsButtonDisabled(Object.keys(newErrors).length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isButtonDisabled) return;
 
  };

  return (
    <div className='incomeDetails-Container'>
      <CommonNav activeTab={3} />
      <form onSubmit={handleSubmit}>
        <h3>Income Details</h3>
        <div className='main-grp'>
          <div className='grp-1'>
            <div>
              <label>Income Type</label>
              <select
                name="incomeType"
                value={formData.incomeType}
                onChange={handleInputChange}
              >
                <option value="">--select Income Type--</option>
                <option value="permanent">Permanent</option>
                <option value="temporary">Temporary</option>
              </select>
              {errors.incomeType && <small>{errors.incomeType}</small>}
            </div>
            <div>
              <label>Years of Experience</label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                placeholder="Enter Years of Experience"
              />
              {errors.yearsOfExperience && <small>{errors.yearsOfExperience}</small>}
            </div>
            <div>
              <label>Annual Income</label>
              <input
                type="text"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleInputChange}
                placeholder="Enter Annual Income"
              />
              {errors.annualIncome && <small>{errors.annualIncome}</small>}
            </div>
          </div>

          <div className='grp-2'>
            <div>
              <label>Occupation <i>(According to income type selection)</i></label>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
              >
                <option value="">--select--</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              {errors.occupation && <small>{errors.occupation}</small>}
            </div>
          </div>

          <div className='grp-3'>
            <label>Upload Payslips (last 3 months)</label>
            <div className='img-container'>
              <img src={img} alt="Upload" />
              <div>
                <p>Drag your document here or</p>
                <button className='browse-btn' type="button">
                  Browse File
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='btn-group'>
          <button type="button" onClick={() => navigate('/personalDetails')}>
            Go Back
          </button>
          <button type="submit" disabled={isButtonDisabled}>
            Save and Proceed
          </button>
        </div>
      </form>
    </div>
  );
}

export default IncomeDetails;
