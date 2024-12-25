import { motion } from "framer-motion";

const Experience = ({ company, title, year, description }) => {
  return (
    <motion.article
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <div className=" md:flex justify-between mb-16 md:mt-20">
        <h1 className="text-[28px] md:text-5xl font-medium">{company}</h1>
        <div>
          <div className="mb-6">
            <h1 className="font-medium text-[18px] text-nowrap md:text-2xl mb-2">
              {title}
            </h1>
            <h3 className="md:w-[27rem] font-medium text-[15px] md:text-lg text-gray-200/50">
              {year}
            </h3>
          </div>
          <h3 className="md:w-[27rem] font-normal text-[18px] md:text-lg text-gray-200/50">
            {description}
          </h3>
        </div>
      </div>
    </motion.article>
  );
};

export default Experience;
