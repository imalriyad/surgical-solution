import { FiSearch } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/Surgical Solution logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);
  return (
    <>
      <header className="bg-blue-500 ">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-14 md:px-8 py-2">
          <div className="flex items-center justify-between">
            <div
              className={`lg:w-3/12 md:w-4/12 w-7/12 ${
                isOpenSearchBox ? "hidden md:block" : "block"
              }`}
            >
              <img
                src={logo}
                className={`w-full cursor-pointer object-cover`}
                alt=""
              />
            </div>

            {/* Navbar input searchbox */}
            <div
              className={` relative pr-4 ${
                isOpenSearchBox ? "w-full md:w-6/12" : "w-6/12"
              }`}
            >
              <input
                type="text"
                placeholder="Type here"
                className={`input focus:outline-none md:block w-full rounded-full ${
                  isOpenSearchBox ? "block" : "hidden"
                }`}
              />
              <div
                onClick={() => setIsOpenSearchBox(true)}
                className={`absolute md:right-6 md:top-2  block top-[-14px] right-[10px] ${
                  isOpenSearchBox ? "top-[10px] right-[22px] text-blue-500" : ""
                }`}
              >
                <FiSearch
                  className={`text-3xl md:text-blue-500 text-white ${
                    isOpenSearchBox ? "text-blue-500" : ""
                  }`}
                />
              </div>
            </div>

            {/* Navitem */}
            <div className="justify-end list-none flex gap-6 items-center">
              <li className="text-2xl lg:block hidden text-white">
                <FaHeart />
              </li>
              <li className="text-3xl lg:block hidden text-white">
                <TiShoppingCart />
              </li>
              <li className="text-3xl lg:block hidden text-white">
                {" "}
                <CgProfile />
              </li>

              {/* Menu bar */}
              <span
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="lg:hidden block cursor-pointer"
              >
                {isOpenMenu ? (
                  <IoClose className="text-3xl text-white" />
                ) : (
                  <IoMenu className="text-3xl text-white" />
                )}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu  */}
      <div
        className={`min-h-screen lg:hidden bg-blue-500 w-[240px] list-none ${
          isOpenMenu ? "block" : "hidden"
        }`}
      >
        <ul className="flex items-center gap-8 p-4 border-t border-b justify-center">
          <li className="text-2xl text-white">
            <FaHeart />
          </li>
          <li className="text-3xl text-white">
            <TiShoppingCart />
          </li>
          <li className="text-3xl text-white">
            {" "}
            <CgProfile />
          </li>
        </ul>
        <ul className="flex flex-col gap-4 list-none p-10 pt-4 ">
          <li className="text-xl text-white border-b pb-2">Health Care</li>
          <li className="text-xl text-white border-b pb-2">Health Care</li>
          <li className="text-xl text-white border-b pb-2">Health Care</li>
          <li className="text-xl text-white border-b pb-2">Health Care</li>
          <li className="text-xl text-white border-b pb-2">Health Care</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
