import React from "react";
import ProcessorInfo from "./ProcessorInfo";

const processors = [
  { title: "i5 12 gen", gradientClass: "white_statistics_gradient", multiplier: "1.0" },
  { title: "i5 14 gen", gradientClass: "blue_statistics_gradient", multiplier: "1.48" },
  { title: "i7 12 gen", gradientClass: "white_statistics_gradient", multiplier: "1.0" },
  { title: "i7 14 gen", gradientClass: "blue_statistics_gradient", multiplier: "1.67" },
  { title: "i9 12 gen", gradientClass: "white_statistics_gradient", multiplier: "1.0" },
  { title: "i9 14 gen", gradientClass: "blue_statistics_gradient", multiplier: "1.54" }
];

const IntelStatistics = () => {
  return (
    <div>
      <div className="max-w-[1110px] h-[759px] bg-[#111] rounded-3xl grid-bg px-[4.5rem] pt-[3.5rem] pb-[4.5rem]">
        <div className="text-neutral-100 text-[64px] font-semibold font-['SF Pro Display'] leading-[68px] mb-16">
          Быстрее на 60%
        </div>
        <div>
          {processors.map((processor, index) => (
            <div key={index}>
              <ProcessorInfo {...processor} />
              {(index + 1) % 2 === 0 && <div className="mb-[2.5rem]"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntelStatistics;
