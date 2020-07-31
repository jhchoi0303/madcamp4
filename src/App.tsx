import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Main from "./view/main";
import Menu1 from "./view/menu1";
import Menu2 from "./view/menu2";
import Menu3 from "./view/menu3";
import Menu4 from "./view/menu4";
import Menu11 from "./view/menu1.1";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/menu1" exact component={Menu1} />
        <Route path="/menu2" exact component={Menu2} />
        <Route path="/menu3" exact component={Menu3} />
        <Route path="/menu4" exact component={Menu4} />
        <Route path="/menu11" exact component={Menu11} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
