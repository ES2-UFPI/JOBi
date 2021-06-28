import React from 'react';

import './Input.css';
import {IoSendSharp} from "react-icons/io5";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Digite aqui..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />

    <button className="sendButton" onClick={e => sendMessage(e)}><IoSendSharp/></button>
  </form>
)

export default Input;