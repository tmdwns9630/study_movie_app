import React, { Fragment, useState } from "react";

function ClickCounter(props) {
  // let [카운터, set카운터] = useState(555);
  // //배열 1번이 변수, 2번이 1번 변수를 바꿀 수 있는 함수

  // function 증가함수() {
  //   console.log("증가 클릭");
  //   set카운터(카운터 + 1);

  //   setSecond(function (현재값) {
  //     return 현재값 + 1;
  //     //set변수 함수에는 콜백함수가 들어갈 수 있다.
  //   });
  // }

  // function 감소함수() {
  //   console.log("감소 클릭");
  // }

  let [second, setSecond] = useState(55);
  let [min, setMin] = useState(8);
  let [timerID, settimerID] = useState();
  console.log(`function App/second : ${second}`);
  // console.log(`timerID : ${timerID}`);

  function startUp() {
    const temp = setInterval(() => {
      //console.log("스타트버튼");
      if (second >= 60) {
        console.log("60초 경과");
        setSecond(0);
        setMin(0);
      } else {
        console.log(`function startUp/타이머 진행 중 : ${second}`);
        //setSecond(second+1);
        setSecond(function (현재값) {
          return 현재값 + 1;
          //set변수 함수에는 콜백함수가 들어갈 수 있다.
        });
      }
    }, 1000);
    settimerID(temp);
  }
  //timerID를 바로 넣지 않고, const temp에 넣은 다음에,
  //setTimerID에 temp를 넣어서 처리한다.

  function stopTimer() {
    console.log("타이머 종료");
    clearInterval(timerID);
  }
  return (
    <Fragment>
      <div className="container">
        <div className="TimeTitle">
          {props.title ? props.title : "클릭 카운터"}
        </div>
        {/* <div>Count : {카운터}</div>
        <button onClick={증가함수}>+1</button>
        <button>-1</button> */}
        <div className="TID">타이머 ID : {timerID}</div>
        <div>
          <span>{min}</span> <span> : </span>
          <span>{second}</span>
        </div>
        <button onClick={startUp}>start</button>
        <button onClick={stopTimer}>STOP</button>
      </div>
      <hr />
      <div>
        <div>현재 문제</div>
        <div>
          1. if문으로 60초 넘기면 1분으로 바꾸는 로직이 동작 안함
          <br />
          ㄴ이건 나중에 처리하기로 함.
          <br />
          2. stop 버튼의 로그는 출력 되는데 정작 setInterval은 정지 안됨
          <br />
          ㄴ몰?루.
          <br />
        </div>
      </div>
    </Fragment>
  );
}
export default ClickCounter;

//1. if문으로 60초 넘기면 1분으로 바꾸는 로직이 동작 안함
//2. stop 버튼의 로그는 출력 되는데 정작 setInterval은 정지 안됨
