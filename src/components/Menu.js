import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movies from "./Movies";
import "./Menu.css";
import Youtube from "./Youtube";
import TailWind from "./TailWind";
import Kakaotalk from "./Kakaotalk";
import ClickCounter from "./ClickCounter";

//latest가 왠지 안된다.
function Home() {
  console.log("Home");
  return (
    <>
      <div className="text-3xl font-bold text-center mb-3">HOME</div>
      <div className="flex justify-center mb-3">
        <img
          src="http://thumbnail.egloos.net/600x0/http://pds27.egloos.com/pds/201708/26/10/d0008110_59a08ddc44c8c.jpg"
          alt="img1"
          width="80%"
        ></img>
      </div>
      <div
        className="text-3xl font-bold italic text-center
      flex justify-center"
      >
        Good afternoon, Mr.Wick.
        <br />
        Do enjoy your party.
      </div>
    </>
  );
}
//함수가 JSx를 리턴하면 그게 컴포넌트
function About() {
  console.log("about");
  return (
    <>
      <h2 className="text-3xl font-bold">개발자 소개</h2>
      <br />
      <div>
        <div>최승준</div>
        <div>선문대학교 4학년</div>
        <div>장학금도 못 타고 숨쉬는 대로 살다가</div>
        <div>어떻게 사람 구실 해보겠다고 몰입형 교육 신청해서 공부 중.</div>
        <div>장래희망은 스파이더맨</div>
      </div>
    </>
  );
}

function Menu(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                  width={15}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                홈으로
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about">About us...</Link>
          </li>
          <li>
            <Link to="/clickcounter">클릭카운터</Link>
          </li>
          <li>
            <Link to="/popular">인기 영화</Link>
          </li>
          <li>
            <Link to="/now_playing">상영 중</Link>
          </li>
          <li>
            <Link to="/upcoming">개봉 예정</Link>
          </li>

          <li>
            <Link to="/Youtube">유튜브</Link>
          </li>
          <li>
            <Link to="/tailwind">TailWind 연습</Link>
          </li>
          <li>
            <Link to="/Kakaotalk">카카오톡</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clickcounter" element={<ClickCounter />} />
        <Route path="/popular" element={<Movies apiPath="popular" />} />
        <Route path="/upcoming" element={<Movies apiPath="upcoming" />} />
        <Route path="/now_playing" element={<Movies apiPath="now_playing" />} />
        <Route path="/Youtube" element={<Youtube />} />
        <Route path="/tailwind" element={<TailWind />} />
        <Route path="/kakaotalk" element={<Kakaotalk />} />
      </Routes>
      {/* path의 경로로 들어가면 element의 컴포넌트를 렌더링 하라.
      룰1 : path 경로는 무조건 소문자로 하자.
      룰2. js 파일은 첫글자는 무조건 대문자, 나머지 대문자.
      룰3. 코드 자동 완성을 맹신하지 말자, 그거도 미스가 나올 수 있다.*/}
    </BrowserRouter>
  );
}
export default Menu;
