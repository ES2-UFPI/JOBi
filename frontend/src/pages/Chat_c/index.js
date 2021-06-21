import './Chat_c.css';
import { Link, useLocation } from "react-router-dom";

import Chat from '../../components/Chats/Chat/Chat';
import {MdSearch} from "react-icons/md";
import { IconContext } from 'react-icons/lib';

function Chat_c() {
    return (
        <IconContext.Provider value={{className:'icons-menu', size: '20px'}}>
        <div className="chat_c">

            <div className= "conversations">
                <form className="form-search">
                    <input
                    className="input-search"
                    type="text"
                    placeholder="Pesquisar"
                    />
                    <button className="searchButton"><MdSearch/></button>
                </form>

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
  
export default Chat_c;