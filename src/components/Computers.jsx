import React from "react";
import ComputerGradientImage from "../static/images/ComputerGradient.png";
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";

const Computers = () => {
  // Массив объектов с информацией о компьютерах
  const computers = [
    {
      name: "Pixel Graphics Pro",
      processor: "Intel core i7 14700kf",
      graphicsCard: "RTX 4070",
      ram: "32gb / ddr5 / 5600mhz",
      storage: "512gb SSD",
      price: "от 187 520 ₽",
    },
    {
      name: "Pixel Graphics Pro",
      processor: "Intel core i7 14700kf",
      graphicsCard: "RTX 4070",
      ram: "32gb / ddr5 / 5600mhz",
      storage: "512gb SSD",
      price: "от 187 520 ₽",
    },
    {
      name: "Pixel Graphics Pro",
      processor: "Intel core i7 14700kf",
      graphicsCard: "RTX 4070",
      ram: "32gb / ddr5 / 5600mhz",
      storage: "512gb SSD",
      price: "от 187 520 ₽",
    },
    {
      name: "Pixel Graphics Pro",
      processor: "Intel core i7 14700kf",
      graphicsCard: "RTX 4070",
      ram: "32gb / ddr5 / 5600mhz",
      storage: "512gb SSD",
      price: "от 187 520 ₽",
    },
    // Добавьте еще объекты для других компьютеров, если нужно
  ];

  return (
    <div>
      {/* Вывод компьютеров в цикле */}
      {computers.map((computer, index) => (
        <div key={index} className="container_1110 flex mb-[56px]">
          <div
            className="w-[872px] h-[350px] rounded-2xl mr-[35px] flex justify-center items-center"
            style={{
              backgroundImage: `url(${ComputerGradientImage})`,
            }}
          >
            <div className="min-w-[320px] h-[302px]">
              <img src="/images/computer.png" alt="" />
            </div>
            <div className="w-full h-[302px]">
              <div className="text-neutral-100 text-[40px] font-semibold font-['SF Pro Display'] leading-[44px] mb-[20px] font-normal">
                {computer.name}
              </div>
              <div className="mb-[20px]">
                {/* Блок характеристик компьютера */}
                {Object.entries(computer).map(
                  ([key, value]) =>
                    key !== "name" &&
                    key !== "price" && (
                      <div
                        key={key}
                        className="flex justify-between pr-[67px] pb-[10px] border-b-2 border-b-[#1D1D1F] mb-[10px]"
                      >
                        <div className="text-neutral-100 text-[17px] font-normal font-['SF Pro Display'] leading-[25px]">
                          {key === "ram"
                            ? "Оперативная память"
                            : key === "storage"
                            ? "Внутренний накопитель"
                            : key}
                        </div>
                        <div className="text-neutral-100 text-[17px] font-semibold font-['SF Pro Display'] uppercase leading-[25px]">
                          {value}
                        </div>
                      </div>
                    )
                )}
              </div>
              <div className="flex">
                {/* Блок цены */}
                <div className="w-[169px] h-[45px] px-6 py-2 bg-zinc-900 rounded-lg justify-start items-center gap-2.5 inline-flex mr-[68px]">
                  <div className="text-neutral-100 text-[21px] font-semibold font-['SF Pro Display'] leading-[29px]">
                    {computer.price}
                  </div>
                </div>
                <div className="w-40 h-[45px] px-6 py-2 bg-neutral-100 rounded-lg border-2 border-zinc-900 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-zinc-900 text-[21px] font-semibold font-['SF Pro Display'] leading-[29px]">
                    <Link to="/Computers/Pixel-Graphics-+">Подробнее</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[206px] h-[350px] bg-zinc-900 rounded-2xl border-2 border-zinc-900" />
        </div>
      ))}
      <AboutUs></AboutUs>
    </div>
  );
};

export default Computers;
