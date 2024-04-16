import React from 'react';
import './coursesstyle.css'; // Import CSS file for styling

function Courses() {
  return (
    <div className="container">
      <header>
        <h1 className='c1'>University Courses</h1>
      </header>
      <section>
        <h2 className='u1'>Under-Graduate Courses</h2>
        <ul>
          <li>
            <strong>B.A. (Special)</strong> – English, Marathi, Hindi, History, Economics, Political Science, Geography is taught at general level
          </li>
          <li>
            <strong>B.A. (Special)</strong> – Psychology (Non Grant)
          </li>
          <li>
            <strong>B.Com</strong> – Commerce
          </li>
          <li>
            <strong>B.Sc (Special)</strong> – Chemistry, Physics, Zoology, Mathematics & Statistics is taught at general level
          </li>
          <li>
            <strong>B.Sc</strong> – Computer Science, Botany (Sp.) (Non Grant)
          </li>
        </ul>
      </section>
      <section>
        <h2 className='u2'>Post-Graduate Courses</h2>
        <ul>
          <li>
            <strong>M.A.</strong> – English, History (Non Grant)
          </li>
          <li>
            Recognized Ph.D. guides for the following subjects are guiding research students in the subjects English, Marathi, Hindi, History
          </li>
        </ul>
      </section>
      <section>
        <h2 className='u3'>YCMOU (Distance Education Centre)</h2>
        <ul>
          <li>
            <strong>B.A.</strong> – Marathi, Hindi, English, Psychology, Economics, History, Political Science
          </li>
          <li>
            <strong>B.Com</strong> – Commerce
          </li>
          <li>
            <strong>M.A.</strong> – Marathi, Hindi
          </li>
          <li>
            <strong>M. Com</strong>
          </li>
        </ul>
      </section>
      <section>
        <h2 className='u4'>Certificate Courses</h2>
        <ol>
          <li>1. Spoken English</li>
          <li>2. Hindi Sanwad & Anuwad Kaushalya</li>
          <li>3. Introduction to Indian Constitution</li>
          <li>4. Introduction to Banking System</li>
          <li>5. Travels & Tourism</li>
        </ol>
      </section>
    </div>
  );
}

export default Courses;
