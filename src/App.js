import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CustomHeader from "./components/CustomHeader";
import InitPage from "./pages/InitPage";
import CreatePage from "./pages/CreatePage";
import ViewPage from "./pages/ViewPage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
import history from "./history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <CustomHeader />
        <Switch>
          <Route path="/" exact component={InitPage}></Route>
          <Route path="/list" exact component={ListPage}></Route>
          <Route path="/new" exact component={CreatePage}></Route>
          <Route path="/edit/:id" exact component={EditPage}></Route>
          <Route path="/users/:id" exact component={ViewPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
