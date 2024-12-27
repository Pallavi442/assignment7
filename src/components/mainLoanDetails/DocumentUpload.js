import React, { useState } from 'react';
import './DocumentUpload.css';
import CommonNav from './CommonNav';
import { useNavigate } from 'react-router-dom';
import arrow from '../../images/arrowNew.png';
import success from '../../images/icon-park_success.png';

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
    const [showSuccess, setShowSuccess] = useState(false);
     const [isBackgroundBlue, setIsBackgroundBlue] = useState(false);

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
        setIsBackgroundBlue(true);
        setShowSuccess(true);
    };

    const renderFileName = (file) => {
        return file ? file.name : "";
      };

    return (

        <div className="docContainer">
        {showSuccess && (
            <div className="successOverlay">
                <div className="successMessage">
                    <img src={success} alt="Success" />
                    <p>Your application was sent successfully</p>
                </div>
            </div>
        )}
             <CommonNav activeTab={5} />
            <form onSubmit={handleSubmit}>
                <h3>Income Details</h3>
                <div className='doc-main'>
                    <div className='doc-upload-div'>
                    <div className='doc-upload-inner'>
                        <label>Pan Card</label>
                        <div className='doc-innerDiv'>
                            {/* <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'panCard')}
                            /> */}
                            <label className="file-upload-doc">
                                Choose File
                                <input
                                    type="file"
                                    name="image_uploads"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 'panCard')}
                                />
                            <span>{renderFileName(formData.panCard)}</span>
                            </label>
                       
                            <button type='button'><img src={arrow} />Upload</button>
                        </div>
                    </div>
                    <div className='doc-upload-inner'>
                        <label>Aadhar Card</label>
                        <div className='doc-innerDiv'>
                            {/* <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'panCard')}
                            /> */}
                            <label className="file-upload-doc">
                                Choose File
                                <input
                                    type="file"
                                    name="image_uploads"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 'aadharCard')}
                                />
                                  <span>{renderFileName(formData.aadharCard)}</span>
                            </label>
                            <button type='button'><img src={arrow} />Upload</button>
                        </div>
                    </div>
                    </div>
                    <div className='doc-upload-div'>
                    <div className='doc-upload-inner'>
                        <label>Cheque</label>
                        <div className='doc-innerDiv'>
                            {/* <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'panCard')}
                            /> */}
                            <label className="file-upload-doc">
                                Choose File
                                <input
                                    type="file"
                                    name="image_uploads"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 'cheque')}
                                />
                                    <span>{renderFileName(formData.cheque)}</span>
                            </label>
                            <button type='button'><img src={arrow} />Upload</button>
                        </div>
                    </div>
                    <div className='doc-upload-inner'>
                        <label>Photo</label>
                        <div className='doc-innerDiv'>
                            {/* <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'panCard')}
                            /> */}
                            <label className="file-upload-doc">
                                Choose File
                                <input
                                    type="file"
                                    name="image_uploads"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 'photo')}
                                />
                                    <span>{renderFileName(formData.photo)}</span>
                            </label>
                            <button type='button'><img src={arrow} />Upload</button>
                        </div>
                    </div>
                    </div>
                    <div className='doc-upload-div'>
                    <div className='doc-upload-inner'>
                        <label>Signature</label>
                        <div className='doc-innerDiv'>
                            {/* <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'panCard')}
                            /> */}
                            <label className="file-upload-doc">
                                Choose File
                                <input
                                    type="file"
                                    name="image_uploads"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 'signature')}
                                />
                                  <span>{renderFileName(formData.signature)}</span>
                            </label>
                            <button type='button'><img src={arrow} />Upload</button>
                        </div>
                    </div>
                    <div className='doc-upload-inner'>
                        <label>Guarantor Signature</label>
                        <div className='doc-innerDiv'>
                            {/* <input
                                type='file'
                                onChange={(e) => handleFileChange(e, 'panCard')}
                            /> */}
                            <label className="file-upload-doc">
                                Choose File
                                <input
                                    type="file"
                                    name="image_uploads"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 'guarantorSignature')}
                                />
                                   <span>{renderFileName(formData.guarantorSignature)}</span>
                            </label>
                            <button type='button'><img src={arrow} />Upload</button>
                        </div>
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
