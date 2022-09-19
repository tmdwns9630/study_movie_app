import React from "react";
import Movie from "./Movie";

const movies = [
  {
    id: 2,
    영화명: "탑건",
    주연배우: "톰 크루즈",
    장르: "액션",
    상영시간: ["10:00", 123, "12:00", "14:00", "16:00"],
    티켓가격: 18000,
  },
  {
    id: 1,
    영화명: "스파이더맨 노웨이홈",
    주연배우: "톰 홀랜드",
    장르: "히어로",
    상영시간: ["10:30", "12:30", "14:30", "16:30"],
    티켓가격: 15000,
  },
  {
    id: 3,
    영화명: "좀비랜드 더블탭",
    주연배우: "우디 해럴슨",
    장르: "좀비",
    상영시간: ["10:09", "12:09", "14:09", "16:09"],
    티켓가격: 11000,
  },
];

function Movies() {
  return (
    <React.Fragment>
      <h1>김피터 영화앱</h1>
      {movies.map(function (mov) {
        return (
          <Movie
            key={mov.id}
            movieName={mov.영화명}
            actor={mov.주연배우}
            genre={mov.장르}
            time={mov.상영시간}
            price={mov.티켓가격}
          />
        );
      })}

      <Movie
        movieName={"어린신부"}
        actor={"문근영"}
        genre={"드라마"}
        time={[]}
        price={5000}
      />

      <Movie
        movieName={"백합신부"}
        actor={"문근영"}
        genre={"드라마"}
        time={[]}
        price={5000}
      />

      <Movie
        movieName={"개쎈신부"}
        actor={"드웨인존슨"}
        genre={"액션"}
        time={["10:30", 12345, { time: 15000 }, "12:30", "14:30"]}
      />
    </React.Fragment>
  );
}

export default Movies;
