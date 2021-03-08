import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FriendDetail from "./Components/FriendDetail/FriendDetail";
import Home from './Components/Home/Home';
import NoMatch from "./Components/NoMatch/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/friend/:friendId">
              <FriendDetail></FriendDetail>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="*">
            <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
