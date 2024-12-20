import React, { useState } from 'react';
import './personalLoanProcess.css';
import { useNavigate } from 'react-router-dom';

function PersonalLoanProcess() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        mobile: "",
        dob: "",
        pan: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const mobileRegex = /^[9]\d{9}$/;
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number starting with 9.";
        }
        
        if(formData.dob===''){
            newErrors.dob = "Please Enter Date";
        }

        if (!panRegex.test(formData.pan)) {
            newErrors.pan = "Enter a valid PAN number";
        }

        if (!formData.termsAccepted) {
            newErrors.termsAccepted = "You must accept the terms and conditions.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            navigate('/loanDetails');
        }

    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[name]; 
            return newErrors;
          });
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    return (
        <div className='personal-container'>
            <div className='personalProcessContainer-div '>
                <h4> Discover </h4>
                <h1>the Best Products curated <br />only for you</h1>
                <h5>in just few steps</h5>
            </div>
            <div className='personalForm-div  '>
                <form onSubmit={handleSubmit}>
                    <h3>Welcome!<br />
                        Start your personal loan process </h3>
                    <div className='form-details'>
                        <div>
                            <label>Enter Your Registered Mobile Number</label>
                            <input
                                type="text"
                                name="mobile"
                                placeholder="+91"
                                value={formData.mobile}
                                onChange={handleChange}
                                maxLength={10}
                            />
                            {errors.mobile && <small className="error">{errors.mobile}</small>}
                            <p className="note">
                                Note: once the mobile number is entered, an OTP will be sent to the registered
                                mobile number for verification.
                            </p>
                        </div>

                        <div >
                            <label>Enter Your Date of Birth (as per PAN/Aadhar card)</label>
                            <input
                                type="date"
                                name="dob"
                                placeholder="dd/mm/yyyy"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                            {errors.dob && <small className="error">{errors.dob}</small>}
                        </div>

                        <div>
                            <label>Enter Your PAN Number</label>
                            <input
                                type="text"
                                name="pan"
                                placeholder="Enter PAN Number"
                                value={formData.pan}
                                onChange={handleChange}
                            />
                            {errors.pan && <small className="error">{errors.pan}</small>}
                        </div>

                        <div className='checkbox-container'>
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                            />
                            <label>
                                I hereby accept that my Personal Data may be held and processed by the bank for
                                availing this loan and relevant services. I Agree to T&C.
                            </label>
                          
                        </div>
                        {errors.termsAccepted && (
                                <small className="error">{errors.termsAccepted}</small>
                            )}

                        <div>
                            <button type="submit" className="ProceedBtn">Proceed </button>
                        </div>
                    </div>


                </form>
            </div>

        </div>
    )
}

export default PersonalLoanProcess