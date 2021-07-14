import './Notificacao.css';
import { useState } from "react";
import axios from '../../services/axios';
import { Link, useHistory } from 'react-router-dom';
import  work_chat  from '../../images/work_chat2.svg';
import Navegation from '../../components/Navegation/Navegation';
import {BsSearch, BsFillInfoCircleFill,BsFillExclamationTriangleFill, BsTrash,BsPlusCircle, BsCheck, BsX} from "react-icons/bs"
import cardimage from '../../images/resized.jpg'

function Notificacao(){
    const [ notificacoes, setNotificacao ] = useState([{id: 0, nome: "Estágio em empresa"},{id: 1, nome: "Estágio em empresa"},
    {id: 2, nome: "Estágio em empresa"}, {id: 3, nome: "Estágio em empresa"}, {id: 4, nome: "Estágio em empresa"}, 
    {id: 5, nome: "Estágio em empresa"}, {id: 6, nome: "Estágio em empresa"}]);
    const [ pesquisa, setPesquisa ] = useState('');
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
            <div className='corpo-not'>
            {notificacoes.map(notificacao => (
                <div className='card-content-notificacao'>
                    <div class="img-div-notificacao">
                        <BsFillExclamationTriangleFill size='30px'/>
                    </div>
                    <div className="content-card-notification">
                        <div className="info-button-notificacao"><h4>Titulo Mudança</h4><a>Data/Horario</a></div>
                        <p>Algum texto de exemplo rápido para desenvolver 
                            o título do cartão e compor a maior parte do 
                            conteúdo do cartão.
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
      );
    }
      
    export default Notificacao;