import React, { useState, useEffect } from "react";

import './Loading_chat.css';

const Chat = () => {
  //const [users, setUsers] = useState('');

  useEffect(() => {
    

  }, []);

  return (
    <div className="outerContainer-alt">
      <div className="container-chat-alt">
        <h4>Selecione uma conversa!</h4>
        <div class="c-loader"></div>
      </div>
    </div>
  );
}

export default Chat;
