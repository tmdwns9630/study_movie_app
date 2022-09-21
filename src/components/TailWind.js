function TailWind() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello Tailwind!</h1>
      <h2>
        https://tailwindcss.com/docs 에서 속성 찾아서 클래스네임 인라인 한번으로
        CSS를 적용해보자.
      </h2>
      <div className="bg-red-500">Hello Tailwind!</div>
      <div className="bg-orange-400 text-white">Text Color</div>
      <div className="bg-yellow-400 text-white pl-10 pt-10">
        패딩 래프트를 10만큼, 패딩 라이트를 10만큼
      </div>

      <div className="bg-green-500 text-white px-10 py-10">
        패딩 x축를 10만큼, 패딩 y축를 10만큼
      </div>
      <div className="bg-red-400 text-white border-4 border-blue-800">
        border-4: 테두리 굵기, / 테두리 색
      </div>
      <div className="text-black border-4 border-black rounded-xl">
        rounded-속성 : 테두리 둥글게(sm md lg xl 2xl 3xl)
      </div>
      <div className="bg-green-400 shadow-xl">그림자 적용</div>
      <div className="bg-green-400 hover:bg-red-300 hover:border-5">
        호버, 중첩 가능
      </div>

      <div className="bg-red-300 flex justify-between items-start">
        <div className="relative top-10 bg-slate-100">flex</div>
        <div>justify</div>
        <div>align는 items으로 축약</div>
        <div>4</div>
      </div>
    </>
  );
}

export default TailWind;
