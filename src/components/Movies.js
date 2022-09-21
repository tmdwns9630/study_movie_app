import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Movie from "./Movie";

//import ClickCounter from "./components/ClickCounter";
//로딩 화면의 원리를 간단하게 알아보자.
function Movies(props) {
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);
  //console.log(props);
  const [Apath, setApath] = useState();

  //-----------------------------------------------------------------
  async function getMovieAPI() {
    console.log(`ㅁㅁㅁㅁㅁㅁgetMovieAPI 실행됨ㅁㅁㅁㅁㅁㅁㅁㅁ`);

    // if (movies.length > 0) return;
    //ㄴ 값이 있으면 한번만 실행하고 더 안 하겠다.
    // 문지기 퇴사
    if (!props.apiPath) return;
    console.log(`리턴과 현재 페이지 : ${props.apiPath}`);
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.apiPath}?api_key=3d6a0c3b9d0f8c74a2c6096b10bd3347&language=ko&region=KRhttps://api.themoviedb.org/3/movie/${props.apiPath}?api_key=3d6a0c3b9d0f8c74a2c6096b10bd3347&language=ko&region=KR`
    );
    console.log(`현재 페이지 : ${props.apiPath}`);
    setMovies(result.data.results);
    setloading(false);
    console.log(result.data.results[0]);
  }
  //뭔가를 기다려야할 경우
  //함수 : async, 함수가 기다려 줄 수 있는 함수라고 명시해야 한다.
  //await : 기다려야할 대상이 있는 라인을 명시.
  //result.data에 postman에서 봤던 데이터가 객체화되어서 들어와있다.

  useEffect(
    function () {
      //   if (movies.length > 0) {
      //     setMovies(movies.map((x) => [""]));
      //   }

      getMovieAPI();
    },
    [props.apiPath]
  );
  //   useEffect 함수는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook 이다.
  //   두번째 인자인 배열 값이 바뀔 때 첫번째 인자인 콜백함수를 실행하라, 라는 함수.
  //   ㄴ 비어 있으면 처음 웹페이지 로딩 될 때 딱 한번 호출된다. DOMLoaded와 같다.
  //   변수나 함수를 지정할 수 있다. 그 변수나 함수값이 바뀌었을 때 쓸 수 있다.

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
export default Movies;
