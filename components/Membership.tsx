"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="relative py-8 xl:py-0 lg:h-[95vh] bg-membership bg-cover bg-center"
      id="prices"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="container mx-auto relative z-20 text-white h-full flex flex-col items-center justify-center px-4">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="text-[36px] text-white text-center mb-8"
        >
          Membership
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="w-full"
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Membership;
