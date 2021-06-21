import './Chat_p.css';
import { Link, useLocation } from "react-router-dom";

import Chat from '../../components/Chats/Chat/Chat';
import {BsHouseDoor} from "react-icons/bs";
import {BsBell} from "react-icons/bs";
import {BsEnvelope} from "react-icons/bs";
import {BsPerson} from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

function Chat_p() {
    return (
        <IconContext.Provider value={{className:'icons-menu', size: '20px'}}>
        <div className="chat_p">
            <div className= "navegation">
            <div className="logo">
                <h1>JOB<span>i</span></h1>
            </div>
            <div className="list">
                <div className="list-home">
                    <Link to="/"><BsHouseDoor/>Home</Link>
                </div>
                <div className="list-notifications">

                    <Link to="/"><BsBell/>Notificações</Link>
                </div>
                <div className="list-messages">
                    <Link to="/"><BsEnvelope/>Mensagens</Link>
                </div>
                <div className="list-profile">
                    <Link to="/"><BsPerson/>Perfil</Link>
                </div>
            </div>

            </div>

            <div className= "conversations">
            <div className="list-conversations">
                <div className="list-users">
                    <Link to="/">
                    <div className="circle">
                        <img src="https://i.stack.imgur.com/atUuf.png" />
                    </div>
                    <p>User 1</p>
                    </Link>
                </div>
                <div className="list-users">
                    <Link to="/">
                    <div className="circle">
                        <img src="https://i.stack.imgur.com/atUuf.png" />
                    </div>
                    <p>User 2</p>
                    </Link>
                </div>
                <div className="list-users">
                    <Link to="/">
                    <div className="circle">
                        <img src="https://i.stack.imgur.com/atUuf.png" />
                    </div>
                    <p>User 3</p>
                    </Link>
                </div>
                <div className="list-users">
                    <Link to="/">
                    <div className="circle">
                        <img src="https://i.stack.imgur.com/atUuf.png" />
                    </div>
                    <p>User 4</p>
                    </Link>
                </div>
            </div>

            </div>

            <div className="chat">
                <Chat location={useLocation()}/>
            </div>
        </div>
        </IconContext.Provider>  
    );
}
  
export default Chat_p;