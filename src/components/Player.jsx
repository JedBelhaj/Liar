import playerImage from "../assets/players/player.png";
function Player(props) {
  return (
    <div className={props.styles + " z-50"}>
      <div
        className={`flex items-center justify-center flex-col rotate-[${props.rotate}deg]`}
      >
        <div
          className={`bg-white overflow-clip rounded-full border-[5px] h-20 w-20 lg:h-24 lg:w-24 border-white shadow-around `}
        >
          <img className="" src={playerImage} alt="" />
        </div>
        <div className="mt-1 border-gray-500 border-2 text-xl text-gray-500 shadow-around bg-white px-4 rounded-lg">
          <h1 className="mt-1">{props.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Player;
