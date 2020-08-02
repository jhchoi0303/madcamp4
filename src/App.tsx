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

import Post from "./view/post";

import Test from "./view/test";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/madcamp4" exact component={Main} />
        <Route path="/madcamp4/menu1" exact component={Menu1} />
        <Route path="/madcamp4/menu2" exact component={Menu2} />
        <Route path="/madcamp4/menu3" exact component={Menu3} />
        <Route path="/madcamp4/menu4" exact component={Menu4} />
        <Route path="/madcamp4/menu11" exact component={Menu11} />
        <Route path="/madcamp4/post" exact component={Post} />
        <Route path="/input" exact component={Test} />
        <Route path="/input/:name" exact component={Test} />
        <Redirect from="*" to="/madcamp4" />
      </Switch>
    </Router>
  );
}

export default App;
