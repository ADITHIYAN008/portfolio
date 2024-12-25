import React, { useEffect, useState } from "react";
import InfoFrame from "./InfoFrame";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import sign from "../assets/sign.png";
import Experience from "./Experience";
import Footer from "./Footer.jsx";
import Loading from "./Loading.jsx";
import { motion } from "framer-motion";

const Info = () => {
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
          <section
            className="max-w-[1100px] mx-10 lg:ml-6 xl:mx-auto mt-[10rem] "
            id="info"
          >
            <motion.div
              className="flex gap-7 relative w-3 h-3 mb-7 rounded-full bg-white items-center "
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="absolute w-4 h-4 rounded-full bg-white blur-[0.7rem]"></div>
              <h3 className="font-medium ml-7 text-nowrap text-[11px] text-gray-200/50  uppercase ">
                About Me
              </h3>
            </motion.div>
            <motion.h1
              className="text-[7.5vw] lg:text-[55px] text-left sm:text-[7vw] md:text-[42px]  font-medium leading-tight drop-shadow-[0_0px_35px_rgba(255,255,255,0.5)]"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              I'm passionate about creating beautiful products that{" "}
              <span className=" bg-gradient-to-b from-[#F2F2F2] to-[rgba(125,72,190,0.9)] inline-block text-transparent bg-clip-text">
                empower people.
              </span>
            </motion.h1>
            <div>
              <div className="flex flex-col mt-[3rem] gap-12 md:flex-row ">
                <motion.div
                  className="flex flex-col gap-12 items-center"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <InfoFrame img={img1} title="first-image" />
                  <h1 className="text-[18px] px-5 font-medium text-center text-white/85 md:hidden">
                    This is my story — alongside some flicks from my recent trip
                    to Japan.
                  </h1>
                  <div className="hidden md:block text-left w-[80%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        My background in Architecture.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        In June of 2022, I graduated from architecture school at
                        the University of Toronto. There, I became obsessed with
                        architectural visualization.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        I was deeply fascinated in the concepts of modularity
                        and adaptability — how oru built environment could
                        organically evolve in conjuction with humanity.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex flex-col md:mt-12 md:w-[80%] items-center">
                    <h1 className="text-[18px] hidden text-center font-medium mb-10 text-white/85 md:block">
                      This is my story — alongside some flicks from my recent
                      trip to Japan.
                    </h1>
                    <InfoFrame img={img2} title="second-image" />
                    <div className=" flex flex-col gap-9 mt-16 text-left md:hidden ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        My background in Architecture.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        In June of 2022, I graduated from architecture school at
                        the University of Toronto. There, I became obsessed with
                        architectural visualization.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        I was deeply fascinated in the concepts of modularity
                        and adaptability — how oru built environment could
                        organically evolve in conjuction with humanity.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-[3rem] gap-12 md:flex-row ">
                <motion.div
                  className="flex flex-col gap-12 items-center"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <InfoFrame img={img3} title="first-image" />
                  <div className="hidden md:block text-left w-[99%] md:w-[80%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        This thing called UX?
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        When the pandemic struck, I took it as an opportunity to
                        explore new things. I came across UX design
                        competitions, and thought it might be fun to just give
                        it a go (several times).
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        Long story short, my failures eventually turned into
                        successes, and the rest was history.
                      </p>
                    </div>
                  </div>
                  <div className=" md:hidden text-left w-[99%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        But, I wanted more.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        Though I loved the freedom of academic practice, I was
                        greatly dissatisfied with just how slow the industry
                        actually moved.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        I wanted to push my design craft at a faster pace and
                        have a positive impact on vastly more people.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex flex-col md:w-[80%] items-center">
                    <div className="hidden md:block md:w-[95%] md:mb-10">
                      <div className=" flex flex-col gap-9 mt-16 text-left">
                        <h1 className=" font-medium text-xl text-white/85 ">
                          But, I wanted more.
                        </h1>
                        <p className=" font-medium text-base text-gray-200/50">
                          Though I loved the freedom of academic practice, I was
                          greatly dissatisfied with just how slow the industry
                          actually moved.
                        </p>
                        <p className=" font-medium text-base text-gray-200/50">
                          I wanted to push my design craft at a faster pace and
                          have a positive impact on vastly more people.
                        </p>
                      </div>
                    </div>

                    <InfoFrame img={img4} title="second-image" />
                    <div className=" flex flex-col gap-9 mt-16 text-left md:hidden ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        This thing called UX?
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        When the pandemic struck, I took it as an opportunity to
                        explore new things. I came across UX design
                        competitions, and thought it might be fun to just give
                        it a go (several times).
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        Long story short, my failures eventually turned into
                        successes, and the rest was history.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-[3rem] gap-12 md:flex-row ">
                <motion.div
                  className="flex flex-col gap-12 items-center"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <InfoFrame img={img5} title="first-image" />
                  <div className="hidden md:block text-left w-[99%] md:w-[80%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        In my spare time,
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        I m probably making tweaks to my portfolio or hanging
                        out on Discord.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        Other than that, you'll find me playing basketball and
                        volleyball, hitting the gym, gaming, and trying to get
                        my hands on the latest tech.
                      </p>
                      <div className="flex flex-col gap-3">
                        <h1 className=" font-medium text-xl text-white/85 ">
                          Thanks for stopping by!
                        </h1>
                        <img
                          src={sign}
                          alt="signature"
                          width={80}
                          height={80}
                          className="opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" md:hidden text-left w-[99%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        Making it all happen.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        To my advantage, I was leverage a lot of the skills and
                        design principles I had picked up during architecture
                        school to greatly expedite my journey of self-learning
                        UX Design.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        I loved solving problems by making stuff, and really
                        valued visual storytelling and paying meticulous
                        attention to precision and craftsmanship.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex flex-col md:w-[80%] items-center">
                    <div className="hidden md:block md:w-[95%] md:mb-10">
                      <div className=" flex flex-col gap-9 mt-16 text-left">
                        <h1 className=" font-medium text-xl text-white/85 ">
                          Making it all happen.
                        </h1>
                        <p className=" font-medium text-base text-gray-200/50">
                          To my advantage, I was leverage a lot of the skills
                          and design principles I had picked up during
                          architecture school to greatly expedite my journey of
                          self-learning UX Design.
                        </p>
                        <p className=" font-medium text-base text-gray-200/50">
                          I loved solving problems by making stuff, and really
                          valued visual storytelling and paying meticulous
                          attention to precision and craftsmanship.
                        </p>
                      </div>
                    </div>

                    <InfoFrame img={img6} title="second-image" />
                    <div className=" flex flex-col gap-9 mt-16 text-left md:hidden ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        In my spare time,
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        I m probably making tweaks to my portfolio or hanging
                        out on Discord.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        Other than that, you'll find me playing basketball and
                        volleyball, hitting the gym, gaming, and trying to get
                        my hands on the latest tech.
                      </p>
                      <div className="flex flex-col gap-3">
                        <h1 className=" font-medium text-xl text-white/85 ">
                          Thanks for stopping by!
                        </h1>
                        <img
                          src={sign}
                          alt="signature"
                          width={80}
                          height={80}
                          className="opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="border-t-[1px] border-gray-200/20 mt-24"></div>
            <section className=" mt-10 md:mt-16">
              <div className="flex gap-7 relative w-3 h-3 mb-10 md:mb-0 rounded-full bg-white items-center">
                <div className="absolute w-4 h-4 rounded-full bg-white blur-[0.7rem]"></div>
                <h3 className="font-medium ml-8 uppercase text-nowrap text-xs text-gray-200/40 ">
                  experience
                </h3>
              </div>
              <Experience
                company="Discord"
                title="Senior Product Designer, Core Product"
                year="07/'23 - Present"
                description="I'm designing the future of Discord's messaging & core product
            experiences, amongst other top secret projects."
              />
              <Experience
                company="Google"
                title="Interaction Designer, Stadia"
                year="06/'22 - 04/'23"
                description="I owned a product that was part of Stadia's developer suite, and led design on the website for enabling Bluetooth on Stadia Controllers post-sunset."
              />
              <Experience
                company="RBC"
                title="UX Design Intern, Innovation"
                year="Summer '21"
                description="I championed the redesign of the bank’s internal corporate cards portal, and designed a patented wealth management network visualizer."
              />
            </section>{" "}
          </section>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Info;
