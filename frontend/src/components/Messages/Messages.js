import React from 'react';

//import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <p className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={4}/></div>)}
  </p>
);

export default Messages;