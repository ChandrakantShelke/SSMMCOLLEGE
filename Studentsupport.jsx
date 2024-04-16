import React from 'react';

import "./studrepport.css";

const ComponentWithPDF = ({ component, pdfUrl }) => {
  const handleClick = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className='c2'>
    <div className="component" onClick={handleClick}>
      {component}
    </div>
    </div>
  );
};

const Stud = () => {
  return (
    <div className="stud-supp">
      <div className="c3">
        <h1 className="stud-supp2">Student Support</h1>
      </div>
      
      <div className="c1">
       <a> <ComponentWithPDF component="Anti-Ragging Cell" pdfUrl="https://ssmmcollege.ac.in/wp-content/uploads/2022/03/antiraggingcell.pdf" /></a>
       <a> <ComponentWithPDF component="Scholarships" pdfUrl="path_to_scholarships_pdf.pdf" /> </a> 
       <a> <ComponentWithPDF component="Student's Grievance Cell" pdfUrl="https://ssmmcollege.ac.in/wp-content/uploads/2022/03/grievancecell.pdf" /> </a> 
       <a> <ComponentWithPDF component="Student's Welfare" pdfUrl="https://ssmmcollege.ac.in/wp-content/uploads/2022/03/welfare.pdf" /></a>
       <a> <ComponentWithPDF component="Student Adoption Scheme" pdfUrl="https://ssmmcollege.ac.in/wp-content/uploads/2022/03/adoption.pdf" /></a>
      </div>
    </div>
  );
};

export default Stud;
