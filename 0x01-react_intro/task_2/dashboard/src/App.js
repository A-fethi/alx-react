import logo from './Holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label for="email">Email</label>
          <input type="email" id="email"/>
          <label for="password">Password</label>
          <input type="password" id="password"/>
          <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
