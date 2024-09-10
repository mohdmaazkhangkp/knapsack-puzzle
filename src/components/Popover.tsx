import * as Popover from "@radix-ui/react-popover";
import { ReactNode, useState } from "react";

interface PopoverComponentProps {
  children: ReactNode;
  steps: string[];
  title: string;
}

const PopoverComponent: React.FC<PopoverComponentProps> = ({
  children,
  steps,
  title,
}) => {
  const [stepNumber, setStepNumber] = useState(1);
  return (
    <Popover.Root onOpenChange={() => setStepNumber(1)}>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="left"
          className="PopoverContent w-[292px] bg-[#E6F5FF] rounded-[20px] pr-2 pb-3 pt-6 pl-5"
        >
          <p className="font-balooThambi text-2xl text-[#023152] text-center w-full">
            {title}
          </p>
          <Popover.Close>
            <span className="rotate-45 text-primary text-5xl font-semibold absolute right-4 top-4">
              +
            </span>
          </Popover.Close>
          <p className="font-medium text-lg text-[#00538E] pr-8">
            {steps[stepNumber - 1]}
          </p>

          <div className="flex justify-between mt-8 items-center">
            <div className="font-semibold text-2xl text-[#212121]">
              <span className="text-[#00538E] font-extrabold text-[32px]">
                {stepNumber}
              </span>{" "}
              {`of ${steps.length}`}
            </div>
            <button
              onClick={() => setStepNumber((prev) => prev + 1)}
              disabled={stepNumber - 1 === steps.length - 1}
              className={` rounded-[10px] font-balooThambi px-6 py-2 text-white ${
                stepNumber - 1 === steps.length - 1
                  ? "bg-[#D1D1D1]"
                  : "bg-primary"
              }`}
            >
              Next
            </button>
          </div>

          <Popover.Arrow className="popoverArrow" width={18} height={12} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopoverComponent;
