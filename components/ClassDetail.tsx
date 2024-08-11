"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import { classes } from "@/constants";

const ClassDetail = () => {
  const params = useParams();
  const id = params?.id as string;

  const selectedClass = classes.find((cls) => cls.id === id);

  if (!selectedClass) {
    return <div>Class not found</div>;
  }

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-12 flex flex-col items-center justify-center"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg"
      >
        <Image
          src={selectedClass.img}
          alt={selectedClass.name}
          width={800}
          height={400}
          className="rounded-lg"
        />
        <h1 className="text-3xl font-bold text-center mt-6">
          {selectedClass.name}
        </h1>
        <p className="text-lg mt-4">{selectedClass.description}</p>
        <p className="text-md mt-4 text-gray-600">
          Engaging in {selectedClass.name} helps to improve your overall health,
          increase your strength, endurance, and enhance your mental well-being.
          Its a great way to challenge yourself, learn new skills, and meet
          like-minded individuals who share your passion for fitness.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ClassDetail;
