import "./Youtube.css";

function Youtube(props) {
  return (
    // 최상단----------------------------------
    <div className="yt__main">
      <div className="yt__top">
        <div>
          <span className="yt__clock">5:29</span>
        </div>
        <div className="yt__icon">
          <span>💬</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>81%</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15zM4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H4.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* ---------top2: 유튜브 로고 ---------------- */}
      <div className="yt__top2">
        <div className="yt__top2_left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/2560px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png"
            width="35px"
            height="30px"
          ></img>
          Premium
        </div>
        <div className="yt__top2_right">
          <span className="yt__top2_right_type">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </span>
          <span className="yt__top2_right_type">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </span>
          <span className="yt__top2_right_type">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <span className="yt__top2_right_type yt__top2_right_type_User">
            승준
          </span>
        </div>
        {/* top3 : 탐색 ---------------------------- */}
      </div>
      <div className="yt__top3">
        <div className="yt__top3_left">
          <span>⭐탐색</span>
        </div>
        <div className="yt__top3_Line"></div>
        <div className="yt__top3_right ">
          <span className="yt__top3_right_type">전체</span>
          <span className="yt__top3_right_type">게임</span>
          {/* <span className="yt__top3_right_type">새로운 맞춤 동영상</span> */}
          <span className="yt__top3_right_type">믹스</span>
          <span className="yt__top3_right_type">음악</span>
          <span className="yt__top3_right_type">Animation</span>
        </div>
      </div>
      {/* 4 : 동영상1----------------------- */}
      <div className="yt__video">
        <div className="yt__video_Thumbnail">
          <img src="https://i.ytimg.com/vi/2Gb9RpZrFDY/maxresdefault.jpg"></img>
          <div className="yt__video_Thumbnail_runTime">10:21</div>
        </div>
        <div className="yt__video_bar">
          <div className="yt_video_info_uploaderProfile">
            <img src="https://yt3.ggpht.com/ytc/AMLnZu9vwV4Dgc3o-qdpVCPP2iy0ok-APj4DJyyPMWQtvw=s900-c-k-c0x00ffffff-no-rj"></img>
          </div>
          <div className="yt_video_info_text">
            <div className="yt_video_info_title">
              <div className="yt_video_info_title_text">
                커비야... 너 왜 눈을 그렇게 떠...? [커비 스페샬]
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </div>

            <div className="yt_video_info_uploaderInfo">
              <span className="yt_video_info_uploaderInfo_uploaderName">
                김도랜드
              </span>
              <span>·</span>
              <span className="yt_video_info_uploaderInfo_count">
                조회수 11만회
              </span>
              <span>·</span>
              <span className="yt_video_info_uploaderInfo_time">2년 전</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 : 동영상2----------------------- */}
      <div className="yt__video">
        <div className="yt__video_Thumbnail">
          <img src="https://i.ytimg.com/vi/dRN7HLN1lfQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAlAQupieZouLgeNqtYln3tVojcBQ"></img>
          <div className="yt__video_Thumbnail_runTime">10:21</div>
        </div>
        <div className="yt__video_bar">
          <div className="yt_video_info_uploaderProfile">
            <img src="https://yt3.ggpht.com/ytc/AMLnZu9T1gKkJqvCFWdDPAPiwZe2urmNwg85Zma-9HMZDw=s900-c-k-c0x00ffffff-no-rj"></img>
          </div>
          <div className="yt_video_info_text">
            <div className="yt_video_info_title">
              <div className="yt_video_info_title_text">
                AVGN도 분노한 전설의 똥게임 [이름없는 마을]
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </div>

            <div className="yt_video_info_uploaderInfo">
              <span className="yt_video_info_uploaderInfo_uploaderName">
                긴도랜드
              </span>
              <span>·</span>
              <span className="yt_video_info_uploaderInfo_count">
                조회수 18만회
              </span>
              <span>·</span>
              <span className="yt_video_info_uploaderInfo_time">2년 전</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Youtube;
