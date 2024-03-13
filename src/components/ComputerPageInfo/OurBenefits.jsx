import React from "react";

const OurBenefits = () => {
  return (
    <div className="md:my-[7.13rem] mb-14">
      <div className="text-center first_minute_gradient text-[32px] md:text-[64px] font-bold font-['SF Pro Display'] leading-9 md:leading-[68px] mb-5 md:mb-[5rem]">
        Готов к работе с первой
        <br />
        минуты{" "}
      </div>
      <div className="w-full md:flex  justify-between">
        <div className="md:w-[526px] md:h-[427px] bg-[#F5F5F7] rounded-2xl border-neutral-500 py-[28px] md:py-[3.5rem] px-[1.5rem] md:px-[4.5rem] mb-[2rem] md:mb-0 ">
          <div className="text-zinc-900 mb-[1rem] text-[21px] md:text-[40px] font-semibold font-['SF Pro Display'] md:leading-[44px] md:mb-[1.5rem]">
            Оптимизация системы
          </div>
          <div className="text-[1rem] leading-5 md:w-[382px] text-neutral-500 md:text-[21px] font-semibold font-['SF Pro Display'] md:leading-[29px] ">
            Перед отправкой клиенту каждый
            <br />
            компьютер Pixel проходит оптимизизацию и полную настройку нашим
            специалистом с многолетним опытом для увеличения производительности
            системы и повышения стабильности ее работы.
          </div>
        </div>
        <div className="md:w-[526px] md:h-[427px] bg-[#F5F5F7] rounded-2xl border-neutral-500 py-[28px] md:py-[3.5rem] px-[1.5rem] md:px-[4.5rem]">
          <div className="text-zinc-900 mb-[1rem] text-[21px] md:text-[40px] font-semibold font-['SF Pro Display'] md:leading-[44px] md:mb-[1.5rem]">
            Предустановка нужных программ
          </div>
          <div className="text-[1rem] leading-5 md:w-[382px] text-neutral-500 md:text-[21px] font-semibold font-['SF Pro Display'] md:leading-[29px]">
            При добавлении компьютера Pixel в корзину вам будет предложено
            выбрать нужные программы из списка для предустановки, чтобы вы
            смогли приступить к работе сразу после первого включения системы.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
