import './Cadastro.css';
import { useState } from "react";
import axios from '../../services/axios';

function Cadastro() {
    const [ nome, setNome ] = useState('');
    //const [ senha, setSenha ] = useState('');
    const [ email, setEmail ] = useState('');
    /*
    const [ telefone, setTelefone ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ descricao, setDescricao ] = useState('');
    const [ status, setStatus ] = useState('');
    const [ img_perfil, setImg_perfil ] = useState('');
    */

    function handleNomeChange (event) {
        setNome(event.target.value);
    }

    function handleEmailChange (event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post('contratante', {
            "nome": nome,
            "senha": "testeteste123",
            "email": email,      
            "telefone": "testeteste",
            "endereco": "teste",
            "descricao": "teste",
            "status": 1
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });  

        alert('Cadastro enviado: ' + nome);
    }

    return (
        <div className="cadastro">
            <h1>Cadastro</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={handleNomeChange}
                        placeholder="Seu nome"
                    />
                </label>

                <label htmlFor="email">
                    E-mail:
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Seu e-mail"
                    />
                </label>

                <button type="submit">Criar conta</button>
            </form>
        </div>
    );
  }
  
  export default Cadastro;