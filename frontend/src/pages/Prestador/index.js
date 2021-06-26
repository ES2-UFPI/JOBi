import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Prestador.css';
import {BsSearch, BsChevronLeft, BsChevronRight, BsFillInfoCircleFill, BsCheck, BsX} from "react-icons/bs"
import cardimage from '../../images/resized.jpg'
import Card from 'react-bootstrap/Card'
import { IconContext } from 'react-icons/lib';
import Button from 'react-bootstrap/Button'

function Prestador() {
    const [ users, setUsers ] = useState([]);
    const [ pesquisa, setPesquisa ] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
    }
    function handlePesquisa (event) {
        setPesquisa(event.target.value);
      }

    useEffect(()=>{
        async function getPrestadores (){
            const response = await axios.get('/prestador/select')
            
            console.log(response.data);

            setUsers(response.data);
            console.log(users);

            let obj = { 
                id: response.data.id,
                estrelas: response.data.estrelas
            }
               
            localStorage.setItem('userDataChat', JSON.stringify(obj));
            
        }

        getPrestadores();
    }, []);

    return (
    <IconContext.Provider value={{className:'icons-menu'}}>
      <div className="pag-prestador">
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
          <div className="cards">
              <Button variant="primary"><BsChevronLeft size='30px'/></Button>{' '}
              <div className="content-cards">
                    <div className="card">
                        <img
                            src = {cardimage}
                            className='card-img'
                            alt='card image'
                            />
                            <div className=' card-content'>
                                <h4>Nome da Vaga<BsFillInfoCircleFill size='20px'/></h4>
                                <h6>Empresa</h6>
                                <p size='3px'>Algum texto de exemplo rápido para desenvolver 
                                    o título do cartão e compor a maior parte do 
                                    conteúdo do cartão.
                                </p>
                            </div>
                    </div>
                    <div className="buttons-cards">
                        <Button variant="primary"><BsX size='30px' color='#C10000'/></Button>{' '}
                        <Button variant="primary"><BsCheck size='30px' color='#025E00'/></Button>{' '}
                    </div>
                </div>
                <Button variant="primary"><BsChevronRight size='30px'/></Button>{' '}
          </div>
      </div>
    </IconContext.Provider>
    );
  }
  
  export default Prestador;