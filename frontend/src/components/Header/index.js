import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
        <Link to="cadastro">Cadastro</Link>
        <Link to="user">Usuário</Link>
        <Link to="sobre">Sobre</Link>
        <Link to="contato">Contato</Link>
      </div>    
    );
  }
  
  export default Header;