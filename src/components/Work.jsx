import { GoArrowDown } from "react-icons/go";
import HeroFrame from "../assets/HeroFrame.png";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Tf1 from "../assets/Tf1.png";
import Dionysus from "../assets/Dionysus.png";
import Footer from "./Footer";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="mt-[10rem] mx-6 es:mx-16 es:mt-[15rem]" id="work">
            <motion.div
              className="flex gap-7 relative w-3 h-3 mb-7 rounded-full bg-white items-center es:hidden"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="absolute w-4 h-4 rounded-full bg-white blur-[0.7rem]"></div>
              <h3 className="font-medium ml-7 text-nowrap text-sm text-gray-200/50 ">
                Adithiyan — Frontend Developer
              </h3>
            </motion.div>
            <motion.section
              className="es:relative max-w-[1100px] mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <img
                src={HeroFrame}
                alt="hero-frame"
                width={1100}
                className="t-32 left-[9%] mx-auto hidden es:block"
              />
              <div className="es:absolute top-14 left-14 es:left-6 md:mt-20 md:mx-10 lg:mx-10 flex flex-col gap-4">
                <h1 className="text-[12vw] es:text-[6vw] sm:text-[7vw] md:text-[7vw] lg:text-[85px] font-medium leading-tight drop-shadow-[0_0px_35px_rgba(255,255,255,0.5)]">
                  I craft products, <br /> Websites &{" "}
                  <span className=" bg-gradient-to-b from-[#F2F2F2] to-[rgba(125,72,190,0.9)] inline-block text-transparent bg-clip-text">
                    interfaces .
                  </span>
                </h1>

                <div className="md:ml-[19rem] lg:ml-[26rem] xl:ml-[35rem] ">
                  <h3 className=" text-[4vw] es:text-[2.4vw] md:text-[2vw] lg:text-[20px] font-medium ">
                    Frontend Web Developer. Based in Tamil Nadu.
                  </h3>
                  <h3
                    className="text-[4vw] es:text-[2.4vw] md:text-[2vw] lg:text-[20px]  font-medium  text-white/50
        "
                  >
                    BCA student at Thiruvalluvar University.
                  </h3>
                </div>
                <div className="border-t-[1px] border-gray-200/20 mt-12 es:hidden"></div>
                <motion.span
                  className="absolute hidden top-[115%] es:left-[45%] es:block md:left-[45%] xl:left-[45%]"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 50, opacity: 1 }}
                  transition={{
                    type: "tween",
                    duration: 2,
                    ease: "easeOut",
                    repeat: Infinity,
                  }}
                >
                  <GoArrowDown className="es:size-10 xl:size-20" />
                </motion.span>
              </div>
            </motion.section>
            <Projects
              title="Dionysus"
              subtitle="Google, '23 —"
              description="Giving a second life to over a million controllers."
              image={Dionysus}
              link="https://dionysus-fawn.vercel.app/"
              topGradiant="from-[#4E9DE6]"
              bottomGradiant="to-[#417EB2]"
            />
            <Projects
              title="Test Hub Next"
              subtitle="Google, '22 —"
              description="Envisioning a future of playtesting for all developers."
              image={Tf1}
              link=""
              topGradiant="from-[#8000BF]"
              bottomGradiant="to-[#9400D8]"
            />
            <Projects
              title="Spotlight"
              subtitle="Adobe x Netflix Creative Jam, '21 —"
              description=" Making entertainment more uniting."
              image={Tf1}
              link=""
              topGradiant="from-[#FF002F]"
              bottomGradiant="to-[#FF0AB1]"
            />
            <Projects
              title="Corporate Cards Portal"
              subtitle="RBC, '21 —"
              description="Redesigning a core internal company service."
              image={Tf1}
              link=""
              topGradiant="from-[#D2691E]"
              bottomGradiant="to-[#A44B15]"
            />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Work;
