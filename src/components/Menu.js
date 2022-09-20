import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movies from "./Movies";
import "./Menu.css";
//latest가 왠지 안된다.
function Home() {
  console.log("Home");
  return <h2>홈 컴포넌트</h2>;
}
//함수가 JSx를 리턴하면 그게 컴포넌트
function About() {
  console.log("about");
  return <h2>개발자 소개</h2>;
}

function Menu(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                width={30}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              홈으로
            </Link>
          </li>
          <li>
            <Link to="/popular">인기 영화</Link>
          </li>
          <li>
            <Link to="/latest">상영 중</Link>
          </li>
          <li>
            <Link to="/upcoming">개봉 예정</Link>
          </li>

          <li>
            <Link to="/about">About us...</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<Movies apiPath="popular" />} />
        <Route path="/upcoming" element={<Movies apiPath="upcoming" />} />
        <Route path="/latest" element={<Movies apiPath="latest" />} />
      </Routes>
      {/* path의 경로로 들어가면 element의 컴포넌트를 렌더링 하라. */}
    </BrowserRouter>
  );
}
export default Menu;
