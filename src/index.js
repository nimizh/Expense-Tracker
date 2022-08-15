import React from "react";
import reactDom from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App";
import { Provider } from "./context/context";
import "./index.css";

reactDom.render(
  <SpeechProvider appId="62c6be39-13b4-41f2-be0b-5c4cf1890bb3" language="en-US">
    <Provider>
      <App />
    </Provider>
    ,
  </SpeechProvider>,
  document.getElementById("root")
);
