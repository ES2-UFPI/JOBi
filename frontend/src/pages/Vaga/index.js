import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Vaga.css';
import {BsXSquare, BsFillCaretDownFill, BsEnvelope, BsXCircle} from "react-icons/bs"
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
    console.log("Lacation: ", location);

    function handleSubmit(event){
        event.preventDefault();
    }

    function handlePesquisa (event){
        setPesquisa(event.target.value);
    }

    async function getVaga(){
        const { id } = queryString.parse(location.search);
        console.log("ID da vaga: ", id);

        let route = `/vaga/${1}`;
        const response = await axios.get(route);
        
        console.log("Resposta da Vaga: ", response.data);

        setVaga(response.data);
        console.log(vaga);
    }

    async function getCandidatos(){
        const { id } = queryString.parse(location.search);
        console.log("ID da vaga: ", id);

        let route = `/candidato/vaga/${1}`;
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

    function iniciarChat(event, id_user){
        socket = io(ENDPOINT, { autoConnect: true });
        console.log("XXXXXXXXXXXXXXXXX", id_user);

        let data = localStorage.getItem('userData');
        data = JSON.parse(data);
        console.log(data);

        var id_p = id_user;
        console.log("YYYYYYYY", data.typeUser.id);
        var id_c = data.typeUser.id;

        //Evento emitido quando é iniciado um chat
        socket.emit('iniciar_chat', { id_p: id_p, id_c: id_c }, ({ message }) => {
            console.log(message)
        });

        let route = `../contratante/chat?id=${id_user}`;
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
                src = {cardimage}
                className='vag-img'
                alt='card vaga'
            />
        </div>
        <div className="vaga-dados">
            <div className="dado-linha">
                <div className="dado">Nome: </div>
                <div className="valor">Estágio UFPI</div>
                <div className="dado">Categoria: </div>
                <div className="valor">Tecnologia</div>
            </div>

            <div className="dado-linha">
                <div className="dado">Nº Vagas: </div>
                <div className="valor">3</div>
                <div className="dado">Horario: </div>
                <div className="valor">8h ás 12h</div>
            </div>

            <div className="dado-linha">
                <div className="dado">Cidade: </div>
                <div className="valor">Teresina</div>
                <div className="dado">Estado: </div>
                <div className="valor">Piauí</div>
            </div>
            <div className="dado-linha">
                <div className="dado">Interesses: </div>
                <div className="valor">Estágio UFPI</div>
                <div className="dado">Status: </div>
                <div className="valor">Estágio UFPI</div>
            </div>

            <div className="dado-linha">
                <div className="dado">Descrição: </div>
                <div className="valor-descricao-oculta"></div>
                <div className="dado">Remuneração: </div>
                <div className="valor">Estágio UFPI</div>
            </div>

            <div className="descricao-vaga">
                Testando descricao Testando descricao Testando descricao Testando descricao Testando descricao ando descricao Testando descricao Testando descricao Testando descricao 
                Testando descricao Testando descricao Testando descricao Testando descricao Testando 
                descricao Testando descricao Testando descricao Testando descricao 
            </div>
            
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
                        <div className="candidato-dado">
                            <div className="circle">
                                <img src="https://i.stack.imgur.com/atUuf.png" alt="Usuário"/>
                            </div>
                            <div className="nome-candidato">Nome(ID){candidato.prestador_id}</div>
                            
                            <div className="candidato-butoes">
                                <button onClick={(e) => iniciarChat(e, candidato.prestador_id)} className="btn-iniciar-chat">
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