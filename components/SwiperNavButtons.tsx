// components/SwiperNavButtons.tsx
import { useSwiper } from 'swiper/react';

const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}) => {
  const swiper = useSwiper();

  return (
    <div className={`${containerStyles} absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2`}>
      <button
        className={`${btnStyles} hover:font-bold bg-red-900/25 `}
        onClick={() => swiper.slidePrev()}
      >
        <span className={iconStyles}>{"<"}</span>
      </button>
      <button
        className={`${btnStyles} hover:font-bold bg-red-900/25`}
        onClick={() => swiper.slideNext()}
      >
        <span className={iconStyles}>{">"}</span>
      </button>
    </div>
  );
};

export default SwiperNavButtons;
