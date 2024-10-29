import { useState } from "react";

function Card(props) {
  const index = props.index;
  const mid = props.len / 2;
  const len = props.len;

  const CARD_DISTANCE_X = 100;
  const CARD_DISTANCE_Y = 150;
  const Y_OFFSET = 200;
  const ROTATE_DISTANCE = 2;
  const CLICK_Y_OFFSET = -200;
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  const CARD_WIDTH = 192;

  const RAYON = 7;

  const translateY =
    -CARD_DISTANCE_Y * Math.cos((Math.PI / props.len) * (index - mid + 0.5)) +
    Y_OFFSET +
    (clicked || hover ? CLICK_Y_OFFSET : 0);

  const toggleClick = () => {
    setClicked(!clicked);
  };
  const hovering = () => {
    setHover(true);
  };
  const notHovering = () => {
    setHover(false);
  };

  return (
    <div
      className={`transition-all hover:mx-[6rem] cursor-pointer hover:translate-y-8 ease-out duration-500 border-4 bg-white border-black rounded-3xl h-72 w-48 flex items-center justify-center shadow-2xl select-none`}
      style={{
        margin: "0 " - Math.min(len * RAYON, 85) + "px",
        transform: `translate(${0}px,${translateY}px)`,
        zIndex: props.index,
        rotate: ROTATE_DISTANCE * (index - mid + 0.5) + "deg",
      }}
      onClick={toggleClick}
      onMouseEnter={hovering}
      onMouseLeave={notHovering}
    >
      Card {props.number}
    </div>
  );
}

export default Card;
