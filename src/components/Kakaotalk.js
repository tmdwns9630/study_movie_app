function Kakaotalk() {
  //  width 어케 맞추냐 싯팔
  // 글자 굵기 싯팔롬아
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello Tailwind!</h1>
      <h1>카카오톡 카피</h1>
      <div id="kt__main" className="bg-white">
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
                className="rounded-xl"
              ></img>
            </div>
            <div className="text-slate-400">
              <div>최승준</div>
              <div>tmdwns9630@gmail.com</div>
            </div>
          </div>
          <div>
            <span className="border-2 rounded-xl mr-3 px-3 py-1">MY</span>
            <span className="border-2 rounded-xl mr-3 px-3 py-1">🔫 10</span>
          </div>
        </div>
        {/*-------kt__top2--------*/}
      </div>
      {/*-------kt__main---------*/}
    </>
  );
}

export default Kakaotalk;
