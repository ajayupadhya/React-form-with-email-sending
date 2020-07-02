import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./screens/main";
import Employ from "./component/employ";
import Enquiry from "./component/enq";
import LoginScreen from "./screens/loginscreen";

function App() {
  const [state, setstate] = useState([]);

  const getData = (enquiry) => {
    let data = state;
    data.push(enquiry);
    setstate(data);

    localStorage.setItem("data", JSON.stringify(state));
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Employ />
          </Route>
          <Route exact path="/enquiry">
            <Enquiry data={(enquiry) => getData(enquiry)} />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/home">
            <Main />
          </Route>
          <Route path="/employ">
            <LoginScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
