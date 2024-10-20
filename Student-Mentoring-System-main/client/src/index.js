import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

// import "tw-elements";
import reducers from "./reducers/index";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
Kommunicate.init("2691e71639dd5bc66b0aef4d3712ad18a", {
    automaticChatOpenOnNavigation: true,
    popupWidget: true
  });

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
