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

    // console.log(result.data.results);
    // console.log(result.data.results[0].title);
    // console.log(`무비스 before : ${movies}`);
    setMovies(result.data.results);
    // console.log(`무비스 after : ${movies}`);
    // console.log(`무비스0 타이틀 : ${movies[0].title}`);
    setLoading(false);
  }

  //뭔가를 기다려야할 경우
  //함수 : async, 함수가 기다려 줄 수 있는 함수라고 명시해야 한다.
  //await : 기다려야할 대상이 있는 라인을 명시.
  //result.data에 postman에서 봤던 데이터가 객체화되어서 들어와있다.
  useEffect(function () {
    getMovieAPI();
  }, []);

  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        movies.map(function (ele) {
          return (
            <Movie
              key={ele.id}
              id={ele.id}
              title={ele.title}
              poster_path={ele.poster_path}
              overview={ele.overview}
              vote_average={ele.vote_average}
              adult={ele.adult}
              original_language={ele.original_language}
              release_date={ele.release_date}
            />
          );
        })
      )}
    </>
  );
}
export default App;
