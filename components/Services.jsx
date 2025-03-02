import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
    >

      <motion.h2
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="text-center text-5xl font-Ovo"
      >
        My Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Experienced in backend development, cloud architecture, and automation.
        Skilled in Node.js, NestJS, Spring Boot, Docker, Kubernetes, AWS, and CI/CD pipelines.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
             hover:bg-lightHover hover:-translate-y-1 duration-500
             dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
