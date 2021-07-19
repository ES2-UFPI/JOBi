import React from 'react';

import onlineIcon from '../../../images/icons/onlineIcon.png';
import closeIcon from '../../../images/icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <div className="circle">
        <img src="https://i.stack.imgur.com/atUuf.png" />
      </div>
      <p>{room}</p>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;