import { Children } from "react";
import Card from "./Card";
function CardHand(props) {
  let index = 0;
  const showSelected = () => {
    console.log(Children.count());
  };
  return (
    <div
      className="flex transition-all duration-500 ease-in-out hover:-translate-y-32"
      onMouseEnter={showSelected}
    >
      {props.cards.map((card) => {
        return (
          <Card
            number={card}
            len={props.cards.length}
            index={index++}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default CardHand;
