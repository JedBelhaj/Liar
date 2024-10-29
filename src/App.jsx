import TopBar from "./components/TopBar";
import Main from "./components/Main";
import CardHand from "./components/CardHand";
function App() {
  let cards = new Array(40);
  cards.fill(1);
  return (
    <div className="leading-6 p-4 lg:p-10 flex items-center justify-start flex-col font-dongle text-[1.8rem] tracking-tight text-gray-500 font-bold overflow-hidden lg:h-screen">
      <TopBar />
      <Main />
      <CardHand cards={cards} />
    </div>
  );
}

export default App;
