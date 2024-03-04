import React, { useRef, useEffect } from "react";
import "./Accordion.css";
const AccordionItem = ({ RTXItem, onClick, isOpen, id }) => {
  const itemRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      itemRef.current.style.height = `${itemRef.current.scrollHeight}px`;
    } else {
      itemRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <li className="accordion_item mb-7">
      <div
        className={`flex ${
          isOpen ? "mb-[1.13rem]" : "mb-[2rem]"
        } w-full`}
      >
        <div className=" min-w-[1.8125rem] h-[1.8125rem] md:w-14 md:h-14 bg-neutral-100 rounded-md md:rounded-lg text-black text-[1.3125rem]  md:text-[2.5rem] font-semibold flex items-center justify-center mr-[1rem] md:mr-[2.19rem]">
          {id}
        </div>
        <button
          className={`accordion_header text-[1.3125rem] md:text-[2.5rem] font-semibold flex items-center justify-between w-full`}
          onClick={onClick}
        >
          <div className="text-left">
          {RTXItem.q}
          </div>
          {!isOpen ? (
            <svg
              className="icon_animation"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M1 16H31"
                stroke="#86868B"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16 1L16 31"
                stroke="#86868B"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          ) : (
            <svg
              className="icon_animation"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="2"
              viewBox="0 0 32 2"
              fill="none"
            >
              <path
                d="M1 1H31"
                stroke="#86868B"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`accordion_collapse text-[#86868B] border-b-2 border-b-[#86868B] `}
        ref={itemRef}
      >
        <div
          className={`accordion_body text-[0.875rem] md:text-[1.2125rem] md:pl-[5.625rem] pb-[1.5rem] md:pb-[2.5rem] md:max-w-[49.1rem] leading-[1.25rem] md:leading-[1.8125rem] font-semibold `}
        >
          {RTXItem.a}
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
