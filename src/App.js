import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
//import ClickCounter from "./components/ClickCounter";
//로딩 화면의 원리를 간단하게 알아보자.
function App(props) {
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovieAPI() {
    if (movies.length > 0) return;
    //ㄴ 값이 있으면 한번만 실행하고 더 안 하겠다.
    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=3d6a0c3b9d0f8c74a2c6096b10bd3347&language=ko&page=10np"
    );

    console.log(result.data.results);
    console.log(result.data.results[0].title);
    console.log(`무비스 before : ${movies}`);
    setMovies(result.data.results);
    console.log(`무비스 after : ${movies}`);
    console.log(`무비스0 타이틀 : ${movies[0].title}`);
  }

  //뭔가를 기다려야할 경우
  //함수 : async, 함수가 기다려 줄 수 있는 함수라고 명시해야 한다.
  //await : 기다려야할 대상이 있는 라인을 명시.
  //result.data에 postman에서 봤던 데이터가 객체화되어서 들어와있다.
  getMovieAPI();

  return (
    <>
      {0 < movies.length ? (
        <Fragment>
          <p>
            {/* https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg */}
            <div>hello world</div>
            <div>제목 : {movies[0].title} </div>
            <div>줄거리 : {movies[0].overview} </div>
            <div>평점 : {movies[0].vote_average}</div>
            <div>성인영화 : {movies[0].vote_average}</div>
            <div>언어 : {movies[0].original_language}</div>
            <div>개봉일 : {movies[0].release_date}</div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movies[0].poster_path}`}
              alt="loading"
            ></img>
          </p>
          <p>
            <div>hello world</div>
            <div>제목 : {movies[1].title} </div>
            <div>줄거리 : {movies[1].overview} </div>
            <div>평점 : {movies[1].vote_average}</div>
            <div>성인영화 : {movies[1].vote_average}</div>
            <div>언어 : {movies[1].original_language}</div>
            <div>개봉일 : {movies[1].release_date}</div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movies[0].poster_path}`}
              alt="loading"
            ></img>
          </p>
        </Fragment>
      ) : null}
    </>
  );
}
export default App;
