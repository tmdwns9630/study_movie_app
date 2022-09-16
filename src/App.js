import React from "react";

function Movie(props) {
  console.log(props);

  return (
    <>
      <hr></hr>
      <div>영화명 : {props.movieName}</div>
      <div>주연배우 : {props.actor}</div>
      <div>장르 : {props.genre}</div>

      <hr></hr>
    </>
  );
}

function App() {
  return (
    <React.Fragment>
      <h1>김나타 영화앱</h1>
      <Movie movieName="탑건-매버릭" actor="톰크루즈" genre="비행시뮬레이션" />
      <Movie movieName="스파이더맨 노웨이홈" actor="톰 홀랜드" genre="히어로" />
      <Movie movieName="좀비랜드 더블탭" actor="우디 해럴슨" genre="좀비" />
    </React.Fragment>
  );
}

export default App;
