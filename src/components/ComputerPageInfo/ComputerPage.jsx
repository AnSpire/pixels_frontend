import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ChooseComponents from "./ChooseComponentInfo/ChooseComponents";
import RTXInfo from "./RTXComponents/RTXInfo";
import IntelInfo from "./IntelInfo/IntelInfo";
import IntelStatistics from "./InterlStatisticsComponents/IntelStatistics";
import DDR5Info from "./DDR5Info";
import OurBenefits from "./OurBenefits";
import Ports from "./ports/Ports";
import AboutUs from "../AboutUs";
import Characteristic from "../CharacteristicInfo/Characteristic";
import SmCharacteristic from "../CharacteristicInfo/SmCharacteristic";
import "../../index.css";
import Popup from "./ChooseComponentInfo/Popup";
import { useEffect } from "react";
import SmChooseComponent from "./ChooseComponentInfo/SmChooseComponent";
import SmPorts from "./ports/SmPorts";
import { CSSTransition } from "react-transition-group";
import "../../Animation.css";

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
    <CSSTransition
      in={true} // Установите true для показа компонента, false для скрытия
      appear={true} // Установите true, чтобы выполнить анимацию при первом отображении компонента
      timeout={500} // Укажите время анимации в миллисекундах
      classNames="your-animation" // Укажите имя класса для анимации
    >
      <div className="relative z-0 ">
        <div className={`${isPopupOpen ? "backdrop_my" : ""}`}>
          {isPopupOpen && <Popup onClose={closePopup} />}
        </div>
        <div className="container_1110 relative z-0 md:flex md:flex-col justify-center items-center md:block relative md:pt-[7.81rem] ">
          <h6 className="md:absolute md:top-0 md:left-0 text-xs pb-[0.62rem] border-b border-[#D2D2D7] md:border-0 mb-[1.5rem] md:mb-[3.5rem] text-[#6E6E73] w-full text-center md:w-[13.7rem]">
            Главная / Компьютеры / {params.name.replaceAll("-", " ")}
          </h6>
          <div className="w-full px-[1.25rem] md:px-0 ">
            {windowWidth < 768 ? (
              <SmChooseComponent />
            ) : (
              <ChooseComponents
                onOpen={openPopup}
                onClose={closePopup}
                isPopupOpen={isPopupOpen}
              />
            )}
          </div>
        </div>
        {windowWidth < 768 ? (
          <div className="w-full px-5 mt-8">
            <div className="flex p-[21px] justify-between border-b border-[#D2D2D7] items-center w-full">
              <a href={"#description"}>
                <div
                  onClick={() => setSelectedOption("Описание")}
                  className="text-zinc-900 text-[17px] font-semibold font-['SF Pro Display'] leading-[21px]"
                >
                  Описание
                </div>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
              >
                <path
                  d="M0.240319 13.7258C0.559649 14.0914 1.07449 14.0914 1.39382 13.7258L6.80938 7.52598C7.06354 7.23501 7.06354 6.76499 6.80938 6.47402L1.39381 0.274181C1.07448 -0.091393 0.559647 -0.0913929 0.240318 0.274181C-0.0790112 0.639755 -0.0790111 1.22915 0.240318 1.59473L4.95857 7.00373L0.233803 12.4127C-0.0790092 12.7709 -0.0790101 13.3677 0.240319 13.7258Z"
                  fill="#1D1D1F"
                />
              </svg>
            </div>
            <div
              onClick={() => setSelectedOption("Характеристики")}
              className="flex p-[21px] justify-between border-b border-[#D2D2D7] items-center w-full"
            >
              <div className="text-zinc-900 text-[17px] font-semibold font-['SF Pro Display'] leading-[21px]">
                Характеристики
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
              >
                <path
                  d="M0.240319 13.7258C0.559649 14.0914 1.07449 14.0914 1.39382 13.7258L6.80938 7.52598C7.06354 7.23501 7.06354 6.76499 6.80938 6.47402L1.39381 0.274181C1.07448 -0.091393 0.559647 -0.0913929 0.240318 0.274181C-0.0790112 0.639755 -0.0790111 1.22915 0.240318 1.59473L4.95857 7.00373L0.233803 12.4127C-0.0790092 12.7709 -0.0790101 13.3677 0.240319 13.7258Z"
                  fill="#1D1D1F"
                />
              </svg>
            </div>
          </div>
        ) : (
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
        )}

        {selectedOption === "Описание" && (
          <div
            id="description"
            className="container_1110 opacity-100 transition-opacity duration-500 z-0"
          >
            <RTXInfo />
            <IntelInfo />
            <IntelStatistics />
            <DDR5Info />
            <OurBenefits />
            {windowWidth < 768 ? <SmPorts /> : <Ports />}
          </div>
        )}
        {selectedOption === "Характеристики" && (
          <div className="mb-10 opacity-100 transition-opacity duration-500">
            {windowWidth < 768 ? <SmCharacteristic /> : <Characteristic />}
          </div>
        )}

        <AboutUs />
      </div>
    </CSSTransition>
  );
};

export default ComputerPage;
