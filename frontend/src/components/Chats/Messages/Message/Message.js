import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { texto, user }, name }) => {
  let isSentByCurrentUser = false;

  //const trimmedName = name.trim().toLowerCase();
  const trimmedName = name;
  console.log("user", user);
  console.log("name", name);

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(texto)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(texto)}</p>
            </div>
            <p className="sentText pl-10 ">{}</p>
          </div>
        )
  );
}

export default Message;