"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomButton from "@/components/CustomButton";
import { fadeIn } from "@/lib/variants";
import { trainerData } from "@/constants";

const TeamPage = () => {
  const [showTrainers, setShowTrainers] = useState(false);

  const handleButtonClick = () => {
    setShowTrainers(true);
  };

  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-[36px] text-center mb-6"
        >
          Our Trainers
        </motion.h2>

        {/* Button to show trainers */}
        {!showTrainers && (
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CustomButton
              containerStyles="w-[196px] h-[62px]"
              text="See All Trainers"
              onClick={handleButtonClick}
            />
          </motion.div>
        )}

        {/* Trainers grid */}
        {showTrainers && (
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
          >
            {trainerData.map((trainer, index) => (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* Image */}
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} fill alt={trainer.name} />
                </div>
                {/* Name */}
                <h4 className="text-[26px] mb-2">{trainer.name}</h4>
                {/* Role */}
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                {/* Description */}
                <p className="mb-6 mx-auto max-w-[320px]">
                  {trainer.description}
                </p>
                {/* Socials */}
                <div className="flex gap-12 justify-center">
                  {trainer.social.map((social, socialIndex) => (
                    <Link
                      className="hover:text-accent transition-all"
                      href={social.href}
                      key={socialIndex}
                      passHref
                    >
                      <social.icon className="text-2xl" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TeamPage;
