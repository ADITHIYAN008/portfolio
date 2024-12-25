import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ToggleMenu = () => {
  return (
    <div
      className={`absolute -left-28 -bottom-36 w-[150px] h-[110px] rounded-2xl bg-gray-200/15 backdrop-blur-2xl transition-all duration-500 ease-in-out`}
    >
      <div className="absolute left-2 top-3 flex flex-col">
        <a
          className="flex gap-9 items-center px-3 py-2 bg-transparent rounded-full transition-all duration-150 ease-in-out hover:bg-gray-200/5"
          href="https://www.linkedin.com/in/adithiyanr/"
          target="_blank"
        >
          LinkedIn <GoArrowUpRight size={25} />
        </a>
        <a
          className="flex gap-9 items-center px-3 py-2 bg-transparent rounded-full transition-all duration-150 ease-in-out hover:bg-gray-200/5"
          href="https://drive.google.com/file/d/1glSWjnrV-IyQ88KOpVmDkepkmAOQBzbp/view?usp=share_link"
          target="_blank"
        >
          Resume <GoArrowUpRight size={25} />
        </a>
      </div>
    </div>
  );
};

export default ToggleMenu;
