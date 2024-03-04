import React from "react";

const OurBenefits = () => {
  return (
    <div className="my-[7.13rem]">
      <div className="text-center first_minute_gradient text-[64px] font-bold font-['SF Pro Display'] leading-[68px] mb-[5rem]">
        Готов к работе с первой
        <br />
        минуты{" "}
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[526px] h-[427px] bg-neutral-100 rounded-2xl border-neutral-500 py-[3.5rem] px-[4.5rem]">
          <div className="text-zinc-900 text-[40px] font-semibold font-['SF Pro Display'] leading-[44px] mb-[1.5rem]">
            Оптимизация
            <br />
            системы
          </div>
          <div className="w-[382px] text-neutral-500 text-[21px] font-semibold font-['SF Pro Display'] leading-[29px] ">
            Перед отправкой клиенту каждый
            <br />
            компьютер Pixel проходит оптимизизацию и полную настройку нашим
            специалистом с многолетним опытом для увеличения производительности
            системы и повышения стабильности ее работы.
          </div>
        </div>
        <div className="w-[526px] h-[427px] bg-neutral-100 rounded-2xl border-neutral-500 py-[3.5rem] px-[4.5rem]">
          <div className="text-zinc-900 text-[40px] font-semibold font-['SF Pro Display'] leading-[44px] mb-[1.5rem]">
            Предустановка нужных программ
          </div>
          <div className="w-[382px] text-neutral-500 text-[21px] font-semibold font-['SF Pro Display'] leading-[29px]">
          При добавлении компьютера Pixel
в корзину вам будет предложено выбрать нужные программы из списка для предустановки, чтобы вы смогли приступить к работе сразу после первого включения системы.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
