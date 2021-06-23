import './App.css';

import history from './services/history';
import Header from './components/Header';
import Navegation from './components/Navegation/Navegation';
import Routes from './routes';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navegation/>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
