import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  axios.post(` https://2iz0fgkywi.execute-api.ap-southeast-2.amazonaws.com/prod/ride`)
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
