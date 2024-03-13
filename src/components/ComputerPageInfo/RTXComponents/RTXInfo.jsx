import React, { useState } from "react";
import "../../../index.css";
import AccordionItem from "./AccorionItem";

const RTXInfo = () => {
  const [openId, setOpenId] = useState(0);

  const handleItemClick = (id) => {
    setOpenId((prevId) => {
      // Если prevId совпадает с id, то элемент уже открыт, и мы его не закрываем напрямую
      if (prevId === id) {
        return prevId;
      } else {
        // Если prevId не совпадает с id, закрываем текущий элемент и открываем новый
        return id;
      }
    });
  };

  const RTXList = [
    {
      q: "Трассировка лучей",
      a: "Технология RTX воплощает мечту о рендеринге кинематографического качества в реальном времени благодаря оптимизированным API для трассировки лучей, таким как NVIDIA OptiX™, Microsoft DXR и Vulkan. Теперь фотореалистичный рендеринг объектов и окружений в реальном времени в комбинации с физически точными тенями, отражениями и преломлениями позволяет художникам и дизайнерам создавать потрясающий контент быстрее, чем когда-либо раньше.",
    },
    {
      q: "Искусственный интеллект",
      a: "Технология NVIDIA RTX привносит возможности ИИ в визуальные вычисления и позволяет разрабатывать приложения на базе ИИ, которые ускоряют рабочий процесс. Эти возможности значительно ускоряют работу художников и дизайнеров, освобождая время и ресурсы за счет интеллектуальной обработки изображений, автоматизации повторяющихся задач и оптимизации процессов, требующих большого объема вычислений.",
    },
    {
      q: "Растеризация",
      a: "RTX поддерживает такие новые технологии программируемого шейдинга, как Variable-Rate Shading, Texture-Space Shading и Multi-View Rendering. Использование этих технологий позволяет создавать более насыщенные визуальные эффекты с гибкой интерактивностью, крупными моделями и сценами и улучшенными возможностями в VR.",
    },
    {
      q: "Моделирование",
      a: "Реалистичность визуальных эффектов достигается не только путем соответствия внешнего вида, но и поведения. Благодаря возможностям ядер CUDA®и таким API, как NVIDIA PhysX®, Flow, FleX и CUDA, технология RTX позволяет точно моделировать поведение реальных объектов во всем: от игр до виртуальных сред и спецэффектов",
    },
    // Дополнительные элементы списка RTXList
  ];

  return (
    <div className="">
      <div className="max-w-[1150px] md:min-h-[1085px] bg-neutral-900 rounded-3xl px-[1.5rem] md:px-[4.5rem] pt-[2.5rem] md:pt-[6rem] md:pb-[5rem] my-14 md:mb-[7.12rem] flex flex-col justify-center items-center">
        <div className="text-center w-full h-[9rem] md:h-auto md:w-full rtx_gradient text-amber-50 text-[2rem] md:text-[64px] font-bold font-['SF Pro Display'] leading-[2.25rem] md:leading-[68px] mb-10 md:mb-[5rem] font-bold">
          Искусство <br className="md:hidden" /> в каждом пикселе, продвинутая
          графика с Nvidia
        </div>
        <div className=" text-white w-[90%]">
          <ul className="Accordion last:mb-10 ">
            {RTXList.map((RTXItem, id) => (
              <AccordionItem
                key={id}
                RTXItem={RTXItem}
                isOpen={id === openId}
                onClick={() => handleItemClick(id)}
                id={id + 1}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RTXInfo;
