import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/Surgical Solution logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);
  const {isOpenMenu, setIsOpenMenu} = useContext(AuthContext);
  

  return (
    <>
      <header className="bg-color-primary">
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
                placeholder="Search here"
                className={`input focus:outline-none placeholder:text-gray-400 md:block w-full rounded-full ${
                  isOpenSearchBox ? "block input-sm md:input-md" : "hidden"
                }`}
              />
              <div
                onClick={() => setIsOpenSearchBox(true)}
                className={`absolute md:right-6 md:top-2  block top-[-14px] right-[10px] ${
                  isOpenSearchBox ? "top-[1px] right-[22px] " : ""
                }`}
              >
                <FiSearch
                  className={`text-3xl md:text-color-primary   ${
                    isOpenSearchBox ? "text-color-primary" : "text-white"
                  }`}
                />
              </div>
            </div>

            {/* Navitem */}
            <div className="justify-end list-none flex gap-10 items-center">
              <li className="text-4xl lg:block hidden text-white">
                <TiShoppingCart />
              </li>
              <li className="text-4xl lg:block hidden text-white">
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
        className={`min-h-screen overflow-x-hidden lg:hidden bg-blue-800 w-full list-none transform transition-transform duration-1000 ${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex items-center p-6 px-0 justify-around">
          <li className="text-3xl btn btn-sm bg-color-primary hover:bg-blue-900  text-white">
            <TiShoppingCart />
          </li>
          <li className="text-3xl btn btn-sm bg-color-primary hover:bg-blue-900 text-white">
            {" "}
            <CgProfile />
          </li>
        </ul>
        <ul className="flex flex-col gap-2 list-none px-10 py-6 pt-0">
        
          <li className="text-lg hover:bg-blue-900 text-white p-2">
            Health Care
          </li>
          <li className="text-lg hover:bg-blue-900 text-white p-2">
            Orthopedic
          </li>
          <li className="text-lg hover:bg-blue-900 text-white p-2">Skeleton</li>
          <li className="text-lg hover:bg-blue-900 text-white p-2">SURGICAL</li>
          <li className="text-lg hover:bg-blue-900 text-white p-2">
            MEDICAL EQUIPMENT
          </li>
          <li className="text-lg hover:bg-blue-900 text-white p-2">
            PHYSIOTHERAPY MACHINE
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
