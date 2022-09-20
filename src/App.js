import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Movies from "./components/Movies";

//로딩 화면의 원리를 간단하게 알아보자.
function App(props) {
  return (
    <>
      <div>영화앱 만들기</div>
      <Movies></Movies>
    </>
  );
}
export default App;
