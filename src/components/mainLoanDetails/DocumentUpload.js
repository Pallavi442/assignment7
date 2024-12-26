import React, { useState } from 'react';
import './DocumentUpload.css';
import { useNavigate } from 'react-router-dom';
import arrow from '../../images/arrowNew.png'

function DocumentUpload() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        panCard: null,
        aadharCard: null,
        photo: null,
        cheque: null,
        signature: null,
        guarantorSignature: null,
        termsAccepted: false,
    });

    const handleFileChange = (e, fieldName) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: e.target.files[0],
        }));
    };

    const handleCheckboxChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            termsAccepted: e.target.checked,
        }));
    };
    const isButtonDisabled = !(
        formData.panCard &&
        formData.aadharCard &&
        formData.photo &&
        formData.cheque &&
        formData.signature &&
        formData.guarantorSignature &&
        formData.termsAccepted
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isButtonDisabled) return;
        navigate('/bankDetails');
    };

    return (
        <div className='docContainer'>
            <form onSubmit={handleSubmit}>
                <h3>Income Details</h3>
                <div className='doc-main'>
                    <div>
                        <label>Pan Card</label>
                        <div className='doc-innerDiv'>
                            <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'panCard')}
                            />
                            <button type='button'><img src={arrow}/>Upload</button>
                        </div>
                    </div>
                    <div>
                        <label>Aadhar Card</label>
                        <div className='doc-innerDiv'>
                            <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'aadharCard')}
                            />
                           <button type='button'><img src={arrow}/>Upload</button>
                        </div>
                    </div>
                    <div>
                        <label>Photo</label>
                        <div className='doc-innerDiv'>
                            <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'photo')}
                            />
                            <button type='button'><img src={arrow}/>Upload</button>
                        </div>
                    </div>
                    <div>
                        <label>Cheque</label>
                        <div className='doc-innerDiv'>
                            <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'cheque')}
                            />
                              <button type='button'><img src={arrow}/>Upload</button>
                        </div>
                    </div>
                    <div>
                        <label>Signature</label>
                        <div className='doc-innerDiv'>
                            <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'signature')}
                            />
                              <button type='button'><img src={arrow}/>Upload</button>
                        </div>
                    </div>
                    <div>
                        <label>Guarantor Signature</label>
                        <div className='doc-innerDiv'>
                            <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'guarantorSignature')}
                            />
                              <button type='button'><img src={arrow}/>Upload</button>
                        </div>
                    </div>
                </div>
                <div className='checkContainer'>
                    <input
                        type='checkbox'
                        name='termsAccepted'
                        checked={formData.termsAccepted}
                        onChange={handleCheckboxChange}
                    />
                    <p>
                        By submitting this form, I hereby consent to the collection,
                        processing, and verification of my personal and financial
                        information provided herein. I understand that this information
                        will be used solely for the purpose of assessing my loan
                        application and related services. I also authorize the
                        organization to contact me via email, phone, or SMS for updates
                        regarding my application. I confirm that all the details provided
                        are accurate and complete to the best of my knowledge.
                    </p>
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

export default DocumentUpload;
