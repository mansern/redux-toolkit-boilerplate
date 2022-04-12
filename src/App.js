import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Post from "./components/Post";
import User from "./components/User";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/user" />
        <Route path="/post" component={Post} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
