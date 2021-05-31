import './Chat_temp.css';
import React, {useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Messages from '../../components/Messages/Messages';
import InfoBar from '../../components/InfoBar/InfoBar';
import Input from '../../components/Input/Input';

const Chat = ({ location }) => {
      const { id } = queryString.parse(location.search);
      console.log(id);

      let data = localStorage.getItem('userData');
      data = JSON.parse(data);
      console.log(data);
      
      const [message, setMessage] = useState('');
      const [messages, setMessages] = useState([]);
      
      var id_p = 0;
      var id_c = 0;
      var isPrest = true;

      if(data.status === 1){
        id_p = data.typeUser.id;
        id_c = id;
        isPrest = true;
      }else{
        id_p = id;
        id_c = data.typeUser.id;
        isPrest = false;
      }

      const API = 'localhost:3333'

      var socket = io(API, { autoConnect: true })

      //Evento emitido quando é iniciado um chat
       socket.emit('iniciar_chat', { id_p: id_p, id_c: id_c }, ({ message }) => {
          console.log(message)
        });

      useEffect(()=>{
        //const data = queryString.parse(location.search);
        // /chat?id_c=4&&id_p=2
        //console.log(data);
        //
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
          console.log(message)
        });



        
        //socket.emit('enviar_mensagem', { id_p: 2, id_c: 4, texto: 'balanad', isPrest: true }, ({ message }) => {
          //console.log(message)
       // });

        //return() => {
         // socket.emit('disconnect');
         // socket.off();
        //}
      }, []);

      const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('enviar_mensagem', { id_p: id_p, id_c: id_c, texto: message, isPrest: isPrest }, () => setMessage(''));
        }
      }

    return (
      <div className="outerContainer">
      <div className="container">
          <InfoBar />
          <Messages messages={messages} name={data.typeUser.id} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      
    </div>
    );
  }
  
  export default Chat;