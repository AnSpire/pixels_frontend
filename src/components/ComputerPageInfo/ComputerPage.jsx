import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ChooseComponents from "./ChooseComponentInfo/ChooseComponents";
import RTXInfo from "./RTXComponents/RTXInfo";
import IntelInfo from "./IntelInfo/IntelInfo";
import IntelStatistics from "./InterlStatisticsComponents/IntelStatistics";
import DDR5Info from "./DDR5Info";
import OurBenefits from "./OurBenefits";
import Ports from "./Ports";
import AboutUs from "../AboutUs";
import Characteristic from "../CharacteristicInfo/Characteristic";
import "../../index.css";
import Popup from "./ChooseComponentInfo/Popup";
import { useEffect } from "react";
import SmChooseComponent from "./ChooseComponentInfo/SmChooseComponent";
const ComputerPage = () => {
  const params = useParams();
  const [selectedOption, setSelectedOption] = useState("Описание");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };
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
    <div className="relative z-0 ">
      <div className={`${isPopupOpen ? "backdrop_my" : ""}`}>
        {isPopupOpen && <Popup onClose={closePopup} />}
      </div>
      <div className="container_1110 relative z-0 md:flex md:flex-col justify-center items-center md:block relative md:pt-[7.81rem]">
        <h6 className="md:absolute md:top-0 md:left-0 text-xs pb-[0.62rem] border-b border-[#D2D2D7] md:border-0 mb-[1.5rem] md:mb-[3.5rem] text-[#6E6E73] w-full text-center md:w-[13.7rem]">
          Главная / Компьютеры / {params.name.replaceAll("-", " ")}
        </h6>
        <div className="w-full px-[1.25rem] md:px-0 ">
        {windowWidth < 768 ? <SmChooseComponent /> : <ChooseComponents
            onOpen={openPopup}
            onClose={closePopup}
            isPopupOpen={isPopupOpen}
          />}
          
        </div>
      </div>
      <div className="w-[100%] h-14 border-b-2 border-t-2 border-zinc-300 my-[4rem] flex items-center relative z-0">
        <div className="container_1110 flex w-full ">
          <div
            className={`text-neutral-500 text-[17px] font-semibold ${
              selectedOption === "Описание"
                ? "text-zinc-900"
                : "text-neutral-500"
            } font-['SF Pro Display'] leading-[25px] cursor-pointer mr-[4.5rem] transition transition-colors duration-100`}
            onClick={() => setSelectedOption("Описание")}
          >
            Описание
          </div>
          <div
            className={`text-neutral-500 text-[17px] font-semibold ${
              selectedOption === "Характеристики"
                ? "text-zinc-900"
                : "text-neutral-500"
            } font-['SF Pro Display'] leading-[25px] cursor-pointer transition transition-colors duration-100 `}
            onClick={() => setSelectedOption("Характеристики")}
          >
            Характеристики
          </div>
        </div>
      </div>

      {selectedOption === "Описание" && (
        <div className="container_1110 opacity-100 transition-opacity duration-500 z-0">
          <RTXInfo />
          <IntelInfo />
          <IntelStatistics />
          <DDR5Info />
          <OurBenefits />
          <Ports />
        </div>
      )}
      {selectedOption === "Характеристики" && (
        <div className="container_1110 mb-10 opacity-100 transition-opacity duration-500">
          <Characteristic />
        </div>
      )}

      <AboutUs />
    </div>
  );
};

export default ComputerPage;
