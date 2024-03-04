import React from 'react';

const DDR5Info = () => {
  // Данные для каждого блока
  const stats = [
    { title: 'Мощнее на', value: '2.0x', description: 'Увеличивает мощность всей системы' },
    { title: 'Быстрее на', value: '2.6x', description: 'До 8400 МТ/c' },
    { title: 'Объем памяти', value: '2.0x', description: 'До 256GB' },
  ];

  return (
    <div>
      <div className="max-w-[69.375rem] h-[846px] bg-[#111] rounded-3xl my-[7.13rem] pt-[6rem] px-[4.5rem]" >
        <div className="text-center ram_gradient text-[64px] font-['SF_Pro_Display'] font-semibold  leading-[68px]">DDR5: переход на новый<br/>уровень скорости</div>
        <div className="w-full text-zinc-500 text-[28px] font-['SF_Pro_Display'] mt-[3rem] mb-[3.5rem] leading-[35px]">С невероятной пропускной способностью и низким энергопотреблением, оперативная память обеспечивает надежность и производительность на высочайшем уровне. DDR5 поможет вам максимизировать скорость обработки данных, улучшить работу с многозадачностью и оптимизировать ваш профессиональный творческий процесс.</div>
        <div className='flex justify-right w-full'>
          {stats.map((stat, index) => (
            <div className='flex mr-[9rem]' key={index}>
              <div>
                <div className="text-zinc-500 text-2xl font-semibold font-['SF Pro Display'] leading-7 whitespace-nowrap">{stat.title}</div>
                <div className="text-neutral-100 text-[80px] font-semibold font-['SF Pro Display'] leading-[80px]">{stat.value}</div>
                <div className="text-zinc-500 text-2xl font-semibold font-['SF Pro Display'] leading-7">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DDR5Info;
