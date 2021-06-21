import { Link } from 'react-router-dom';
import './Navegation.css';
import {BsHouseDoor} from "react-icons/bs";
import {BsBell} from "react-icons/bs";
import {BsEnvelope} from "react-icons/bs";
import {BsPerson} from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

function Navegation() {
    return (
        <IconContext.Provider value={{className:'icons-menu', size: '20px'}}>
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
    </IconContext.Provider>
    );
}

export default Navegation;