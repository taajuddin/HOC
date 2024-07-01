import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
function App() {
  return (
    <div className="App">
      <h1>Higher Order Component</h1>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
