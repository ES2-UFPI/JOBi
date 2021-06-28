import { Link, useLocation } from 'react-router-dom';
import './Navegation.css';
import {BsHouseDoor, BsBell, BsEnvelope, BsPerson} from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

function Navegation() {
    const location = useLocation().pathname;

    let data = localStorage.getItem('userData');
    data = JSON.parse(data);
    console.log(data.user.status);

    return (
        <IconContext.Provider value={{className:'icons-menu', size: '20px'}}>
    <div className= "navegation">
            <div className="logo">
                <h1>JOB<span>i</span></h1>
            </div>
            <div className="list">
                <div className="list-home">
                    <Link to={ (data.user.status === 1) ? `../prestador` : `../contratante`} className={ (location === "/contratante") || (location === "/prestador") ? "active" : ""}><BsHouseDoor/>Home</Link>
                </div>
                <div className="list-notifications">

                    <Link to="/"><BsBell/>Notificações</Link>
                </div>
                <div className="list-messages">
                    <Link to={ (data.user.status === 1) ? `../prestador/chat` : `../contratante/chat`} className={ (location === "/contratante/chat") || (location === "/prestador/chat") ? "active" : ""}><BsEnvelope/>Mensagens</Link>
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