// components/HeroSlider.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';
import { HERO_CONTENT } from '../constants';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const HeroSlider: React.FC = () => {
  return (
    <Swiper className='h-full'>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl text-white text-center lg:text-left mb-2"
            >
              <span className='text-red-600'>WHERE HARD</span> WORK MEETS SUCCESS
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
              className="text-gray-300 italic text-center lg:text-left mb-4"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton text="Get started" containerStyles="text-lg w-[160px] h-[62px] bg-red-600 text-white rounded" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl text-white text-center lg:text-left mb-2"
            >
              <span className='text-red-600'>HARD WORK</span> IS FOR EVERY SUCCESS
            </motion.h1>
            <motion.p 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
              className="text-gray-300 italic text-center lg:text-left mb-4"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton text="Get started" containerStyles="text-lg w-[160px] h-[62px] bg-red-600 text-white rounded" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperNavButtons
        containerStyles='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-50 flex gap-2'
        btnStyles='border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300'
        iconStyles='text-2xl'
      />
    </Swiper>
  );
};

export default HeroSlider;
