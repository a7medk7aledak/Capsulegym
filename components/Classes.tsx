"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";
import { classes } from "../constants";
import { useRouter } from "next/navigation";

const Classes = () => {
  const router = useRouter();

  const handleLearnMore = (id: string) => {
    router.push(`/class/${id}`);
  };

  return (
    <section id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item) => (
          <div
            className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
            key={item.id}
          >
            {/* overlay */}
            <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
            <Image
              src={item.img}
              fill
              className="object-cover"
              alt={item.name}
            />
            {/* text & btn */}
            <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
              <motion.h3
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className="h3 text-accent"
              >
                {item.name}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className="text-white"
              >
                {item.description}
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
              >
                <CustomButton
                  text="Learn More"
                  containerStyles="w-[164px] h-[46px]"
                  onClick={() => handleLearnMore(item.id)}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Classes;
