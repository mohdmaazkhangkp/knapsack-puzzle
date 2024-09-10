import { useMemo, useState } from "react";
import RoundedLayout from "../layout/RoundedLayout";
import { Coin, levels } from "../utils/levels";
import CoinContainer from "../components/CoinContainer";
import CoinBag from "../components/CoinBag";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Button from "../components/Button";
import { unboundedKnapsack } from "../utils/knapsackAlgo";
import hintImg from "../assets/hint.png";
import ruleImg from "../assets/rule.png";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "./pagesData";
import toast, { Toaster } from "react-hot-toast";

const Play = () => {
  const [resetTrigger, setResetTrigger] = useState(false);
  const [selectedCoins, setSelectedCoins] = useState<Coin[] | []>([]);
  const [levelNumber, setLevelNumber] = useState(1);

  const navigate = useNavigate();

  const handleReset = () => {
    setResetTrigger((prev) => !prev);
    setSelectedCoins([]);
    toast("Reset successful!", {
      icon: "🔄",
      duration: 1000,
      style: {
        backgroundColor: "#f3f4f6",
        color: "#333",
      },
    });
  };

  const optimalValue = useMemo(() => {
    return unboundedKnapsack(
      levels[levelNumber - 1]?.maxWt,
      levels[levelNumber - 1]?.coins
    );
  }, [levelNumber]);

  const handleCheckOptimal = () => {
    if (selectedCoins.length == 0) {
      toast("Your bag is empty! Please add some items.", {
        icon: "👜",
        style: {
          backgroundColor: "#F86509",
          color: "#fff",
        },
      });
      return;
    }
    const selectedValue = selectedCoins.reduce(
      (acc, coin: Coin) => acc + coin.value,
      0
    );
    const selectedWeight = selectedCoins.reduce(
      (acc, coin: Coin) => acc + coin.weight,
      0
    );
    const optimal = selectedValue === optimalValue;

    if (selectedWeight > levels[levelNumber - 1].maxWt) {
      toast.error("Overweight! You need to adjust the items.", {
        icon: "⚠️",
        style: {
          backgroundColor: "#EF4444",
          color: "#fff",
        },
      });
    } else if (optimal) {
      toast.success(
        "Optimal selection! Well done! You have moved to the next level.",
        {
          icon: "🎉",
          duration: 5000,
          style: {
            backgroundColor: "#34E816",
            color: "#fff",
          },
        }
      );
      setLevelNumber((prev) => (levelNumber < levels.length ? prev + 1 : prev));
      setResetTrigger((prev) => !prev);
      setSelectedCoins([]);
      window.scrollTo(0, 0);
    } else {
      toast("Not optimal, try again!", {
        icon: "🤔",
        style: {
          backgroundColor: "#F86509",
          color: "#fff",
        },
      });
    }
  };

  return (
    <RoundedLayout className="pt-6 pb-5  px-8 bg-opacity-80 relative">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="-top-6 right-10 absolute">
        <Button size="small" onClick={() => navigate(RouterPath.Home)}>
          Exit
        </Button>
      </div>
      <div className="left-6 xl:left-[35%] absolute top-0">
        <div
          style={{
            background: `url(/vector.png)  no-repeat center center`,
            backgroundSize: "cover",
          }}
          className="px-[9px] py-[14px] "
        >
          <p className="font-extrabold text-[19px] text-white">
            L{levels[levelNumber - 1].level}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 absolute right-2 top-0 bottom-0 my-auto  h-full items-center justify-center">
        {" "}
        <button className="border-2 border-white rounded-[12px] gap-1 bg-blue flex flex-col items-center justify-center w-[64px] h-[65px]">
          <img className="w-6" src={hintImg} />
          <p className="text-white font-semibold text-[12px]">Hints</p>
        </button>
        <button className="border-2 border-white rounded-[12px] gap-1 bg-blue flex flex-col items-center justify-center w-[64px] h-[65px]">
          <img className="w-6" src={ruleImg} />
          <p className="text-white font-semibold text-[12px]">Rules</p>
        </button>
      </div>
      <DndProvider backend={HTML5Backend}>
        <h2 className="text-[2rem] text-center">Knapsack puzzle</h2>
        <p className="text-center font-medium text-lg font-balooThambi2">
          Maximize the value of Gems you want to carry within your bag weight
          limit
        </p>
        <div className="mt-8 rounded-[30px] w-full flex-1 bg-[#BFD1E0] px-10 pt-8 pb-6 max-w-[860px] mx-auto">
          <div className="flex items-center gap-8 flex-wrap justify-center">
            {levels[levelNumber - 1]?.coins?.map((coin) => (
              <CoinContainer {...coin} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <CoinBag
              maxWt={levels[levelNumber - 1]?.maxWt}
              optimalValue={optimalValue}
              resetTrigger={resetTrigger}
              onDrop={(droppedCoins: Coin[]) => setSelectedCoins(droppedCoins)}
            />
          </div>
        </div>

        <div className="flex items-center gap-7 justify-center mt-6">
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleCheckOptimal}>Submit</Button>
        </div>
      </DndProvider>
    </RoundedLayout>
  );
};

export default Play;
