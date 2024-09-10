import { ReactNode } from "react";

const RoundedLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="px-2 p-12 sm:p-12 flex-1 flex flex-col justify-center items-center">
      <div
        className={`rounded-[30px] bg-[#F4F4F4] flex-1 flex flex-col w-full max-w-screen-xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default RoundedLayout;
