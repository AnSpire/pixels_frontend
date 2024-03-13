import React, { useState } from "react";
import "./MonitorGrid.css"; // Подключаем CSS для стилизации сетки

const MonitorGridItem = ({ monitor, expanded, onMouseEnter, onMouseLeave }) => {
  const classes = expanded ? "monitor expanded" : "monitor"; // Добавляем класс "expanded", если элемент расширен
  return (
    <div
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-[255px] flex justify-center items-center">
        <div className="w-[255px] mx-auto">
          <img src={monitor.imageUrl} alt={monitor.name} className="block" />
        </div>
      </div>
      <div className="info ">{monitor.info}</div>
      <div className="price mb-[25px]">{monitor.price} ₽</div>
      {expanded && (
        <div>
          <div className="w-40 h-[41px] px-10 py-3 bg-sky-600 rounded justify-center items-center gap-2.5 inline-flex mb-3">
            <div className="text-center text-white text-[17px] font-semibold font-['SF Pro Display'] leading-[17px]">
              В корзину
            </div>
          </div>
          <div className="text-center text-zinc-900 text-sm font-normal font-['SF Pro Display'] leading-[14px]">
            Купить в один клик
          </div>
        </div>
      )}
    </div>
  );
};

const MonitorGrid = () => {
  const monitorsData = [
    {
      id: 1,
      name: "Монитор 1",
      imageUrl: "./images/monitor.jpeg",
      info: "27” Apple Studio Display Nano-texture glass (5120x2880@60 Гц, IPS, LED, 600 Кд/м², 178°/178°) «серебристый»",
      price: "145 540",
    },
    {
      id: 2,
      name: "Монитор 2",
      imageUrl: "./images/monitor.jpeg",
      info: "27” Apple Studio Display Nano-texture glass (5120x2880@60 Гц, IPS, LED, 600 Кд/м², 178°/178°) «серебристый»",
      price: "145 540",
    },
    {
      id: 3,
      name: "Монитор 3",
      imageUrl: "./images/monitor.jpeg",
      info: "27” Apple Studio Display Nano-texture glass (5120x2880@60 Гц, IPS, LED, 600 Кд/м², 178°/178°) «серебристый»",
      price: "145 540",
    },
    {
      id: 4,
      name: "Монитор 4",
      imageUrl: "./images/monitor.jpeg",
      info: "27” Apple Studio Display Nano-texture glass (5120x2880@60 Гц, IPS, LED, 600 Кд/м², 178°/178°) «серебристый»",
      price: "145 540",
    },
    {
      id: 5,
      name: "Монитор 3",
      imageUrl: "./images/monitor.jpeg",
      info: "27” Apple Studio Display Nano-texture glass (5120x2880@60 Гц, IPS, LED, 600 Кд/м², 178°/178°) «серебристый»",
      price: "145 540",
    },
    {
      id: 6,
      name: "Монитор 4",
      imageUrl: "./images/monitor.jpeg",
      info: "27” Apple Studio Display Nano-texture glass (5120x2880@60 Гц, IPS, LED, 600 Кд/м², 178°/178°) «серебристый»",
      price: "145 540",
    },
    {
      id: 7,
      name: "Монитор 4",
      imageUrl: "./images/monitor.jpeg",
      info: "27” Apple Studio Display Nano-texture glass (5120x2880@60 Гц, IPS, LED, 600 Кд/м², 178°/178°) «серебристый»",
      price: "145 540",
    },
    {
      id: 8,
      name: "Монитор 4",
      imageUrl: "./images/monitor.jpeg",
      info: "27” Apple Studio Display Nano-texture glass (5120x2880@60 Гц, IPS, LED, 600 Кд/м², 178°/178°) «серебристый»",
      price: "145 540",
    },
  ];
  const [expandedItem, setExpandedItem] = useState(null); // Состояние для отслеживания расширенного элемента

  const handleMouseEnter = (index) => {
    setExpandedItem(index);
  };

  const handleMouseLeave = () => {
    setExpandedItem(null);
  };

  return (
    <div className="container mb-[400px]">
      {monitorsData.map((monitor, index) => (
        <MonitorGridItem
          key={monitor.id}
          monitor={monitor}
          expanded={expandedItem === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default MonitorGrid;
