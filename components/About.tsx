"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { ABOUT_TEXT, featured } from "../constants";
import Achievements from "./Achievements";

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            className="h2 text-center"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="max-w-[600px] mx-auto text-center"
          >
            {ABOUT_TEXT}
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => (
            <div
              className="flex flex-col justify-center items-center gap-4 border p-10"
              key={index}
            >
              <div className="text-white w-[80px] h-[80px] text-4xl bg-primary-300 rounded-full flex justify-center items-center">
                {feature.icon}
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <h4 className="text-red-600 text-[26px]">{feature.title}</h4>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
        {/* Achievements */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
