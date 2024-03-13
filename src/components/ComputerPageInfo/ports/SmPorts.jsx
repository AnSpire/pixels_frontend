import React from "react";

const SmPorts = () => {
  return (
    <div className="w-full mb-16">
      <div className="mb-4 text-center text-sky-600 text-base font-normal pb-[10px] border-b border-b-[#6E6E73] leading-none">
        Порты спереди
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="mb-[10px] text-center text-zinc-900 text-[21px] font-semibold font-['SF Pro Display'] leading-[27px]">
          USB порты
        </div>
        <div className="w-80 text-center mb-[20px]">
          <span className="text-zinc-900 text-sm font-semibold font-['SF Pro Display'] leading-none">
            USB 3.2 Gen1 Type-A{" "}
          </span>
          <span className="text-neutral-500 text-sm font-semibold font-['SF Pro Display'] leading-none">
            x2
          </span>
        </div>
        <div className="text-center text-zinc-900 text-[21px] font-semibold font-['SF Pro Display'] leading-[27px]">
          Аудиоразъемы
        </div>
        <div className="w-80 text-center mb-8">
          <span className="text-zinc-900 text-sm font-semibold font-['SF Pro Display'] leading-none">
            3.5 мм jack{" "}
          </span>
          <span className="text-neutral-500 text-sm font-semibold font-['SF Pro Display'] leading-none">
            (аудио)
          </span>
          <span stclassNameyle="text-zinc-900 text-sm font-semibold font-['SF Pro Display'] leading-none">
            , 3.5 мм jack{" "}
          </span>
          <span className="text-neutral-500 text-sm font-semibold font-['SF Pro Display'] leading-none">
            (микрофон)
          </span>
        </div>
        <div className="w-full mb-4 pb-[10px] border-b border-b-[#6E6E73] text-center text-sky-600 text-base font-normal font-['SF Pro Display'] leading-none">
          Порты сзади
        </div>
        <div className="text-center text-zinc-900 text-[21px] font-semibold font-['SF Pro Display'] leading-7">
          USB порты
        </div>
        <div className="w-80 text-center mb-[20px]">
          <span className="text-zinc-900 text-sm font-semibold font-['SF Pro Display'] leading-none">
            USB 2.0 Type-A{" "}
          </span>
          <span className="text-neutral-500 text-sm font-semibold font-['SF Pro Display'] leading-none">
            x2
          </span>
          <span className="text-zinc-900 text-sm font-semibold font-['SF Pro Display'] leading-none">
            , USB 3.2 Gen1 Type-A{" "}
          </span>
          <span className="text-neutral-500 text-sm font-semibold font-['SF Pro Display'] leading-none">
            x2
          </span>
          <span className="text-zinc-900 text-sm font-semibold font-['SF Pro Display'] leading-none">
            ,<br />
            USB 3.2 Gen2 Type-C{" "}
          </span>
          <span className="text-neutral-500 text-sm font-semibold font-['SF Pro Display'] leading-none">
            x1
          </span>
        </div>
        <div className="mb-[10px] text-center text-zinc-900 text-[21px] font-semibold font-['SF Pro Display'] leading-[27px]">
          Видеоразъемы{" "}
        </div>
        <div className="w-80 text-center">
          <span className="text-zinc-900 text-sm font-semibold font-['SF Pro Display'] leading-none">
            DisplayPort 1.4a{" "}
          </span>
          <span className="text-neutral-500 text-sm font-semibold font-['SF Pro Display'] leading-none">
            x3
          </span>
          <span className="text-zinc-900 text-sm font-semibold font-['SF Pro Display'] leading-none">
            , HDMI 2.1{" "}
          </span>
          <span className="text-neutral-500 text-sm font-semibold font-['SF Pro Display'] leading-none">
            x1
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmPorts;
