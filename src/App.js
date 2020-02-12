import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CustomHeader from "./components/CustomHeader";
import InitPage from "./pages/InitPage";
import CreatePage from "./pages/CreatePage";
import ViewPage from "./pages/ViewPage";
import EditPage from "./pages/EditPage";
import UploadPage from "./pages/UploadPage";
import history from "./history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <CustomHeader />
        <Switch>
          <Route exact path="/" component={InitPage}></Route>
          <Route exact path="/new" component={CreatePage}></Route>
          <Route exact path="/edit/:id" component={EditPage}></Route>
          <Route exact path="/user/:id" component={ViewPage}></Route>
          <Route exact path="/upload" component={UploadPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
