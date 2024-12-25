import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = ({
  title,
  subtitle,
  description,
  image,
  topGradiant,
  bottomGradiant,
  link,
}) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <motion.section
      className="mt-[2rem] es:mt-[8rem] mx-auto "
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
    >
      <a href={link} target="_blank">
        <div className="relative max-w-[1100px] min-h-[300px] sm:h-[400px] md:h-[500px] lg:h-[800px]  bg-gray-200/5 mx-auto rounded-3xl border border-gray-200/15 ">
          <div
            className={`absolute top-1 left-1 w-[98%] md:w-[99%] lg:w-[99%] max-w-[1090px] h-[99%] bg-transparent rounded-2xl border border-gray-200/30 overflow-hidden ${
              onHover ? "border-gray-200/65" : ""
            }
          `}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <img
              src={image}
              alt="Tf1"
              className={`absolute w-[70%] lg:w-[80%] left-2 sm:left-8 md:left-14 lg:left-14 -bottom-0 mx-10 md:-bottom-20 z-10 transition-all duration-300 ease-out ${
                onHover ? "md:-translate-y-10" : ""
              }`}
            />
            <h3 className="absolute left-5 lg:left-14 top-10 text-[24px] lg:text-4xl font-medium z-10">
              {title}
            </h3>
            <h3 className="absolute left-5 lg:left-14 top-20 lg:mt-4 text-[15px] w-[80%] lg:text-lg font-medium z-10">
              {subtitle} <span className="text-gray-200/50">{description}</span>
            </h3>
            <GoArrowRight
              size={35}
              className={`absolute right-4 md:right-10 lg:right-16 top-10 z-10 transition-all duration-300 delay-200 ease-out ${
                onHover ? "translate-x-5" : ""
              }`}
            />
            <div
              className={`absolute -top-[40rem] left-[4rem] w-[70rem] h-[70rem] rounded-full bg-gradient-to-r ${topGradiant} ${bottomGradiant} blur-[15rem] opacity-100 md:opacity-0 transition-all duration-300 ease-in-out  ${
                onHover ? "md:opacity-100" : ""
              } `}
            ></div>
          </div>
        </div>
      </a>
    </motion.section>
  );
};

export default Projects;
