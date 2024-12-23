import React, { useState, useEffect } from 'react';
import './LoanDetails.css';
import { useLocation } from 'react-router-dom';

function LoanDetails() {
    const location = useLocation();
    const data = location.state.formData; 
    console.log("data", data);
    const [formData, setFormData] = useState({
        mobile: data.mobile,
        dob: data.dob,
        pan: data.pan,
        termsAccepted: data.termsAccepted,
        otp: "", 
    });

    const [errors, setErrors] = useState({});
    const [formOtp] = useState(data.otp); 
    const [isOtpVerified, setIsOtpVerified] = useState(false);

 
    const validateForm = () => {
        const newErrors = {};
        console.log("formData.otp",typeof(formData.otp));
        console.log("formOtp",typeof(formOtp));

        if (!formData.otp) {
            newErrors.otp = "Please enter the OTP.";
        } else if ((Number(formData.otp)) !== (formOtp)) {
            newErrors.otp = "Invalid OTP. Please try again.";
        }
        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsOtpVerified(true);
            alert("Success! OTP verified.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[name];
            return newErrors;
        });
    };

    useEffect(() => {
        console.log("Form Data:", formData);
    }, [formData]);

    return (
        <div className="personal-container">
            <div className="personalProcessContainer-div">
                <h4> Discover </h4>
                <h1>the Best Products curated <br />only for you</h1>
                <h5>in just a few steps</h5>
            </div>
            <div className="personalForm-div">
                <form onSubmit={handleSubmit}>
                    <h3>Welcome!<br />Verify Your OTP</h3>
                    <div className="form-details">
                        <div>
                            <label>Registered Mobile Number</label>
                            <input
                                type="text"
                                name="mobile"
                                placeholder="+91"
                                value={formData.mobile}
                                disabled
                            />
                        </div>
                        <div>
                            <label>Enter the OTP you received</label>
                            <input
                                type="text"
                                name="otp"
                                placeholder="Enter OTP"
                                value={formData.otp}
                                onChange={handleChange}
                                maxLength={6}
                            />
                            {errors.otp && <small className="error">{errors.otp}</small>}
                        </div>
                        <div>
                            <label>Date of Birth (as per PAN/Aadhar card)</label>
                            <input
                                type="date"
                                name="dob"
                                placeholder="dd/mm/yyyy"
                                value={formData.dob}
                                disabled
                            />
                        </div>
                        <div>
                            <label>PAN Number</label>
                            <input
                                type="text"
                                name="pan"
                                placeholder="Enter PAN Number"
                                value={formData.pan}
                                disabled
                            />
                        </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                disabled
                            />
                            <label>
                                I hereby accept that my Personal Data may be held and processed by the bank for
                                availing this loan and relevant services. I Agree to T&C.
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="ProceedBtn" disabled={isOtpVerified}>
                                {isOtpVerified ? "Verified" : "Verify OTP"}
                            </button>
                        </div>
                        {isOtpVerified && <p className="success-msg">OTP verified successfully!</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoanDetails;
