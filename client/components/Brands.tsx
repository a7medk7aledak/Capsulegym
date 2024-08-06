"use client";
import Image from "next/image";
import Link from "next/link";
import { brandImages } from "../constants";
import { motion } from "framer-motion";

const brandContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Brands = () => {
  return (
    <section className="py-24 border-t border-b border-gray-200" id="brands">
      <div className="container mx-auto px-4">
        <motion.div
          variants={brandContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-between items-center flex-wrap gap-y-16"
        >
          {brandImages.map((img, index) => (
            <motion.div
              variants={brandItem}
              key={index}
              className="flex-1 min-w-[150px] mx-4"
            >
              <Link className="group block" href={img.href}>
                <Image
                  className="opacity-60 transition-all duration-300 group-hover:opacity-100 mx-auto"
                  src={img.src}
                  width={200}
                  height={80}
                  alt=""
                  style={{
                    filter: "grayscale(100%)",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
