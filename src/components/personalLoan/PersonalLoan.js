import React, { useState } from 'react';
import './PersonalLoan.css';

function PersonalLoan() {
    const [
        selectedValue,
        setSelectedValue,
    ] = useState("personalLoan");

    const handleRadioChange = (
        value
    ) => {
        setSelectedValue(value);
    };

    return (
        <div className='personal-container'>
            <div className='container-div'>
                <p>One Step Solution For <br />All Your Problems</p>
                <div className='list-div'>
                    <ul>
                        <li>Financial Flexibility</li>
                        <li>Affordable Interest Rates</li>
                        <li>Achieve Life Goals</li>
                        <li>Consolidate Debt</li>
                        <li>Emergency Financial Support</li>
                    </ul>
                </div>
            </div>
            <div className='form-div'>
                <form>
                    <h3>What kind of a Loan you are looking for</h3>
                    <div className='form-main'>
                        <div className='radio-container'>
                        <input
                            type="radio"
                            id="personalLoan"
                            value="personalLoan"
                            checked={selectedValue === "personalLoan"}
                            onChange={() =>handleRadioChange("personalLoan")}
                        />
                        <label>Personal Loan</label>
                    </div>
                    <div className='radio-container'>
                        <input
                            type="radio"
                            id="homeLoan"
                            value="homeLoan"
                            checked={selectedValue === "homeLoan"}
                            onChange={() =>handleRadioChange("homeLoan")}
                        />
                        <label>Home Loan</label>
                    </div>
                    <div className='radio-container'>
                        <input
                            type="radio"
                            id="goldLoan"
                            value="goldLoan"
                            checked={selectedValue === "goldLoan"}
                            onChange={() =>handleRadioChange("goldLoan")}
                        />
                        <label>Gold Loan</label>
                    </div>
                    <div className='radio-container'>
                        <input
                            type="radio"
                            id="studentLoan"
                            value="studentLoan"
                            checked={selectedValue === "studentLoan"}
                            onChange={() =>handleRadioChange("studentLoan")}
                        />
                        <label>Student Loan</label>
                    </div>
                    <div className='radio-container'>
                        <input
                            type="radio"
                            id="businessLoan"
                            value="businessLoan"
                            checked={selectedValue === "businessLoan"}
                            onChange={() =>handleRadioChange("businessLoan")}
                        />
                        <label>Small Business Loan</label>
                    </div>
                    <div className='radio-container'>
                        <input
                            type="radio"
                            id="fixedDepositeLoan"
                            value="fixedDepositeLoan"
                            checked={selectedValue === "fixedDepositeLoan"}
                            onChange={() =>handleRadioChange("fixedDepositeLoan")}
                        />
                        <label>Fixed Deposite Loan</label>
                    </div>
                    <div>
                    <button className='startBtn'>Get Started </button>
                    </div>
                    </div>

                  
                </form>
            </div>

        </div>
    )
}

export default PersonalLoan