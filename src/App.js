import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AboutMain from "./Components/AboutMain/AboutMain/AboutMain";
import Blog from "./Components/Blog/Blog";
import ContactMain from "./Components/Contact/ContactMain/ContactMain";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import ProjectMain from "./Components/Project/ProjectMain/ProjectMain";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <ProjectMain></ProjectMain>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <AboutMain/>
          </Route>
          <Route path="/contact">
            <ContactMain></ContactMain>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
