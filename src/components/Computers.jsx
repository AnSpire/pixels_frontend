import React from "react";

const Computers = () => {
  return (
    <div>
      <div className="container_1110">
        <h6 className="relative top-0 left-0 font text-xs color text-[#6E6E73]">
          {" "}
          Главная / Компьютеры
        </h6>
        <h1 className="my-8 font-medium  flex justify-center items-center text-[52px] h-[52px]">
          Компьютеры
        </h1>
      </div>
      <div className="flex pb-8 border-b-[1px] border-solid border-black">
        <div className="flex container_1110 w-full justify-between items-center text-[17px]">
          <div>Фильтры</div>
          <div className="flex">
            <div className=" pr-8">4 товара</div>
            <div>Популярные</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Computers;
