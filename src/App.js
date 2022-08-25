import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary app</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/anastasiia-vahina-3524a1247/"
          target="_blank"
          rel="noreferrer"
        >
          Anastasiia Vahina{" "}
        </a>
        and is{" "}
        <a
          href="https://github.com/ana777stasia/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
