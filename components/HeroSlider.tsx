// components/HeroSlider.tsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { useRouter } from "next/navigation";

// Custom Button Component
interface CustomButtonProps {
  text: string;
  containerStyles: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  containerStyles,
  onClick,
}) => {
  return (
    <button className={`${containerStyles}`} onClick={onClick}>
      {text}
    </button>
  );
};

// SwiperNavButtons Component
interface SwiperNavButtonsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

const SwiperNavButtons: React.FC<SwiperNavButtonsProps> = ({
  containerStyles,
  btnStyles,
  iconStyles,
}) => {
  return (
    <div className={containerStyles}>
      {/* Add your navigation button implementation here */}
    </div>
  );
};

// HeroSlider Component
const HeroSlider: React.FC = () => {
  const router = useRouter();

  const handleNavigateToCompunt = () => {
    router.push("/chatbot"); // Replace '/compunt' with the actual path to your Compunt class
  };

  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl text-white text-center lg:text-left mb-2"
            >
              <span className="text-red-600">WHERE HARD</span> WORK MEETS
              SUCCESS
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="text-gray-300 italic text-center lg:text-left mb-4"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text="GET STARTED AI"
                containerStyles="text-lg w-[160px] h-[62px] bg-red-600 text-white rounded"
                onClick={handleNavigateToCompunt}
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      {/* Add more SwiperSlides here if needed */}
      <SwiperNavButtons
        containerStyles="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-50 flex gap-2"
        btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
