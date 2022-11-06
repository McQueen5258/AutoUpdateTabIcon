import logo from "./logo.svg";
import "./App.css";
import Page from "./components/Page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/PageA">
          <Page text="A" />
        </Route>
        <Route path="/PageB">
          <Page text="B" />
        </Route>
        <Route path="/PageC">
          <Page text="C" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
