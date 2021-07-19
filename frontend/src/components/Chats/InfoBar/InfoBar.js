import React from 'react';
import { Link } from 'react-router-dom';
import onlineIcon from '../../../images/icons/onlineIcon.png';
import closeIcon from '../../../images/icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room, location }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <div className="circle">
        <img src="https://i.stack.imgur.com/atUuf.png" />
      </div>
      <p>{room}</p>
    </div>
    <div className="rightInnerContainer">
      <Link to={location.pathname.split('/chat')[0]}><img src={closeIcon} alt="close icon" /></Link>
    </div>
  </div>
);

export default InfoBar;