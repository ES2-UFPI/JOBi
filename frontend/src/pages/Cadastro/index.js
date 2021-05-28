import './Cadastro.css';
import { useState } from "react";
import axios from '../../services/axios';

function Cadastro() {
    const [ nome, setNome ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ rsenha, setRSenha ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    //const [ descricao, setDescricao ] = useState('');
    //const [ status, setStatus ] = useState('');
    //const [ img_perfil, setImg_perfil ] = useState('');

    function handleNomeChange (event) {
        setNome(event.target.value);
    }

    function handleEmailChange (event) {
        setEmail(event.target.value);
    }

    function handleSenhaChange (event) {
        setSenha(event.target.value);
    }

    function handleRSenhaChange (event) {
        setRSenha(event.target.value);
    }

    function handleTelefoneChange (event) {
        setTelefone(event.target.value);
    }
    function handleEnderecoChange (event) {
        setEndereco(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post('contratante', {
            "nome": nome,
            "senha": "testeteste123",
            "email": email,      
            telefone: telefone,
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
        <div className="pagina2">
            <div className="titulos">
                <div className='titulo1'>
                    <h1>Cadastro</h1>
                </div>
                <div className='titulo2'>
                    <h1>Qual o seu objetivo no aplicativo? Ofertar vagas de emprego ou Procurar vagas?</h1>
                </div>
                
            </div>
            <div className="cadastro">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">
                        Nome:
                        <input
                            type="text"
                            value={nome}
                            onChange={handleNomeChange}
                            placeholder="Ex. Álvaro Campos"
                        />
                    </label>

                    <label htmlFor="email">
                        E-mail:
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Ex. mpg123@example.com"
                        />
                    </label>
                    <label htmlFor="senha">
                        Senha:
                        <input
                            type="password"
                            value={senha}
                            onChange={handleSenhaChange}
                            placeholder="Ex. Ash3FF23lkkjn55FACsd "
                        />
                    </label>
                    <label htmlFor="senha">
                        Redigite a Senha:
                        <input
                            type="password"
                            value={rsenha}
                            onChange={handleRSenhaChange}
                            placeholder="Ex. Ash3FF23lkkjn55FACsd "
                        />
                    </label>
                    <label htmlFor="telefone">
                        Telefone:
                        <input
                            type="text"
                            value={nome}
                            onChange={handleTelefoneChange}
                            placeholder="Ex. (00) 0 0000-0000"
                        />
                    </label>
                    <label htmlFor="endereço">
                        Endereço:
                        <input
                            type="text"
                            value={nome}
                            onChange={handleEnderecoChange}
                            placeholder="Ex. (00) 0 0000-0000"
                        />
                    </label>
                    <p>Já possui cadastro? Faça seu login!</p>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
  }
  
  export default Cadastro;