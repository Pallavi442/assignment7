import React from 'react';
import CommonNav from './CommonNav';
import { useNavigate } from 'react-router-dom';
import './IncomeDetails.css';

function IncomeDetails() {
  return (
    <div className='incomeDetails-Container'>
        <CommonNav activeTab={3}/>
        <form>
            <h3>Income Detail</h3>
            <div className='main-container'>
                <div className='grp-1'>
                    <div>
                    <div>
                        <label>Income Type</label>
                        <select
                            name="inComeType"
                            // value={formData.maritalStatus}
                            // onChange={handleInputChange}
                        >
                            <option value="">--select Income Type--</option>
                            <option value="permanent">Permanent</option>
                            <option value="temparary">Temparary</option>
                        </select>
                        {/* {errors.maritalStatus && <small>{errors.maritalStatus}</small>} */}
                    </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default IncomeDetails