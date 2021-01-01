import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Discover from "./Containers/Discover";
import Genre from "./Containers/Genres/Genre";
import Search from "./Containers/Search/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/discover" exact component={Discover}></Route>
          <Route
            path={process.env.PUBLIC_URL + "/genres/:name"}
            exact
            component={Genre}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/search/:searchName"}
            exact
            component={Search}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
