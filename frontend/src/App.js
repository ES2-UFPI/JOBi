import './App.css';

import Main from './components/Main';

import history from './services/history';
import Header from './components/Header';
import Routes from './routes';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Main />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
