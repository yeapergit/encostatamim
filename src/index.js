import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Server, Model } from "miragejs";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

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
      firstName: "Jorge 1",
      lastName: "Ultimo 1",
      number: "123456",
      nif: "123"
    });
    server.create("socio", {
      id: 2,
      firstName: "Jorge 2",
      lastName: "Ultimo 2",
      number: "567889",
      nif: "456"
    });
    server.create("socio", {
      id: 3,
      firstName: "Jorge 3",
      lastName: "Ultimo 3",
      number: "546456",
      nif: "666"
    });
    server.create("socio", {
      id: 4,
      firstName: "Jorge 4",
      lastName: "Ultimo 4",
      number: "099099",
      nif: "777"
    });
    server.create("socio", {
      id: 5,
      firstName: "Jorge 5",
      lastName: "Ultimo 5",
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
