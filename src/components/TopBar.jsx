import Icon from "./Icon";
function TopBar() {
  return (
    <>
      <div className="bg-white p-1 px-10 flex items-center justify-between m-5 lg:m-0 w-10/12 text-center lg:w-2/4 rounded-2xl shadow-around">
        <div className="flex gap-4 lg:gap-2 ">
          <Icon path="info" />
          <Icon path="copy" />
        </div>
        <p className="mx-5 lg:mx-0 mt-1 p-2">Waiting for you to deal a card.</p>
        <div className="flex gap-4 lg:gap-2">
          <Icon path="moon" />
          <Icon path="exit" />
        </div>
      </div>
    </>
  );
}

export default TopBar;
