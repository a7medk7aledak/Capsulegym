// components/SwiperNavButtonsBloge.tsx
import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SwiperNavButtonsBlogeProps {
  containerStyles: string;
}

const SwiperNavButtonsBloge: React.FC<SwiperNavButtonsBlogeProps> = ({
  containerStyles,
}) => {
  const swiper = useSwiper();

  return (
    <>
      <button
        className={`${containerStyles} left-4 lg:-left-20`}
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft className="text-2xl" />
      </button>
      <button
        className={`${containerStyles} right-4 lg:-right-20`}
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight className="text-2xl" />
      </button>
    </>
  );
};

export default SwiperNavButtonsBloge;
