import RoundedLayout from "../layout/RoundedLayout";
import Slider from "react-slick";
import step1Img from "../assets/Group 24877.webp";
import step2Img from "../assets/Group 24884.webp";
import step3Img from "../assets/Group 24884 (1).webp";
import LeftArrow from "../components/SvgIcons/leftArrow";
import RightArrow from "../components/SvgIcons/rightArrow";
import { useRef, useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { RouterPath } from "./pagesData";

const settings = {
  dots: true,
  infinite: false,
  speed: 10,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
};

const Introduction = () => {
  const slider = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const InstructionSlide = ({
    text,
    image,
  }: {
    text: string;
    image: string;
  }) => {
    return (
      <div className="flex flex-col justify-end">
        <p className="font-medium text-lg font-roboto text-center mb-1 max-w-md mx-auto">
          {text}
        </p>
        <img src={image} className="" />
      </div>
    );
  };

  return (
    <RoundedLayout className="pt-2 pb-7 px-8 relative">
         <div className="-top-6 right-10 absolute">
        <Button size="small" onClick={() => navigate(RouterPath.Home)}>
          Exit
        </Button>
      </div>
      <h2 className="text-[2rem] text-center font-balooThambi">Knapsack puzzle</h2>
      <p className="text-center font-medium text-lg font-balooThambi2">
        Maximize the value of Gems you want to carry within your bag weight
        limit
      </p>
      <div className="mt-8 rounded-[30px] border border-[#CCD9E1] w-full flex-1 bg-white px-14 pt-8 pb-24 relative">
        <div className="absolute inset-x-0 mx-auto bg-white -top-4 border border-[#CCD9E1] rounded-lg py-1 px-3 font-bold text-xl font-balooThambi2 w-fit">
          <span className="text-blue">Rules:</span>{" "}
          <span className="text-[#212121]"> Objective</span>
        </div>
        <Slider
          afterChange={(current) => setCurrentSlide(current)}
          ref={slider}
          {...settings}
        >
          <InstructionSlide
            text={
              "While on a trek of the sahyadri range, you enter a mysterious cave and find..."
            }
            image={step1Img}
          />
          <InstructionSlide
            text={
              "A huge amount of treasure - gold coins, gemstones, pearls and diamonds. But sadly you can carry only a small amount with you in your knapsack"
            }
            image={step2Img}
          />
          <InstructionSlide
            text={
              "How many Gems should you carry with you in one go to ensure you get the maximum value out of them?"
            }
            image={step3Img}
          />
        </Slider>

        <div className="flex items-center justify-center gap-12 absolute -bottom-4 inset-x-0">
          {currentSlide < 2 ? (
            <>
              <button
                onClick={() => slider?.current?.slickPrev()}
                className="bg-primary w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"
              >
                <LeftArrow />
              </button>
              <button
                onClick={() => slider?.current?.slickNext()}
                className="bg-primary w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"
              >
                <RightArrow />
              </button>
            </>
          ) : (
            <Link to={RouterPath.Play}>
              <Button>Start</Button>
            </Link>
          )}
        </div>
      </div>
    </RoundedLayout>
  );
};

export default Introduction;
