import React from "react";
// import Movies from "./components/Movies";

//함수 컴포넌트
// function App() {
//   return <div></div>;
// }

// ↑↓ 위 아래는 의외로 같다.
//App(){} === render(){]로 볼 수 있다.

// //클래스 컴포넌트 방식
// class App extends React.Component {
//     render() {
//         return <div>클래스 컴포넌트</div>
//     }
// }

class App extends React.Component {
  //   state = {
  //     count: -1,
  //   }; //일단 객체로 보자

  //   증가함수 = () => {
  //     console.log("멤버 증가함수 호출됨");
  //     this.state.count = -12;
  //     console.log(this.state);
  //   };

  //   감소함수 = () => {
  //     console.log("멤버 감소함수 호출됨");
  //     this.state.count--;
  //     console.log(this.state);
  //   };

  constructor(props) {
    super(props); //부모 생성자 호출,
    //console.log("super");
    this.state = {
      count: 555,
    };
  }

  증가함수 = () => {
    console.log("렌더 증가함수 호출됨");

    // //방법1
    // let 현재값 = this.state.count; //state의 지금 값을 가져와서
    // 현재값++; //+1하고
    // this.setState({ count: 현재값 }); // 그대로 setState에서 count 객체값으로 넣는다..

    // //그걸 한 줄로 요약한게 아래다.
    // this.setState({ count: this.state.count + 1 });
    // //--------------------------------------------------
    // count++;
    // console.log(count);

    //방법2 : 객체가 복잡할 때 쓰기 유리하다.
    this.setState(function (현재state) {
      console.log("--------" + JSON.stringify(현재state));
      return { count: 현재state.count + 1 };
    });
  };

  감소함수 = () => {
    console.log("렌더 감소함수 호출됨");
    // this.setState({ count: this.state.count-- });
    this.setState(function (현재state) {
      return { count: 현재state.count - 1 };
    });
  };
  render() {
    console.log("ㅁㅇㅁ렌더함수 호출됨!ㅇㅁㅇ");
    //console.log(this.state);
    return (
      <div>
        {/* <h1>카운터 : {count}</h1> */}
        <h1>카운터 : {this.state.count}</h1>
        <button onClick={this.증가함수}>+1</button>
        <button onClick={this.감소함수}>-1</button>
      </div>
    );
  }
}
export default App;
