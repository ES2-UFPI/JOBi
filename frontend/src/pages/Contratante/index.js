import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Contratante.css';
import {BsSearch, BsFillInfoCircleFill, BsTrash,BsPlusCircle, BsCheck, BsX} from "react-icons/bs"
import cardimage from '../../images/resized.jpg'
import Card from 'react-bootstrap/Card'
import { IconContext } from 'react-icons/lib';
import Button from 'react-bootstrap/Button'
//import 'bootstrap/dist/css/bootstrap.min.css';

import Navegation from '../../components/Navegation/Navegation';

function Contratante() {
    const [ vagas, setVagas ] = useState([]);
    const [ pesquisa, setPesquisa ] = useState('');

    const { categorias } = require('../../extra_data/categorias.json');

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handlePesquisa(event) {
        setPesquisa(event.target.value);
    }

    function handleClickLixoIcon(vaga_id) {
        let route = `/vaga/${vaga_id}`;

        const response = axios.delete(route);
        console.log("Dentro do delete!")
    }
    
    useEffect(()=>{
        async function getVagas(){

            let data = localStorage.getItem('userData');
            data = JSON.parse(data);
            
            let route = `/vaga/${data.typeUser.id}`;

            const response = await axios.get(route);
            
            console.log(response.data);

            setVagas(response.data);
            console.log(vagas);
            
        }

        getVagas();
        
    }, []);

    return (
    <IconContext.Provider value={{className:'icons-menu'}}>
      <div className="pag-contratante">
      <Navegation/>  
          <div className="search">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Pesquisa">
                        <input
                            type="text"
                            value={pesquisa}
                            onChange={handlePesquisa}
                            placeholder="Pesquisar"
                        />
                    </label>
                    <button type="submit"><BsSearch size='15px'/></button>
                </form>
          </div>

          <div>
            <Link to="contratante/cadastrar_vaga" className="link"><BsPlusCircle className="nova-vaga" size='35px'/></Link>
          </div>

          <div className="cards-contratante">
          {vagas.map(vaga => (
                <div key={String(vaga.id)} className="content-cards-contratante">

                    <div className="img-div-contratante">
                        <Link to={`/contratante/vaga?id=${vaga.id}`} className="link-vaga">
                            <img 
                                width="150px"
                                height= "150px"
                                src = {`images/imagens_vagas/${vaga.imagem}`}
                                className='card-img'
                                alt='card vaga'
                            />
                        </Link>
                    </div>

                    <div className='card-content-contratante'>
                        <div className="info-button-contratante">
                            <Link to={`/contratante/vaga?id=${vaga.id}`} className="link-vaga">
                                <h4>{vaga.titulo}</h4>
                            </Link>
                            
                            <p>{vaga.updatedAt.split('T')[0].split('-').reverse().join('/')}</p>
                        
                            <BsTrash className="lixo-icon" type="button" onClick = { ( ) => handleClickLixoIcon(vaga.id) }/>
                        </div>

                        <div className="info-vaga">
                            <p className="categoria-vaga">Categoria: {categorias.map(cat => (
                                (cat.value === vaga.categoria) ? cat.label : ''
                            ))}
                            </p>

                            <p className="status-vaga">Status: <span>Aberta {/*vaga.status*/} </span></p>
                        </div>
                        
                        <p className="resumo-vaga">{vaga.descricao.split('.')[0] + '...'}</p>
                    </div>

                </div>
            ))}
          </div>
      </div>
      
    </IconContext.Provider>
    );
  }
  
  export default Contratante;