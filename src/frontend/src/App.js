import "./App.css";
import TeamPage from "./pages/TeamPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MatchPage from "./pages/MatchPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year" component={MatchPage}></Route>
          <Route exact path="/teams/:teamName" component={TeamPage}></Route>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
