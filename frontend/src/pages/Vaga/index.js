import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Vaga.css';
import {BsXSquare, BsFillCaretDownFill, BsEnvelope, BsXCircle, BsCheck} from "react-icons/bs"
import cardimage from '../../images/resized.jpg'
import { IconContext } from 'react-icons/lib';
import Button from 'react-bootstrap/Button'
import queryString from 'query-string';
import io from "socket.io-client";

import Navegation from '../../components/Navegation/Navegation';

function Vaga() {
    const [ candidatos, setCandidatos ] = useState([]);
    const [ vaga, setVaga ] = useState([]);
    const [ pesquisa, setPesquisa ] = useState('');
    var location = useLocation();
    const history = useHistory();
    console.log("Location: ", location);

    const { categorias } = require('../../extra_data/categorias.json');
    const imagem = require('../../extra_data/categorias.json');

    function handleSubmit(event){
        event.preventDefault();
    }

    function handlePesquisa (event){
        setPesquisa(event.target.value);
    }

    async function getVaga(){
        const { id } = queryString.parse(location.search);
        console.log("ID da vaga: ", id);

        let route = `/vaga/vaga/${id}`;
        const response = await axios.get(route);
        
        console.log("Resposta da Vaga: ", response.data);

        setVaga(response.data);
        console.log(vaga);
    }

    async function getCandidatos(){
        const { id } = queryString.parse(location.search);
        console.log("ID da vaga: ", id);

        let route = `/candidato/vaga/${id}`;
        const response = await axios.get(route);
        
        console.log("Resposta: ", response.data);

        setCandidatos(response.data);
        console.log(candidatos);
    }
    
    useEffect(()=>{
        getVaga();

        getCandidatos();

    }, []);

    const ENDPOINT = 'http://localhost:3333/';
    let socket;

    function iniciarChat(event, id_user, prestador_nome){
        socket = io(ENDPOINT, { autoConnect: true });
        console.log("XXXXXXXXXXXXXXXXX", id_user);

        let data = localStorage.getItem('userData');
        data = JSON.parse(data);
        console.log(data);

        var id_p = id_user;
        console.log("YYYYYYYY", data.typeUser.id);
        var id_c = data.typeUser.id;

        //Evento emitido quando é iniciado um chat
        socket.emit('iniciar_chat', { id_p: id_p, id_c: id_c, nome_c: data.user.nome, nome_p: prestador_nome}, ({ message }) => {
            console.log(message)
        });

        let route = `../contratante/chat?id=${id_user}&nome=${prestador_nome}`;
        history.push(route);
    }
    

    return (
    <IconContext.Provider value={{className:'icons-menu'}}>
    <div className="pag-vaga">
        <Link to="/contratante" className="link"><BsXSquare size="30px" className="fechar"></BsXSquare></Link>
      <div className="vaga-card">
        <div className="vaga-img">
            <img 
                width="300px"
                height= "300px"
                src = {`../images/imagens_vagas/${vaga.imagem}`}
                className='vag-img'
                alt='card vaga'
            />
        </div>
        <div className="vaga-dados">
            <div className="dado-linha">
                <div className="dado">Título: </div>
                <div className="valor">{vaga.titulo}</div>
                <div className="dado">Categoria: </div>
                <div className="valor">
                    {categorias.map(cat => (
                        (cat.value === vaga.categoria) ? cat.label : ''
                    ))}
                </div>
            </div>

            <div className="dado-linha">
                <div className="dado">Nº Vagas: </div>
                <div className="valor">{vaga.num_vagas}</div>
                <div className="dado">Horario: </div>
                <div className="valor">{vaga.horario}</div>
            </div>

            <div className="dado-linha">
                <div className="dado">Cidade: </div>
                <div className="valor">{vaga.cidade}</div>
                <div className="dado">Estado: </div>
                <div className="valor">{vaga.estado}</div>
            </div>
            <div className="dado-linha">
                <div className="dado">Interesses: </div>
                <div className="valor">{vaga.interesses}</div>
                <div className="dado">Status: </div>
                <div className="valor">
                    {(vaga.status === 1) ? <span className="open">Aberta</span> : <span className="closed">Fechada</span>}
                </div>
            </div>

            <div className="dado-linha">
                <div className="dado">Descrição: </div>
                <div className="valor-descricao-oculta"></div>
                <div className="dado">Remuneração: </div>
                <div className="valor">{vaga.remuneracao}</div>
            </div>

            <div className="descricao-vaga">{vaga.descricao}</div>
            
        </div>
        
      </div>

        <div className="butoes-vagas">
            <div className="btn-excluir"><Button>Excluir</Button></div>
            <div className="btn-alterar"><Button>Alterar</Button></div>
            <div className="btn-salvar"><Button>Salvar</Button></div>
        </div>

      <div className="candidatos">
            <div className="accordion">
                
                <div className="accordion__item">
                    <div className="accordion__header">
                        <div className="accordion__toggle">
                            <BsFillCaretDownFill></BsFillCaretDownFill>
                        </div>
                        
                        <div className="accordion__title">
                            Candidatos ({candidatos.length})
                        </div>
                    </div>
                    
                    <div className="accordion__content">
                        {candidatos.map(candidato => (
                        <div key={String(candidato.id)} className="candidato-dado">
                            <div className="circle">
                                <img src="https://i.stack.imgur.com/atUuf.png" alt="Usuário"/>
                            </div>
                            <p className="nome-candidato">{candidato.nome}</p>
                            
                            <div className="candidato-butoes">
                                <button className="btn-aprovar">
                                    <BsCheck size='25px' className="check-aprovar"></BsCheck>
                                </button>
                                <button onClick={(e) => iniciarChat(e, candidato.prestador_id, candidato.nome)} className="btn-iniciar-chat">
                                    <BsEnvelope size="25px" className="envelope"></BsEnvelope>
                                </button>
                                <button className="btn-desaprovar">
                                    <BsXCircle size="25px" className="x-desaprovar"></BsXCircle>
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>  
                </div>
            </div>
        </div>
    </div>
      
    </IconContext.Provider>
    );
  }
  
  export default Vaga;