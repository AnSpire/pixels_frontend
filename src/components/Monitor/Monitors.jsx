import React from "react";
import "../../index.css";
import "./Monitor.css";
import AboutUs from "../AboutUs";
import MonitorGrid from "./MonitorGrid";
const Monitors = () => {
  // Пример данных о мониторах

  return (
    <div>
      <div>
        <div className="container_1110 text-neutral-500 text-xs font-normal font-['SF Pro Display'] leading-none mb-8 ">
          Главная / Мониторы
        </div>
        <div className="text-center text-zinc-900 text-5xl font-semibold font-['SF Pro Display'] leading-[52px] mb-8">
          Мониторы
        </div>
        <div className="w-full border-b border-b-[#1D1D1F;] mb-[72px] flex">
          <div className="w-full container_1110 flex justify-between pb-6">
            <div className="flex w-[100px] justify-center items-center">
              <div className="mr-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                >
                  <path
                    d="M1 1L19 1"
                    stroke="#1D1D1F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 6L15 6"
                    stroke="#1D1D1F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 11L11 11"
                    stroke="#1D1D1F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-right text-zinc-900 text-[17px] font-normal font-['SF Pro Display'] leading-[25px]">
                Фильтры
              </div>
            </div>
            <div className="flex">
              <div className="text-right text-zinc-900 text-[17px] font-normal font-['SF Pro Display'] leading-[25px] mr-[24px]">
                4 товара
              </div>
              <div className="flex justify-center items-center">
                <div className="text-right text-zinc-900 text-[17px] font-normal font-['SF Pro Display'] leading-[25px] mr-2">
                  Популярные
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                  >
                    <path
                      d="M0.254596 0.240318C-0.0848657 0.559648 -0.0848657 1.07448 0.254596 1.39381L6.01159 6.80938C6.28177 7.06354 6.71822 7.06354 6.98841 6.80938L12.7454 1.39381C13.0849 1.07448 13.0849 0.559647 12.7454 0.240317C12.4059 -0.079012 11.8586 -0.079012 11.5192 0.240317L6.49654 4.95857L1.47389 0.233802C1.14135 -0.0790105 0.58713 -0.0790115 0.254596 0.240318Z"
                      fill="#1D1D1F"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <MonitorGrid></MonitorGrid>
        </div>
      </div>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Monitors;
