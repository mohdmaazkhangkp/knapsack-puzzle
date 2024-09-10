import { useDrop } from "react-dnd";
import { useState, useEffect } from "react";
import { Coin } from "../utils/levels";
import ProgressBar from "./ProgressBar";
import bagImg from "../assets/bag.png";

interface CoingBagProps {
  maxWt: number;
  resetTrigger: boolean;
  onDrop: (droppedCoins: Coin[]) => void;
  optimalValue: number;
}

const CoinBag: React.FC<CoingBagProps> = ({
  maxWt,
  resetTrigger,
  onDrop,
  optimalValue,
}) => {
  const [droppedCoins, setDroppedCoins] = useState<Coin[] | []>([]);

  useEffect(() => {
    setDroppedCoins([]);
  }, [resetTrigger]);

  const [{ isOver }, drop] = useDrop({
    accept: "coin",
    drop: (coin: Coin) => {
      const newDroppedCoins = [...droppedCoins, coin];
      setDroppedCoins(newDroppedCoins);
      onDrop(newDroppedCoins);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const totalWeight = droppedCoins.reduce(
    (acc, coin: Coin) => acc + coin.weight,
    0
  );

  const totalValue = droppedCoins.reduce(
    (acc, coin: Coin) => acc + coin.value,
    0
  );
  const totalWeightPercent = (totalWeight * 100) / maxWt;
  const totalValuePercent = (totalValue * 100) / optimalValue;

  const wtColor =
    totalWeight < maxWt
      ? "#00A2F1"
      : totalWeight === maxWt
      ? "#34E816"
      : "#EF4444";

  const valueColor = totalValue < optimalValue ? "#00A2F1" : "#34E816";

  console.log(wtColor);

  return (
    <div className="w-full min-w-[350px] max-w-[430px] relative">
      <div>
        <img src={bagImg} className="w-[4.2rem] absolute -left-5 -top-5"/>
      </div>
      <div className="bg-yellow rounded-t-[30px] py-2">
        <p className="text-center font-bold">{`Max Weight: ${maxWt} g`}</p>
      </div>

      <div
        ref={drop}
        className={`rounded-b-[30px] bg-white py-2 px-3 min-h-[150px] flex flex-col justify-end ${
          isOver ? "bg-green-100" : ""
        }`}
      >
        <div className="flex justify-center items-center  gap-4 flex-wrap">
          {droppedCoins.map((coin: Coin, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={coin.image} alt="coin" className="max-h-16" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-12 justify-center font-semibold mt-4 px-8">
          <div className="flex-1 flex flex-col gap-1">
            <p>
              Value :{" "}
              <span style={{ color: valueColor }}>{`${totalValue} Coins`}</span>
            </p>
            <ProgressBar color={valueColor} widthPercent={totalValuePercent} />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <p>
              Weight :{" "}
              <span style={{ color: wtColor }}>{`${totalWeight} grams`}</span>
            </p>
            <ProgressBar color={wtColor} widthPercent={totalWeightPercent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinBag;
