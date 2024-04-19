import React from 'react';
import './LeftComponent.css';

const LeftComponent = () => {
  return (
    <div className="left-menu" style={{ marginTop: '60px' }}>
      <div className="menu-item">Create outfit</div>
      <div className="menu-item">Wardrobe</div>
      <div className="menu-item">Calendar</div>
      <div className="menu-item">Smash or Pass</div>
      <div className="menu-item">Sign out</div>      
    </div>
  );
};

export default LeftComponent;

