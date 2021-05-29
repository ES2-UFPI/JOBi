import './Chat_temp.css';
import React, {useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = ({ location }) => {
      const API = 'localhost:3333'
      useEffect(()=>{
        const data = queryString.parse(location.search);
        console.log(data);

        var socket = io(API, { autoConnect: true })

      //Evento emitido quando é iniciado um chat
       socket.emit('iniciar_chat', { id_p: 2, id_c: 4 }, ({ message }) => {
          console.log(message)
        });

        return() => {
          socket.emit('disconnect');
          socket.off();
        }
      });

    return (
      <h1>Chat</h1>
    );
  }
  
  export default Chat;