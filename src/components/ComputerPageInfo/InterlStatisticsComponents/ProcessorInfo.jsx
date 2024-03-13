import React from "react";
import { useEffect, useState } from "react";
const ProcessorInfo = ({ title, gradientClass, multiplier }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="flex mb-[14px] md:mb-4 items-center">
      <div className="w-[44px] md:w-[66px] h-[40px] md:h-[59px] pt-2 md:pt-0 text-center text-zinc-300 text-[14px] md:text-[1.25em] font-normal md:font-semibold font-['SF Pro Display'] leading-[21px] md:leading-7 mr-4 md:mr-8 ">
        {title}
      </div>
      <div
        className={`${gradientClass} rounded-lg mr-4`}
        style={{
          width: `${
            windowWidth > 768
              ? 400 * parseFloat(multiplier)
              : 96 * parseFloat(multiplier)
          }px`,
          height: `${windowWidth > 768 ? "4em" : "40px"}`,
        }}
      ></div>
      <div className="text-neutral-100 text-[14px] md:text-[1.3125em] h-[30%] font-semibold md:font-semibold font-['SF Pro Display'] leading-[20px]">
        {`${multiplier}x`}
      </div>
    </div>
  );
};

export default ProcessorInfo;
