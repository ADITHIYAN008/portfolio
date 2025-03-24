import { useState } from "react";
import logoIcon from "../assets/logoIcon.png";
import { GoArrowUpRight } from "react-icons/go";
import Work from "./Work.jsx";
import Info from "./Info.jsx";
import { IoAtOutline, IoClose } from "react-icons/io5";
import ToggleMenu from "./ToggleMenu.jsx";

const NavBar = () => {
  const [isToggle, setIsToggle] = useState("work");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section className="fixed top-0 z-50 custom-scrollbar">
        <div className="flex">
          <nav className="w-[90vw] md:w-[90vw] flex items-center justify-between mt-6 mx-6 lg:w-[95vw] ">
            <section className="hidden es:block">
              <div className="flex gap-4">
                <img
                  src={logoIcon}
                  alt="logoIcon"
                  className="hidden md:block"
                  width={48}
                  height={54}
                />
                <div className="flex flex-col">
                  <h3 className="text-xl leading-7 mt-2 font-medium">
                    Adithiyan
                  </h3>
                  <h6 className="text-sm text-gray-200/50">
                    Frontend Developer
                  </h6>
                </div>
              </div>
            </section>
            <div className="flex items-center justify-between w-[85vw] gap-5 es:w-auto">
              <section className="w-[150px] h-[50px] relative flex justify-center items-center bg-gray-200/5 backdrop-blur-3xl rounded-full border border-gray-200/15  ">
                <div className="flex relative items-center  w-[178px] h-[45px] bg-gray-200/5 rounded-full">
                  <div
                    className={`absolute left-1 z-10 w-[70px] h-[35px] bg-gray-200/25 rounded-full transition-transform duration-300 ease-in-out  ${
                      isToggle === "work"
                        ? "translate-x-0"
                        : "translate-x-[70px]"
                    }`}
                  ></div>
                  <button
                    onClick={() => setIsToggle("work")}
                    className="text-base absolute left-1 px-[18px] py-[5.5px] rounded-full bg-transparent transition-all duration-150 hover:bg-gray-200/5"
                  >
                    Work
                  </button>
                  <button
                    onClick={() => setIsToggle("info")}
                    className="text-base absolute right-1 px-[23px] py-[5.5px] rounded-full bg-transparent transition-all duration-150 ease-in-out hover:bg-gray-200/5"
                  >
                    Info
                  </button>
                  <div
                    className={`absolute -top-1 left-6 z-50 w-7 h-[3px] bg-[#b8b8b8] rounded-lg transition-all duration-150 ease-in-out ${
                      isToggle === "info" ? "translate-x-[4.5rem]" : ""
                    }`}
                  ></div>
                </div>
              </section>
              <button
                className="relative w-[45px] h-[45px] bg-gray-200/5 border border-gray-200/15 px-2 py-2 rounded-full  md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <IoClose
                  className={`absolute top-[7px] left-[7px] block transition-all duration-300 ease-in  ${
                    isOpen ? "opacity-100" : "-rotate-180 opacity-0 "
                  }`}
                  size={30}
                />
                <IoAtOutline
                  className={`absolute top-[7px] left-[7px] block transition-all duration-300 ease-in ${
                    isOpen == false ? "opacity-100" : "rotate-180  opacity-0"
                  }`}
                  size={30}
                />
                <div
                  className={`scale-0 transition-all duration-500 ease-in-out ${
                    isOpen ? "scale-105" : ""
                  }`}
                >
                  <ToggleMenu />
                </div>
              </button>
            </div>

            <section className="hidden md:block">
              <div className="flex">
                <a
                  className="flex gap-1 items-center px-3 py-2 bg-transparent rounded-full transition-all duration-150 ease-in-out hover:bg-gray-200/5"
                  href="https://www.linkedin.com/in/adithiyanr/"
                  target="_blank"
                >
                  LinkedIn <GoArrowUpRight size={25} />
                </a>
                <a
                  className="flex gap-1 items-center px-3 py-2 bg-transparent rounded-full transition-all duration-150 ease-in-out hover:bg-gray-200/5"
                  href="https://drive.google.com/file/d/15Fdq3z5MK9ZYT-vMM8p8uER4AEYqM9_d/view?usp=drive_link"
                  target="_blank"
                >
                  Resume <GoArrowUpRight size={25} />
                </a>
              </div>
            </section>
          </nav>
        </div>
      </section>
      {isToggle === "work" ? <Work /> : <Info />}
    </div>
  );
};

export default NavBar;
