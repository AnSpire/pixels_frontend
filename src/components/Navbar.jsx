import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-center w-full  border-b-[1px] border-black h-[64px] mb-[0.63rem] md:mb-8">
      <div className="flex justify-between items-center h-24 max-w-[1150px] w-full h-full mx-auto px-5">
        <div className="flex items-center h-full border-r-[1px] border-black pr-[39px]">
          <h1 className="text-xl font-extrabold ">
            <Link to="">pixel pc</Link>
          </h1>
        </div>
        <ul className="hidden md:flex ">
          <li className="p-4">
            <Link to="/Computers">Компьютеры</Link>
          </li>
          <li className="p-4">
            <Link to="/Monitors">Мониторы</Link>
          </li>
          <li className="p-4">
            <Link to="/Pc">Ноутбуки</Link>
          </li>
          <li className="p-4">
            <Link to="/Pc">Перифирия</Link>
          </li>
          <li className="p-4">
            <Link to="/Register"> Лк</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500 z-10  "
              : "ease-in-out duration-500 fixed left-[-100%]  "
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 absolute ">
            REACT.
          </h1>

          <li className="p-4">
            <Link to="/computers">Компьютеры</Link>
          </li>
          <li className="p-4">
            <Link to="/computers">Компьютеры</Link>
          </li>
          <li className="p-4">
            <Link to="/computers">Компьютеры</Link>
          </li>
          <li className="p-4">
            <Link to="/computers">Компьютеры</Link>
          </li>
          <li className="p-4">
            <Link to="/computers"> </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
