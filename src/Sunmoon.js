function info(name, 학번) {
  return `${name}의 학번은 ${학번}`;
}

function Sunmoon(props) {
  console.log(props);
  return <h2> {info(props.name, props.학번)}.</h2>;
}

// props라는 속성에 객체로서 info의 인자인 name, 학번이 객체로 들어간다.
export default Sunmoon;
