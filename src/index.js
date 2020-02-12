import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Server, Model } from "miragejs";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

//MockAPI
new Server({
  models: {
    socio: Model
  },
  routes() {
    this.namespace = "/api";

    this.get("/socios");
    this.get("/socios/:id");
  },

  seeds(server) {
    server.create("socio", {
      id: 1,
      name: "Jorge 1",
      number: "123456",
      nif: "123"
    });
    server.create("socio", {
      id: 2,
      name: "Jorge 2",
      number: "567889",
      nif: "456"
    });
    server.create("socio", {
      id: 3,
      name: "Jorge 3",
      number: "546456",
      nif: "666"
    });
    server.create("socio", {
      id: 4,
      name: "Jorge 4",
      number: "099099",
      nif: "777"
    });
    server.create("socio", {
      id: 5,
      name: "Jorge 5",
      number: "666666",
      nif: "188"
    });
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
