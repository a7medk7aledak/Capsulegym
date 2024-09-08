"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { blogData } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const capsuleblog = "https://capsule-blog.onrender.com/";
const Blog = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="bg-primary-300 text-white py-24 relative" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-8 text-[36px]"
        >
          Blogs
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="relative"
        >
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="mx-auto flex flex-col justify-start h-full max-w-[320px]">
                  <Image
                    src={post.img}
                    width={320}
                    height={266}
                    alt=""
                    className="mb-6"
                  />
                  <div className="flex flex-col items-start">
                    <p className="max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                      {post.date}
                    </p>
                    <Link
                      className="hover:text-accent transition-all duration-300"
                      href={post.href}
                    >
                      <h5 className="text-[22px]">{post.title}</h5>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="absolute top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-white text-white hover:text-accent w-12 h-12 rounded-full flex justify-center items-center transition-all duration-300 opacity-50 hover:opacity-100 left-4 lg:-left-20"
            onClick={() => swiper?.slidePrev()}
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-white text-white hover:text-accent w-12 h-12 rounded-full flex justify-center items-center transition-all duration-300 opacity-50 hover:opacity-100 right-4 lg:-right-20"
            onClick={() => swiper?.slideNext()}
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="block w-[196px] h-[62px] mx-auto"
            text="View all"
            onClick={() => window.open(capsuleblog)}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
