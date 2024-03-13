import React from "react";

const DDR5Info = () => {
  // Данные для каждого блока
  const stats = [
    {
      title: "Мощнее на",
      value: "2.0x",
      description: "Увеличивает мощность всей системы",
    },
    { title: "Быстрее на", value: "2.6x", description: "До 8400 МТ/c" },
    { title: "Объем памяти", value: "2.0x", description: "До 256GB" },
  ];

  return (
    <div>
      <div className=" max-w-[69.375em]  md:h-[846px] bg-[#111] rounded-3xl my-[3.5rem] md:my-[7.13em] pt-[35px] pb-[40px] md:pb-0 md:pt-[6em] px-[24px] md:px-[4.5em]">
        <div className="text-center ram_gradient text-[32px] md:text-[64px] font-['SF_Pro_Display'] font-semibold  leading-[1.25em]">
          DDR5: переход на новый
          <br />
          уровень скорости
        </div>
        <div className="w-full text-zinc-500 md:text-[28px] text-[1em] font-['SF_Pro_Display'] mt-5 mb-7  md:mt-[3em] md:mb-[3.5em] leading-[1.25em] md:leading-[35px]">
          С невероятной пропускной способностью и низким энергопотреблением,
          оперативная память обеспечивает надежность и производительность на
          высочайшем уровне. DDR5 поможет вам максимизировать скорость обработки
          данных, улучшить работу с многозадачностью и оптимизировать ваш
          профессиональный творческий процесс.
        </div>
        <div className="flex justify-right w-full md:overflow-hidden overflow-x-scroll ">
          {stats.map((stat, index) => (
            <div
              className="flex mr-[3.375rem] md:mr-[9em] mb-[1em] last:mr-0 "
              key={index}
            >
              <div>
                <div className="text-zinc-500 text-[12px] md:text-2xl font-semibold font-['SF Pro Display'] leading-7 whitespace-nowrap">
                  {stat.title}
                </div>
                <div className="text-neutral-100 text-[40px] md:text-[80px] font-semibold font-['SF Pro Display'] leading-[44px] md:leading-[80px]">
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-[12px] md:text-2xl font-semibold font-['SF Pro Display'] leading-[14px] md:leading-7 w-[86px] md:w-auto">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DDR5Info;
