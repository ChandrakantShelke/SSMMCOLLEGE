import React, { useState } from 'react';
import './dept.css';

const SubmenuDropdown = ({ submenu }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="submenu"> {/* Add class name for submenu */}
      <select value={selectedOption} onChange={handleOptionChange} className="menu-option"> {/* Add class name for select */}
        <option value="">Select Field</option>
        {submenu.map((item) => (
          <option key={item.id} value={item.url}>
            {item.label}
          </option>
        ))}
      </select>
      {selectedOption && <a href={selectedOption} className="submenu-link">Go</a>} {/* Add class name for submenu link */}
    </div>
 );
};

const Dept = () => {
  const menuOptions = [
    {
      id: 1,
      label: 'ARTS',
      submenu: [
        { id: 11, label: 'Economics', url: '/economics' },
        { id: 12, label: 'English', url: '/english' },
        { id: 13, label: 'Geography', url: '/geography' },
        { id: 14, label: 'Hindi', url: '/hindi' },
        { id: 15, label: 'History', url: '/history' },
        { id: 16, label: 'Marathi', url: '/marathi' },
        { id: 17, label: 'Political Science', url: '/political-science' },
        { id: 18, label: 'Psychology', url: '/psychology' },
      ],
    },
    {
      id: 2,
      label: 'COMMERCE',
      submenu: [
        { id: 21, label: 'Commerce', url: '/commerce' },
      ],
    },
    {
      id: 3,
      label: 'SCIENCE',
      submenu: [
        { id: 31, label: 'Botany', url: '/botany' },
        { id: 32, label: 'Chemistry', url: '/chemistry' },
        { id: 33, label: 'Computer Science', url: '/computer-science' },
        { id: 34, label: 'Mathematics & Statistics', url: '/mathematics-statistics' },
        { id: 35, label: 'Physics', url: '/physics' },
        { id: 36, label: 'Zoology', url: '/zoology' },
      ],
    },
  ];
  return (
    <div className="college-webpage"> {/* Add class name for main menu */}
      <h1 className='c1'>COLLEGE DEPARTMENTS</h1>
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

export default Dept;
