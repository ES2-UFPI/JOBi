import React from 'react';

import './Message.css';

// ReactEmoji from 'react-emoji';

const Message = ({ message: { user, texto }, name }) => {
  let isSentByCurrentUser = false;
  //console.log(name)

  if(name === user) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundBlue">
            <p>{texto}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
            <p>{texto}</p>
            </div>
            <p className="sentText pl-10 ">{name}</p>
           
          </div>
        )
  );
}

export default Message;