import React from 'react';
import './acadamic.css'; 

function Acad() {
  const calendars = [
    { year: 'Academic Calender 2022-23', pdfUrl: 'src/assets/Calender/ACADEMIC-CALENDAR-2022-2023.pdf' },
    { year: 'Academic Calender 2021-22', pdfUrl: 'src/assets/Calender/ACADEMIC-CALENDAR-2021-2022.pdf' },
    { year: 'Academic Calender 2020-21', pdfUrl: 'src/assets/Calender/ACADEMIC-CALENDAR-2020-2021.pdf' },
    { year: 'Academic Calender 2019-20', pdfUrl: 'src/assets/Calender/Academic-Calendar-2019-2020.pdf' },
    { year: 'Academic Calender 2018-19', pdfUrl: 'src/assets/Calender/ACADEMIC-CALENDAR-2018-2019.pdf' },
    { year: 'Academic Calender 2017-18', pdfUrl: 'src/assets/Calender/ACADEMIC-CALENDAR-2017-2018.pdf' },
    { year: 'Academic Calender 2016-17', pdfUrl: 'src/assets/Calender/ACADEMIC-CALENDAR-2016-2017.pdf' },
    { year: 'Academic Calender 2015-16', pdfUrl: 'src/assets/Calender/ACADEMIC-CALENDAR-2015-2016.pdf' },
    { year: 'Academic Calender 2014-15', pdfUrl: 'src/assets/Calender/ACADEMIC-CALENDAR-2014-2015.pdf' },
    { year: 'Academic Calender 2013-14', pdfUrl: 'src/assets/Calender/ACADEMIC-CALENDAR-2013-2014.pdf' },
  ];

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="calendar-container">
    <div className="c3">
    <h1 className="calendar-container2">Academic Calendars</h1>
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

export default Acad;
