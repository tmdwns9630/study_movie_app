import "./Kakaotalk.css";
function Kakaotalk() {
  //  width 어케 맞추냐
  // 글자 굵기 롬아
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello Tailwind!</h1>
      <h1>카카오톡 카피</h1>
      <div id="kt__main" className="bg-white w-10/12">
        <div id="kt__top1" className="flex justify-between">
          <span className="text-lg text-black">더보기</span>
          <div className="flex justify-between ">
            <span className="mr-3">🔍</span>
            <span className="mr-3">🎮</span>
            <span className="mr-3">🎵</span>
            <span className="mr-3">🛠</span>
          </div>
        </div>
        {/*-------kt__top1--------*/}
        <div id="kt_top2" className="flex justify-between items-center">
          <div className="flex justify-between">
            <div className="mr-3">
              <img
                src="https://hindiquoteson.com/wp-content/uploads/2022/08/cool-Photos-for-whatsapp-DP-4.webp"
                alt="프로필사진"
                width="50px"
                className="rounded-xl m-3"
              ></img>
            </div>
            <div className="text-slate-400 mt-3 ">
              <div>최승준</div>
              <div>tmdwns9630@gmail.com</div>
            </div>
          </div>
          <div>
            <span className="border-2 rounded-xl mr-3 px-3 py-1 ">MY</span>
            <span className="border-2 rounded-xl mr-3 px-3 py-1">🔫 10</span>
          </div>
        </div>
        {/*-------kt__top2--------*/}
        <div id="kt__top3" className="bg-gray-300 w-11/12 rounded-md mx-5 mg=">
          <div className="flex justify-between items-center p-3">
            <div className="ml-3 bg-slate-100 py-1 px-4 rounded-3xl flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mr-2 font-bold ">pay</span>

              <span>0원</span>
            </div>
            <div className="font-bold mx-2">
              <span className="mr-5">송금</span>
              <span>결제</span>
            </div>
          </div>
        </div>
        {/*-------kt__top3--------*/}
        <div id="kt__top4_menu" className="my-5">
          {/* +++++++++ 라인1 +++++++++ */}
          <div id="kt__top4_menu_line" className="flex  justify-evenly mb-5 ">
            <div className="icon flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/42/42691.png"
                alt="이모티콘이미지"
              ></img>
              이모티콘
            </div>
            <div className="icon flex flex-col items-center">
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
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              페이지
            </div>
            <div className="icon flex flex-col items-center">
              <img
                src="data:image/png;base64,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"
                alt="게임_이미지"
              ></img>
              게임
            </div>
            <div className="icon flex flex-col items-center">
              <img
                src="https://play-lh.googleusercontent.com/gVPxyp_U98xIto8vGHJCGhIfl6KoV0zfa_FCwJcXY9KKu-f69FTh6irkx7Z_r4lXRjk"
                alt="메이커스_이미지"
              ></img>
              메이커스
            </div>
          </div>
          {/* +++++++++ 라인2 +++++++++ */}
          {/* 2번 라인만 글자수 때문인지 다른 줄이랑 잘 안 맞는다. */}
          <div
            id="kt__top4_menu_line"
            className="flex justify-evenly mb-5 mr-4 "
          >
            <div className="icon flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1175/1175589.png"
                alt="아이콘 이미지"
              ></img>
              선물하기
            </div>
            <div className="icon flex flex-col items-center">
              <img
                src="https://item.kakaocdn.net/do/d84248170c2c52303db27306a00fb8618f324a0b9c48f77dbce3a43bd11ce785"
                alt="아이콘 이미지"
              ></img>
              프렌즈샵
            </div>
            <div className="icon flex flex-col items-center text-sm">
              <img
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt="아이콘 이미지"
              ></img>
              쇼핑하기
            </div>
            <div className="icon flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3159/3159667.png"
                alt="아이콘 이미지"
              ></img>
              스타일
            </div>
          </div>
          {/* +++++++++ 라인3 +++++++++ */}
          <div id="kt__top4_menu_line" className="flex justify-evenly mb-5 ">
            <div className="icon flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1405/1405021.png"
                alt="아이콘 이미지"
              ></img>
              주문하기
            </div>
            <div className="icon flex flex-col items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1503289583865253892/9mT9TCc9_400x400.jpg"
                alt="아이콘 이미지"
              ></img>
              멜론티켓
            </div>
            <div className="icon flex flex-col items-center">
              <img
                src="https://play-lh.googleusercontent.com/GweSpOJ7p8RZ0lzMDr7sU0x5EtvbsAubkVjLY-chdyV6exnSUfl99Am0g8X0w_a2Qo4"
                alt="아이콘 이미지"
              ></img>
              멜론
            </div>
            <div className="icon flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/17/17521.png"
                alt="아이콘 이미지"
              ></img>
              전체서비스
            </div>
          </div>
        </div>
        {/* -----------kt__top4_menu----------- */}
        <hr></hr>
        <div id="kt__top5_makeBtn" className="flex justify-center text-xl">
          <div className="border-4 border-blue-800 px-6 ">
            <span className="font-bold">메일 </span>
            <span className="text-gray-400">만들기</span>
          </div>
          <div className="border-4 border-red-800 px-10">
            <span className="font-bold">캘린더</span>{" "}
            <span className="text-gray-400">일정 만들기</span>
          </div>
        </div>
        {/* -----------kt__top5_만들기----------- */}
      </div>
      {/*==============kt__main================*/}
    </>
  );
}

export default Kakaotalk;

//flex-col을 줄 때는 flex와 같이 줘야 한다.
