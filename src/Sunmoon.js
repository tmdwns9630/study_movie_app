function Sunmoon() {
  const myName = "최승준";
  return <h2>선문대학교 {info(myName, "2016244084")}입니다.</h2>;
}

function info(name, 학번) {
  return `${name}의 학번은 ${학번}입니다.`;
}

export default Sunmoon;
