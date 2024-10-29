import Player from "./Player";

function Main() {
  return (
    <>
      <div className="shadow-around mt-20 w-9/12 h-[450px] rounded-[180px] p-5 flex items-center justify-center">
        <Player
          name="Steve"
          rotate="90"
          styles="absolute -translate-x-[34vw] -rotate-90"
        />
        <Player
          name="Michael"
          rotate="90"
          styles="absolute translate-x-[34vw] rotate-90"
        />
        <Player name="Frank" rotate="0" styles="absolute -translate-y-48" />
        <div className="shadow-aroundinner relative rounded-[160px] flex-col p-14 w-full h-full flex items-center justify-center">
          <div className="shadow-aroundinner min-h-60 min-w-48 relative rounded-xl p-3 w-1/4 h-full flex items-center justify-center mt-2">
            <div className="shadow-2xl min-w-40 rounded-lg p-20 w-full h-full flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
