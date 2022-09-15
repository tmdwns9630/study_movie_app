import React from "react";
import Sunmoon from "./Sunmoon";

const 학생정보 = [
  { name: "최승준", 학번: "2016244084" },
  { name: "최승1", 학번: "2018244084" },
  { name: "최승2", 학번: "2019244084" },
  { name: "승준3", 학번: "2010244084" },
  { name: "승준4", 학번: "2015244084" },
];
function App() {
  return (
    <React.Fragment>
      <h1 id="one">선문대학교</h1>
      {/* JSX에서 중괄호를 치면 거기서부터는 자바스크립트 문법이 된다. */}
      {학생정보.map((ele, idx, arr) => {
        //console.log(`idx : ${idx}, 이름 : ${ele.name}, 학번 : ${ele.학번}`);
        return (
          <Sunmoon
            name={ele.name}
            학번={ele.학번}
            마이월드="JTBSC"
            페이버릿="퓨처"
          />
        );
      })}
      <Sunmoon name="최승준" 학번="2016244084" />
    </React.Fragment>
  );
}

export default App;
