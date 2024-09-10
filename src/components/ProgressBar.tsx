const ProgressBar = ({
  color,
  widthPercent,
}: {
  color: string;
  widthPercent: number;
}) => {
  return (
    <div className={`w-full h-4 rounded border-2 border-[#9E9C9C] `}>
      <div
        className={`h-full`}
        style={{
          width: widthPercent <= 100 ? `${widthPercent}%` : "100%",
          backgroundColor: color
        }}
      />
    </div>
  );
};

export default ProgressBar;
