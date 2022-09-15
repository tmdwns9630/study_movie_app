import React from "react";
import Food from "./Food";

const favArr = ["김치", "볶음", "파전"];

function App() {
  return (
    <React.Fragment>
      <h1 id="one">좋아하는 음식 목록</h1>
      <ul>
        {favArr.map((ele) => {
          return (
            <li>
              <Food fav={ele} />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default App;
