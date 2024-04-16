// PlacementCell.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './placementCellStyles.css'; // Import the CSS file

const PlacementCell = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="placement-cell-container"> {/* Apply container class */}
      <h1>Placement Cell</h1> {/* Title */}
      <div className="photos">
        <Slider {...settings}>
          {/* Slider images */}
          <div>
            <img id='img' src="src/assets/images/image-1.jpeg" alt="Photo 1"  / >
          </div>
          <div>
            <img src="src/assets/images/image-2.jpeg" alt="Photo 2" />
          </div>
          <div>
            <img src="src/assets/images/image-3.jpeg" alt="Photo 3" />
          </div>
          <div>
            <img src="src/assets/images/image-4.jpeg" alt="Photo 4" />
          </div>
          <div>
            <img src="src/assets/images/image-5.jpeg" alt="Photo 5" />
          </div>
          <div>
            <img src="src/assets/images/image-6.jpeg" alt="Photo 6" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PlacementCell;
