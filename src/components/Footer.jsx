import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="w-full border-t-[1px] mt-[8rem] sm:mt-[14rem] border-gray-200/10">
      <div className="relative max-w-[1100px] mt-16 px-6 h-[400px] mx-auto">
        <nav>
          <div className="w-[350px] h-[200px] flex gap-20 ">
            <div className="flex flex-col gap-7">
              <h3 className=" font-medium text-xs text-gray-200/40 uppercase ">
                main
              </h3>
              <a
                href="#work"
                className=" font-medium text-xl transition-all duration-300"
              >
                Work
              </a>
              <a href="#info" className=" font-medium text-xl">
                Info
              </a>
            </div>
            <div className="flex flex-col gap-7">
              <h3 className=" font-medium text-xs text-gray-200/40 uppercase ">
                contact
              </h3>
              <a
                className="flex gap-1 items-center text-xl font-medium"
                href="https://www.linkedin.com/in/adithiyanr/"
                target="_blank"
              >
                LinkedIn <GoArrowUpRight size={25} />
              </a>
              <a
                className="flex gap-1 items-center text-xl font-medium"
                href="https://drive.google.com/file/d/1glSWjnrV-IyQ88KOpVmDkepkmAOQBzbp/view?usp=share_link"
                target="_blank"
              >
                Resume <GoArrowUpRight size={25} />
              </a>
            </div>
          </div>
        </nav>
        <div className="md:flex md:justify-between items-center">
          <div>
            <h3 className=" text-sm md:text-base mb-2 font-medium">
              &copy; 2024 Adithiyan. All Rights Reserved.
            </h3>
            <h3 className=" text-xs md:text-sm font-medium text-gray-200/40">
              Made with love and Mango Green Teas (50% sugar, less ice).
            </h3>
          </div>

          <h3 className="mt-10 text-xs md:text-sm md:mt-0  font-medium text-nowrap text-gray-200/40">
            Last updated by Adithiyan on November 5, 2024, 12:34 PM IST
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
