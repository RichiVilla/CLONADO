import React from 'react';
import './CenteredCloset.css'; 
!important;

const CenteredCloset = () => {
  return (
    <div className="centered-closet">
      <div className="centered-box">
        <div className="vertical-section">
          <div className="horizontal-section">
            <div className="arrow-left">←</div>
          </div>
          <div className="horizontal-section">
            <div className="photo">Foto</div>
          </div>
          <div className="horizontal-section">
            <div className="arrow-right">→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredCloset;
