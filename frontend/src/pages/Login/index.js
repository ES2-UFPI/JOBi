import './Login.css';
import { useState } from "react";
import axios from '../../services/axios';

function Login() {
  const [ email, setNome ] = useState('');
  const [ senha, setSenha ] = useState('');
  function handleEmailChange (event) {
    setNome(event.target.value);
  }

  function handleSenhaChange (event) {
    setSenha(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    axios.post('contratante', {
        "nome": email,
        "senha": "testeteste123",
        "email": senha,      
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

    alert('Fazendo login ...: ' + email);
}
return (
<div className="pagina"> 
  <div className="informe">
  <h1>JOB<span>i</span>:</h1>
  <h2>Trabalhe do seu jeito...</h2>
  </div>
  <div className="login">
      <hr/>
      <h1>Faça seu login:</h1>

      <form onSubmit={handleSubmit}>
          <label htmlFor="Email">
              <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Seu E-mail"
              />
          </label>

          <label htmlFor="Senha">
              <input
                  type="password"
                  value={senha}
                  onChange={handleSenhaChange}
                  placeholder="Sua Senha"
              />
          </label>

          <button type="submit">Entrar</button>
      </form>
      <p>Ainda não faz parte? Cadastre-se agora!</p>
      </div>

</div>
);
  }
  
  export default Login;