import React, { useState } from "react";
import Popup from "./Popup";
import "./Popup.css"
const ComponentInfo = ({onOpen, onClose, isPopupOpen}) => {
  const components = [
    {
      title: "Видеокарта",
      info: "RTX 4080 TI",
      buttonLabel: "Выбрать",
      gradientClass: "bg-gradient-to-tr from-black to-zinc-700",
      s: "choose_item__container",
    },
    {
      title: "Процессор",
      info: "INTERL CORE i7 13700kf",
      buttonLabel: "Выбрать",
      gradientClass: "gradient_blue",
      s: "choose_item__container ",
    },
    {
      title: "Оперативная память",
      info: "32GB DDR5 5600Mhz",
      buttonLabel: "Выбрать",
      gradientClass: "gradient_green",
      s: "relative w-[10rem] h-[172px] rounded-lg border-2 border-zinc-900 flex flex-col items-center pt-[0.75rem]",
    },
    {
      title: "Внутренний накопитель",
      info: "1024GB SSD",
      buttonLabel: "Выбрать",
      gradientClass: "gradient_purple",
      s: "choose_item__container",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-wrap gap-[1.87rem] choose_component">
        {components.map((component, index) => (
          <div
            key={index}
            className={`${component.s} ${component.gradientClass}`}
          >
            <div className="text-center text-white text-[17px] font-normal font-['SF Pro Display'] leading-[21px]">
              {component.title}
            </div>
            <div className="component_info item_center">{component.info}</div>
            <div className="peek_button__container">
              <div className="peek_button" onClick={onOpen}>{component.buttonLabel} </div>
            </div>
          </div>
        ))}
        
        <div className="w-[21.875rem] h-[170px] bg-zinc-900 rounded-lg border-black px-[15px] pt-[27px] pb-[12px] flex flex-col justify-between border-2 border-zinc-900">
              <div className="w-[312px] h-[45px] rounded-lg border-2 border-zinc-500 flex items-center justify-between pl-[15px] pr-[10px]">
                <div className="text-neutral-100 text-[21px] font-semibold font-['SF Pro Display'] leading-[21px]">
                  145 460 ₽
                </div>
                <div className="flex">
                  <div className="text-right text-zinc-500 text-[17px] font-normal font-['SF Pro Display'] leading-[17px] mr-[8px]">
                    +140 050 бонусов
                  </div>
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-full border border-zinc-500" />
                    <div className="w-[1.33px] h-[5.33px] left-[7.33px] top-[6.67px] absolute bg-zinc-500 rounded-[1px]" />
                    <div className="w-[1.33px] h-[1.33px] left-[7.33px] top-[4px] absolute bg-zinc-500 rounded-[1px]" />
                  </div>
                </div>
              </div>
              <div className="w-[312px] h-12 bg-neutral-100 rounded-lg border-black flex items-center">
                <div className="text-center text-zinc-900 text-[21px] font-semibold font-['SF Pro Display'] leading-[21px] mx-auto">
                  Добавить в корзину
                </div>
              </div>
              <div className="w-[312px] flex">
                <div className="mr-2">
                  <svg
                    width="22"
                    height="15"
                    viewBox="0 0 22 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="&#208;&#156;&#208;&#176;&#209;&#136;&#208;&#184;&#208;&#189;&#208;&#176;/&#208;&#157;&#208;&#181;&#208;&#176;&#208;&#186;&#209;&#130;&#208;&#184;&#208;&#178;">
                      <path
                        id="Union"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.34473 0.818359C1.96402 0.818359 0.844727 1.93764 0.844727 3.31836V10.7729C0.844727 12.1536 1.96402 13.2729 3.34473 13.2729H3.81958C4.06551 14.2622 5.02552 15.0002 6.17231 15.0002C7.31911 15.0002 8.27911 14.2622 8.52504 13.2729H14.1644C14.4103 14.2622 15.3703 15.0002 16.5171 15.0002C17.6675 15.0002 18.6299 14.2576 18.8722 13.2636C20.1512 13.1536 21.1551 12.0805 21.1551 10.7729V9.07736C21.1551 8.46613 20.9311 7.87607 20.5256 7.41874L18.5226 5.15974C18.0481 4.62464 17.3672 4.31836 16.652 4.31836H14.9482V3.31836C14.9482 1.93765 13.8289 0.818359 12.4482 0.818359H3.34473ZM14.9482 5.31836V11.0803C15.3701 10.747 15.9181 10.5456 16.5171 10.5456C17.6582 10.5456 18.6144 11.2762 18.8661 12.2582C19.5946 12.1556 20.1551 11.5297 20.1551 10.7729V9.07736C20.1551 8.71062 20.0207 8.35659 19.7774 8.08218L17.7744 5.82319C17.4897 5.50213 17.0811 5.31836 16.652 5.31836H14.9482ZM8.52504 12.2729H13.9482V3.31836C13.9482 2.48993 13.2766 1.81836 12.4482 1.81836H3.34473C2.5163 1.81836 1.84473 2.48993 1.84473 3.31836V10.7729C1.84473 11.6013 2.5163 12.2729 3.34473 12.2729H3.81958C4.06551 11.2836 5.02552 10.5456 6.17231 10.5456C7.31911 10.5456 8.27911 11.2836 8.52504 12.2729ZM7.58611 12.7729C7.58611 13.3765 7.03037 14.0002 6.17231 14.0002C5.31426 14.0002 4.75852 13.3765 4.75852 12.7729C4.75852 12.1693 5.31426 11.5456 6.17231 11.5456C7.03037 11.5456 7.58611 12.1693 7.58611 12.7729ZM16.5171 14.0002C17.3752 14.0002 17.9309 13.3765 17.9309 12.7729C17.9309 12.1693 17.3752 11.5456 16.5171 11.5456C15.6591 11.5456 15.1033 12.1693 15.1033 12.7729C15.1033 13.3765 15.6591 14.0002 16.5171 14.0002Z"
                        fill="#86868B"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-zinc-500 text-sm font-normal font-['SF Pro Display'] leading-tight">
                  Доставка после оплаты 5-8 дней
                </div>
              </div>
            </div>
          </div>
      </div>
  );
};

export default ComponentInfo;
