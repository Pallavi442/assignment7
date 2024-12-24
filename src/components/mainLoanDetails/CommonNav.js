import React from 'react';
import './common.css';

function CommonNav({ activeTab }) {
  return (
    <div className="mainNavigate-Container">
      <div
        className={`inline-Container ${
          activeTab === 1 ? 'active' : ''
        } ${activeTab > 1 ? 'completed' : ''}`}
      >
        <span>{activeTab > 1 ? '✔' : '1'}</span>
        <p>Loan Details</p>
      </div>
      <div
        className={`inline-Container ${
          activeTab === 2 ? 'active' : ''
        } ${activeTab > 2 ? 'completed' : ''}`}
      >
        <span>{activeTab > 2 ? '✔' : '2'}</span>
        <p>Personal Details</p>
      </div>
      <div
        className={`inline-Container ${
          activeTab === 3 ? 'active' : ''
        } ${activeTab > 3 ? 'completed' : ''}`}
      >
        <span>{activeTab > 3 ? '✔' : '3'}</span>
        <p>Income Details</p>
      </div>
      <div
        className={`inline-Container ${
          activeTab === 4 ? 'active' : ''
        } ${activeTab > 4 ? 'completed' : ''}`}
      >
        <span>{activeTab > 4 ? '✔' : '4'}</span>
        <p>Bank Details</p>
      </div>
      <div className={`inline-Container ${activeTab === 5 ? 'active' : ''}`}>
        <span>5</span>
        <p>Document Upload</p>
      </div>
    </div>
  );
}

export default CommonNav;
