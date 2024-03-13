import React from "react";

const Ports = () => {
  return (
    <div className="mb-[10rem]">
      <div className="w-[1110px] text-zinc-900 text-5xl font-semibold font-['SF Pro Display'] leading-[52px] mb-[4rem]">
        Создайте свое идеальное рабочие место, благодаря наличию множества
        портов в<br />
        каждой системе от Pixel pc
      </div>
      <div className="mb-[4rem]">
        <div className="text-sky-600 text-[21px] font-normal font-['SF Pro Display'] leading-[29px] py-[0.72rem] border-b-2 border-[#6E6E73;] my-[1.5rem]">
          Порты спереди
        </div>
        <div className="flex my-[2.5rem]">
          <div className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display'] leading-loose mr-[7.5rem] whitespace-nowrap">
            USB порты
          </div>
          <div className="w-[858px]">
            <span className="text-zinc-900 text-[28px] font-semibold font-['SF Pro Display'] leading-loose">
              USB 3.2 Gen1 Type-A{" "}
            </span>
            <span className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display'] leading-loose">
              x2
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display'] leading-loose mr-[3.94rem] whitespace-nowrap">
            Аудиоразъемы
          </div>
          <div className="w-[858px]">
            <span className="text-zinc-900 text-[28px] font-semibold font-['SF Pro Display'] leading-loose">
              3.5 мм jack (аудио), 3.5 мм jack (микрофон)
            </span>
            <span className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display'] leading-loose">
              x2
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sky-600 text-[21px] font-normal font-['SF Pro Display'] leading-[29px] pb-[0.72rem] border-b-2 border-[#6E6E73;] mb-[1.5rem]">
          Порты сзади
        </div>
        <div className="flex my-[2.5rem]">
          <div className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display'] mr-[7.5rem] whitespace-nowrap">
            USB порты
          </div>
          <div className="w-[34.8125rem]">
            <span className=" text-zinc-900 text-[28px] font-semibold font-['SF Pro Display'] ">
              USB 2.0 Type-A{" "}
              <span className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display']">
                x2
              </span>
              , USB 3.2 Gen1 Type-A{" "}
              <span className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display']">
                x2
              </span>
              , USB 3.2 Gen2 Type-C{" "}
              <span className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display'] ">
                x1
              </span>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display'] mr-[3.5rem] whitespace-nowrap">
            Видеоразъемы 
          </div>
          <div className="w-[858px] flex items-center">
            <span className="text-zinc-900 text-[28px] font-semibold font-['SF Pro Display']">
              DisplayPort 1.4a{" "}
              <span className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display']">
                x3
              </span>
              , HDMI 2.1{" "}
              <span className="text-neutral-500 text-[28px] font-semibold font-['SF Pro Display']">
                x1
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ports;
