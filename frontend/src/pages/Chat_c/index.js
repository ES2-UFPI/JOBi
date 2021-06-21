import './Chat_c.css';
import { useLocation } from "react-router-dom";

import Chat from '../../components/Chats/Chat/Chat';

function Chat_c() {
    return (
        <div className="Chat_c">
            <Chat location={useLocation()}/>
        </div>
    );
}
  
export default Chat_c;