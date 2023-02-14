import './App.css';
import Board from './components/Board/Board.js';
import Header from './components/Header/Header.js';
import Status from './components/Status/Status.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Status />
    </div>
  );
}

export default App;
