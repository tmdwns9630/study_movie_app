import React from "react";
import PropTypes from "prop-types";

function Movie(props) {
  return (
    <>
      {/* {console.log(props)} */}
      <hr></hr>
      <div>영화이름 : {props.movieName}</div>
      <div>주연배우 : {props.actor}</div>
      <div>장르 : {props.genre}</div>
      <div>
        {/* 상영시간 : {props.time ? props.time.join(" / ") : "상영정보없음"} */}
        상영시간 :{" "}
        {props.time
          ? props.time
              .filter(function (ele) {
                return typeof ele === "string" ? true : false;
              })
              .join(" / ")
          : "상영정보없음"}
      </div>
      <div>티켓가격 : {props.price ? props.price + 500 : "미공개"}</div>
      <div></div>
    </>
  );
}
// {" "} : 강제로 한칸 공백 넣어줌
// 상영시간 : 삼항연산자로 문자열만 골라서 배열 출력.

Movie.propTypes = {
  movieName: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  price: PropTypes.number,
  time: PropTypes.array,
};
export default Movie;
