import React from 'react';
import './resinv.css'; 

function ResInv() {
  const calendars = [
    { year: 'Research Paper', pdfUrl: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/RESEARCH-PAPERS.pdf' },
    { year: 'Research Info', pdfUrl: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/RESEARCHER-INFO.pdf' },

  ];

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="calendar-container">
    <div className="c3">
    <h1 className="calendar-container2">!!!...Research & Innovation...!!!</h1>
    </div>
     
      <div className="c1">
        {calendars.map((calendar) => (
          <div  key={calendar.year}>
            <div className='c2'>
            <a href={calendar.pdfUrl} target="_blank" rel="noopener noreferrer">{calendar.year}</a>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResInv;
