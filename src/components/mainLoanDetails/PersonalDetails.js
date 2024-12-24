import React, { useState } from 'react';
import CommonNav from './CommonNav';
import { useNavigate } from 'react-router-dom';
import './PersonalDetails.css';

function PersonalDetails() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        email: '',
        maritalStatus: '',
        contactNumber: '',
        alternateNumber: '',
        currentAddress: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        guarantorName: '',
        guarantorContact: '',
        guarantorAddress: '',
    });

    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateForm({ ...formData, [name]: value });
    };

    const validateForm = (data) => {
        console.log("inside",data);
        const newErrors = {};
        if (!data.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!data.dob.trim()) newErrors.dob = 'Date of Birth is required';
        if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email))
            newErrors.email = 'Valid Email is required';
        if (!data.maritalStatus.trim())
            newErrors.maritalStatus = 'Marital Status is required';
        if (!data.contactNumber.trim() || !/^\d{10}$/.test(data.contactNumber))
            newErrors.contactNumber = 'Valid Contact Number is required';
        if (!data.currentAddress.trim())
            newErrors.currentAddress = 'Current Address is required';
        if (!data.country.trim()) newErrors.country = 'Country is required';
        if (!data.pincode.trim() || !/^\d{6}$/.test(data.pincode))
            newErrors.pincode = 'Valid Pincode is required';

        if (!data.guarantorName.trim())
            newErrors.guarantorName = 'Guarantor Name is required';
        if (
            !data.guarantorContact.trim() ||
            !/^\d{10}$/.test(data.guarantorContact)
        )
            newErrors.guarantorContact = 'Valid Guarantor Contact is required';
        if (!data.guarantorAddress.trim())
            newErrors.guarantorAddress = 'Guarantor Address is required';

        setErrors(newErrors);
        console.log("newErrors",newErrors);
        setIsButtonDisabled(Object.keys(newErrors).length > 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isButtonDisabled) return;
        navigate('/incomeDetails')
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className='personalDetails-Container'>
            <CommonNav activeTab={2} />
            <form onSubmit={handleSubmit}>
                <h3>Enter Personal Details</h3>
                <div className='main-grp'>
                <div className='grp-1'>
                    <div>
                        <label>Enter Your Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                        {errors.fullName && <small>{errors.fullName}</small>}
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                        />
                        {errors.dob && <small>{errors.dob}</small>}
                    </div>
                    <div>
                        <label>Email ID</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <small>{errors.email}</small>}
                    </div>
                </div>
                <div className='grp-1'>
                    <div>
                        <label>Marital Status</label>
                        <select
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleInputChange}
                        >
                            <option value="">--select--</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                        </select>
                        {errors.maritalStatus && <small>{errors.maritalStatus}</small>}
                    </div>
                    <div>
                        <label>Contact Number</label>
                        <input
                            type="tel"
                            name="contactNumber"
                            placeholder="+91"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                        />
                        {errors.contactNumber && (
                            <small>{errors.contactNumber}</small>
                        )}
                    </div>
                    <div>
                        <label>Alternate Number</label>
                        <input
                            type="tel"
                            name="alternateNumber"
                            placeholder="+91"
                            value={formData.alternateNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className='grp-1'>
                    <div>
                        <label>Current Address</label>
                        <input
                            type="text"
                            name="currentAddress"
                            placeholder="Enter Address"
                            value={formData.currentAddress}
                            onChange={handleInputChange}
                        />
                        {errors.currentAddress && (
                            <small>{errors.currentAddress}</small>
                        )}
                    </div>
                </div>
                <div className='grp-1'>
                    <div>
                        <label>Country (with country code)</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                        >
                            <option value="">--select--</option>
                            <option value="+91 India">+91 India</option>
                        </select>
                        {errors.country && <small>{errors.country}</small>}
                    </div>
                    <div>
                        <label>State</label>
                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            disabled={!formData.country}
                        >
                            <option value="">--select--</option>
                            <option value="Maharashtra">Maharashtra</option>
                        </select>
                    </div>
                    <div>
                        <label>City</label>
                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            disabled={!formData.country}
                        >
                            <option value="">--select--</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                    </div>
                </div>
                <div className='grp-1'>
                    <div>
                        <label>Pincode</label>
                        <input
                            type="text"
                            name="pincode"
                            placeholder="Enter Pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                        />
                        {errors.pincode && <small>{errors.pincode}</small>}
                    </div>
                </div>
                </div>
               
                <h3>Guarantor Details</h3>
                <div className='main-grp'>
                <div className='grp-1'>
                    <div>
                        <label>Enter Guarantor Name</label>
                        <input
                            type="text"
                            name="guarantorName"
                            placeholder="Enter Full Name"
                            value={formData.guarantorName}
                            onChange={handleInputChange}
                        />
                        {errors.guarantorName && (
                            <small>{errors.guarantorName}</small>
                        )}
                    </div>
                    <div>
                        <label>Contact Number</label>
                        <input
                            type="tel"
                            name="guarantorContact"
                            placeholder="Enter Contact Number"
                            value={formData.guarantorContact}
                            onChange={handleInputChange}
                        />
                        {errors.guarantorContact && (
                            <small>{errors.guarantorContact}</small>
                        )}
                    </div>
                </div>
                <div className='grp-1'>
                    <div>
                        <label>Current Address</label>
                        <input
                            type="text"
                            name="guarantorAddress"
                            placeholder="Enter Address"
                            value={formData.guarantorAddress}
                            onChange={handleInputChange}
                        />
                        {errors.guarantorAddress && (
                            <small>{errors.guarantorAddress}</small>
                        )}
                    </div>
                </div>
                <div className='btn-group'>
                    <button type="button" onClick={() =>navigate('/mainLoanDetails')}>
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

export default PersonalDetails;
