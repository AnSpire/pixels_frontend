import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidesData = [
  {
    id: 1,
    title: "Видеокарта",
    subTitle: "RTX 4060 TI",
    price: "- 28 700 ₽",
    discount: 0.67,
  },
  {
    id: 2,
    title: "Видеокарта",
    subTitle: "RTX 4070",
    price: "- 23 400 ₽",
    discount: 0.85,
  },
  {
    id: 3,
    title: "Видеокарта",
    subTitle: "RTX 4070 TI",
    price: "+ 0 ₽",
    discount: 1.0,
  },
  {
    id: 4,
    title: "Видеокарта",
    subTitle: "RTX 4080",
    price: "+ 12 300 ₽",
    discount: 1.42,
  },
];

const Popup = ({ onClose }) => {
  const [chosenId, setChosenId] = useState(3);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200px" // Новая ширина
        height="200px" // Новая высота
        viewBox="0 0 40 40" // Измененный viewBox
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="20"
          transform="rotate(-180 20 20)"
          fill="#0071E3"
        />
        <path
          d="M23.6567 11.3721C23.2005 10.876 22.465 10.876 22.0088 11.3721L14.2723 19.7862C13.9092 20.1811 13.9092 20.8189 14.2723 21.2138L22.0088 29.6279C22.465 30.124 23.2005 30.124 23.6567 29.6279C24.1129 29.1318 24.1129 28.3319 23.6567 27.8357L16.9163 20.4949L23.666 13.1541C24.1129 12.6681 24.1129 11.8581 23.6567 11.3721Z"
          fill="#CCE3F9"
        />
      </svg>
    ),
    nextArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx="20" cy="20" r="20" fill="#0071E3" />
        <path
          d="M16.3433 28.6279C16.7995 29.124 17.535 29.124 17.9912 28.6279L25.7277 20.2138C26.0908 19.8189 26.0908 19.1811 25.7277 18.7862L17.9912 10.3721C17.535 9.87597 16.7995 9.87597 16.3433 10.3721C15.8871 10.8682 15.8871 11.6681 16.3433 12.1643L23.0837 19.5051L16.334 26.8459C15.8871 27.3319 15.8871 28.1419 16.3433 28.6279Z"
          fill="#CCE3F9"
        />
      </svg>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="popup py-[3rem] rounded-[1.5rem]">
      <div className="relative w-full h-full">
        <div className="text-center text-zinc-900 text-[40px] font-semibold font-['SF Pro Display'] leading-[44px] mb-[2.44rem]">
          Pixel Graphics +
        </div>
        <div className="flex w-full mx-auto h-[16.6250rem] justify-center items-center">
          <Slider {...settings} className="flex h-full popup-slider">
            {slidesData.map((slide) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 w-full h-[16.625rem] ${
                  slide.id === chosenId
                    ? "bg-[#F5F5F7] border border-[#1D1D1F]"
                    : "bg-[#1D1D1F] border border-[#1D1D1F]"
                } rounded-lg px-4`}
              >
                <div className="w-32 text-center text-zinc-500 text-[17px] font-normal font-['SF Pro Display'] leading-[21px] w-[80%] mx-auto mb-2 mt-3">
                  {slide.title}
                </div>
                <div className={`w-32 text-center ${slide.id === chosenId? "text-neutral-500": "text-neutral-100"} text-[17px] font-semibold font-['SF Pro Display'] uppercase leading-[21px] w-[80%] mx-auto whitespace-nowrap mb-[3.25rem]`}>
                  {slide.subTitle}
                </div>
                <div className="w-full h-[138px] flex-col justify-center items-center gap-3 inline-flex mx-auto border-t border-[#86868B] pt-[0.75rem]">
                  <div className="w-32 h-[126px] relative">
                    <div className="w-32 h-[29px] left-0 top-[75px] absolute">
                      <div className="w-32 h-[29px] left-0 top-0 absolute bg-neutral-100 rounded border border-[#1D1D1F] cursor-pointer" onClick={() => setChosenId(slide.id)}
 />
                      <div className="left-[31px] top-[6px] absolute text-center text-zinc-900 text-[17px] font-normal font-['SF Pro Display'] leading-[17px] cursor-pointer " onClick={() => setChosenId(slide.id)}
>
                        {slide.id === chosenId ? "Выбрано" : "Выбрать"}
                      </div>
                    </div>
                    <div className="w-32 h-[29px] left-0 top-[38px] absolute">
                      <div className="w-32 h-[29px] left-0 top-0 absolute rounded border border-zinc-500" />
                      <div className="left-[5px] top-[6px] absolute text-center text-zinc-300 text-[17px] font-semibold font-['SF Pro Display'] leading-[17px] w-full flex justify-center">
                        <div>{slide.price}</div>
                      </div>
                    </div>
                    <div className="w-32 h-[30px] left-0 top-0 absolute">
                      <div
                        className={`w-32 h-[30px] left-0 top-0 absolute ${
                          slide.discount > 1
                            ? "growth_gradient"
                            : slide.id === chosenId
                            ? "growth_gradient__chosen"
                            : "bg-gradient-to-r from-zinc-900 to-blue-200"
                        } rounded-[3px]`}
                      />
                      <div
                        className={`right-[10px] top-[6px] absolute text-right text-zinc-900 text-[17px] font-semibold font-['SF Pro Display'] leading-[17px]`}
                      >
                        {parseFloat(slide.discount).toFixed(1)}x
                      </div>
                    </div>
                    <div className="left-[29px] top-[112px] absolute text-center text-zinc-500 text-sm font-normal font-['SF Pro Display'] underline leading-[14px]">
                      Подробнее
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button
          className="my-10 absolute top-[-60px] right-[20px]"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
          >
            <path
              d="M10.6066 10.6064L31.8198 31.8196"
              stroke="#6E6E73"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M31.8197 10.6064L10.6065 31.8196"
              stroke="#6E6E73"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Popup;
