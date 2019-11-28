import React from "react";
import { hydrate } from "react-dom";
import App from "./containers/App";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

hydrate(<App />, document.getElementById("root"));
