import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yay! my first react app is up.</h1>
        <Button />
      </header>
    </div>
  );
}

function Button() {
  function wishme() {
    alert("Congratulations!!!");
  }
  return (
    <button onClick={wishme} className="button">
      Wish me
    </button>
  );
}

export default App;
