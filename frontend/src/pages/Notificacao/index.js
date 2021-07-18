import './Notificacao.css';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import { Link, useHistory } from 'react-router-dom';
import  work_chat  from '../../images/work_chat2.svg';
import Navegation from '../../components/Navegation/Navegation';
import {BsSearch, BsFillInfoCircleFill,BsFillExclamationTriangleFill, BsTrash,BsPlusCircle, BsCheck, BsX} from "react-icons/bs"
import cardimage from '../../images/resized.jpg'

function Notificacao(){
    const [ notifications, setNotifications ] = useState([]);
    const [ notificacoes, setNotificacao ] = useState([{id: 0, nome: "Estágio em empresa"},{id: 1, nome: "Estágio em empresa"},
    {id: 2, nome: "Estágio em empresa"}, {id: 3, nome: "Estágio em empresa"}, {id: 4, nome: "Estágio em empresa"}, 
    {id: 5, nome: "Estágio em empresa"}, {id: 6, nome: "Estágio em empresa"}]);
    const [ pesquisa, setPesquisa ] = useState('');
    
    useEffect(()=>{

        async function setNotificacao() {
            let data = localStorage.getItem('userData');
            data = JSON.parse(data);
            console.log(data.user.id)
            const response = await axios.get(`/notificacao/${data.user.id}`)
            const res = await axios.put(`/notificacao/${data.user.id}`)
            
            console.log(res.data);
            console.log(res.data);

            setNotifications(response.data);
            console.log(notifications);
    }
        setNotificacao();
    }, []);

    
    
    function handleSubmit(event) {
        event.preventDefault();
    }
    function handlePesquisa (event) {
        setPesquisa(event.target.value);
      }
    return (
        <div className="pag-notificacao"> 
        <Navegation/>
            <div className='titulo-not'>
                <h1>Notificação</h1>
            </div>
            {notifications!=null ?
                <div className='corpo-not'>

            {notifications.map(notificacao => (
                <div key={notificacao.id} className='card-content-notificacao'>
                    <div className="img-div-notificacao">
                        <BsFillExclamationTriangleFill size='30px'/>
                    </div>
                    <div className="content-card-notification">
                        <div className="info-button-notificacao"><h4>{notificacao.titulo}</h4><a>Data/Horario</a></div>
                        <p>{notificacao.descricao}</p>
                    </div>
                </div>
                ))}
            </div> :
            <div></div>}
            
        </div>
      );
    }
      
    export default Notificacao;