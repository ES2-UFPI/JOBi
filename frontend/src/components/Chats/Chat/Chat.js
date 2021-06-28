import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

const ENDPOINT = 'http://localhost:3333/';

let socket;
var id_p = 0;
var id_c = 0;
var isPrest = true;

const Chat = ({ location }) => {
  const [name, setName] = useState(0);
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { id } = queryString.parse(location.search);
    console.log(id);
    socket = io(ENDPOINT, { autoConnect: true });

    let data = localStorage.getItem('userData');
    data = JSON.parse(data);
    console.log(data);

    setName(data.typeUser.id);

    if(data.user.status === 1){
      id_p = data.typeUser.id;
      id_c = parseInt(id);
      isPrest = true;
    }else{
      id_p = parseInt(id);
      id_c = data.typeUser.id;
      isPrest = false;
    }
    
    socket.emit('entrar_sala', { id_p: id_p, id_c: id_c });

  }, [ENDPOINT, location]);
  

  useEffect(() => {
    socket.on('message', message => {
      console.log(message);
      setMessages(messages => [ ...messages, message ]);
    });
    
    /*
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    */
  }, []);


  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('enviar_mensagem', { id_p: id_p, id_c: id_c, texto: message, isPrest: isPrest }, () => setMessage(''));
    }

    setMessage('');
  }

  return (
    <div className="outerContainer">
      <div className="container-chat">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
