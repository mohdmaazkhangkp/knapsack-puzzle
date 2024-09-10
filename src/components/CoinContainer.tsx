import { Coin } from "../utils/levels";
import { useDrag } from "react-dnd";

const CoinContainer = ({ image, weight, value }: Coin) => {
  const [{ isDragging }, drag] = useDrag({
    type: "coin",
    item: { image, weight, value },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div
      className={`border min-w-[165px] border-[#888888] rounded-[30px] bg-white text-lg font-medium p-2 px-3 flex flex-col items-center ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div ref={drag} className="cursor-pointer">
        <img src={image} className="max-h-16" />
      </div>
      <p>{`Value: ${value} coins`}</p>
      <p>{`Weight: ${weight} grams`}</p>
    </div>
  );
};

export default CoinContainer;
