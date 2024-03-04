import React from "react";

const ProcessorInfo = ({ title, gradientClass, multiplier }) => {
  return (
    <div className="flex mb-4">
      <div className="w-[66px] h-[59px] text-center text-zinc-300 text-[21px] font-semibold font-['SF Pro Display'] leading-7 mr-8">
        {title}
      </div>
      <div
        className={`${gradientClass} rounded-lg mr-4`}
        style={{ width: `${400 * parseFloat(multiplier)}px`, height: "4rem" }}
      ></div>
      <div className="text-neutral-100 text-[28px] font-semibold font-['SF Pro Display'] leading-loose">
        {`${multiplier}x`}
      </div>
    </div>
  );
};

export default ProcessorInfo;
