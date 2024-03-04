import React from "react";
import "./ChooseComponent.css";
import ArrowTop from "../../../static/svgs/ArrowTop.jsx";
import ArrowBot from "../../../static/svgs/ArrowBot.jsx";
import ComponentInfo from "./ComponentInfo"
const ChooseComponents = ({onOpen, onClose, isPopupOpen}) => {
  const elements = Array.from({ length: 4 });
  return (
    <div className="md:flex md:max-w-[1110px]">
      <div className="md:flex w-1/2 pr-3 items-center">
        <div className=" flex flex-col w-20 justify-center items-center mr-[2.5rem]">
          <div className="w-1/4 mb-[1.25rem]">
            <ArrowTop></ArrowTop>
          </div>
          <div>
            {elements.map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 bg-zinc-300 rounded-lg mb-[1.25rem]"
              />
            ))}
          </div>
          <ArrowBot></ArrowBot>
        </div>
        <div className="px-auto max-w-[419px] max-h-[396px]">
          <img className="w-full h-auto object-contain;" src="/images/computer.png" />
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-zinc-900 text-[40px] font-semibold font-['SF Pro Display'] leading-[44px] w-[18.3rem] mb-[2.5rem]">
          Pixel Graphics +
        </div>
        <ComponentInfo  onOpen={onOpen} onClose={onClose} isPopupOpen={isPopupOpen}/>
      </div>
    </div>
  );
};

export default ChooseComponents;
