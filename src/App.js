import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Home from "./components/Home";
import SingleCharacter from "./components/SingleCharacter";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Switch>
            <Route path="/characters/:characterLink">
              <SingleCharacter />
            </Route>
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer className="footer">
          <p>made by a muggle</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
