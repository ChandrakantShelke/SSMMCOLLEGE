import React from 'react';
import './admiss.css'; // Make sure the CSS file path is correct

const AdmissionPanel = () => {
  return (
    <div className="admission-panel">
      <h1>ADMISSION PANEL </h1>
      <img src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/deskview.png?alt=media&token=77757565-e372-413d-9dc1-75d834972f66" alt="College Admission" className="admission-image" />
      <h2>ADMISSION OPEN </h2>
      <p>"Empowering students to create solutions for tomorrow's challenges."</p>
      <p>From: 1st June 2022 To: 31st July 2022</p>
      <button className="apply-button">APPLY</button>
      <a href="your-link-here" target="_blank" rel="noopener noreferrer">
        <button className="click-here-button">CLICK HERE</button>
      </a>
    </div>
  );
};

export default AdmissionPanel;
