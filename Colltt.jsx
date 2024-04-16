import React, { useState } from 'react';
import './collttstyle.css'; // Import CSS file

const SubmenuDropdown = ({ submenu }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown"> {/* Add class name for dropdown */}
      <select value={selectedOption} onChange={handleOptionChange} className="select"> {/* Add class name for select */}
        <option value="">Select Your Year</option>
        {submenu.map((item) => (
          <option key={item.id} value={item.url}>
            {item.label}
          </option>
        ))}
      </select>
      {selectedOption && <a href={selectedOption} className="go-button">Go</a>} {/* Add class name for go-button */}
    </div>
  );
};

const Colltt = () => {
  const menuOptions = [
    {
      id: 1,
      label: 'ARTS ',
      submenu: [
        { id: 11, label: 'ARTS 2018-19 TT', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/arts1819.pdf' },
      ],
    },
    {
      id: 2,
      label: 'COMMERCE ',
      submenu: [
        { id: 21, label: 'COMMERCE 2018-19', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/commerce1819.pdf' },
      ],
    },
    {
      id: 3,
      label: 'SCIENCE ',
      submenu: [
        { id: 31, label: 'SCIENCE 2018-19', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/science1819.pdf' },
      ],
    },
    {
      id: 4,
      label: 'PRACTICAL ',
      submenu: [
        { id: 41, label: 'PRACTICAL SESSION ', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/pscience1819.pdf' },
      ],
    },
    {
      id: 5,
      label: 'COLLEGE TimeTable ',
      submenu: [
        { id: 51, label: 'College TT', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/College-Time-Table-2020-2021.pdf' },
      ],
    },
  ];

  return (
    <div className="container"> {/* Add class name for container */}
      <h1 className="title">College Time-Table</h1> {/* Add class name for title */}
      <div className="menu-container"> {/* Add class name for menu container */}
        {menuOptions.map((option) => (
          <div key={option.id} className="menu-item"> {/* Add class name for menu item */}
            <h2>{option.label}</h2>
            <SubmenuDropdown submenu={option.submenu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colltt;
