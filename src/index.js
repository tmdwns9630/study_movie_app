import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Sunmoon from "./Sunmoon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div id="one">
    <App />
    <Sunmoon />
  </div>
  //부모 태그를 적당히 만들어서 감싸줘야한다.
);
