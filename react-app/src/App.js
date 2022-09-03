import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>환영합니다.</h1>
          이곳은 박상우의 React 학습 페이지입니다.
        </p>

        <p>
          <code>src/App.js</code> 를 수정하고 저장하여 출력합니다.
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
