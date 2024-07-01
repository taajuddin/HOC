import './App.css';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
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
