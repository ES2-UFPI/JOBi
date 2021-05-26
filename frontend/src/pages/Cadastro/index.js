import './Cadastro.css';
import { useState } from "react";
import axios from '../../services/axios';

function Cadastro() {
    const [ nome, setNome ] = useState('');
    /*
    const [ senha, setSenha ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ descricao, setDescricao ] = useState('');
    const [ status, setStatus ] = useState('');
    const [ img_perfil, setImg_perfil ] = useState('');
    */

    function handleNomeChange (event) {
        setNome(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(nome);
        axios.post('contratante', {
            'nome': nome,
            'senha': 'teste',
            'email': 'teste@teste.com',      
            'telefone': 'testetesteaa',
            'endereco': 'teste',
            'descricao': 'teste',
            'status': 1
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

                <button type="submit">Criar conta</button>
            </form>
        </div>
    );
  }
  
  export default Cadastro;