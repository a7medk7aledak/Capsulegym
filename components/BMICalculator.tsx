"use client";


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "./CustomButton";
import { fadeIn } from "@/lib/variants";

const BMICalculator = () => {
  const [unit, setUnit] = useState("imperial");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [alert, setAlert] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setAlert("Please enter valid height and weight.");
      return;
    }

    setAlert(""); // Clear the alert if fields are valid

    let heightInMeters;
    let weightInKg;

    if (unit === "imperial") {
      heightInMeters = parseFloat(height) * 0.3048; // Convert height from feet to meters
      weightInKg = parseFloat(weight) * 0.453592; // Convert weight from lbs to kg
    } else {
      heightInMeters = parseFloat(height) / 100; // Convert height from cm to meters
      weightInKg = parseFloat(weight); // Weight is already in kg
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    setResult(bmi.toFixed(2));
  };

  const resetFields = () => {
    setGender("");
    setHeight("");
    setWeight("");
    setResult("");
    setAlert("");
  };

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-12 flex flex-col items-center justify-center"
    >
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-2xl md:text-3xl text-center mb-6"
      >
        BMI Calculator
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full max-w-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="imperial">Ft, Lbs</option>
            <option value="metric">Cm, Kg</option>
          </select>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={
              unit === "imperial" ? "Your Height in Ft" : "Your Height in Cm"
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={
              unit === "imperial" ? "Your Weight in Lbs" : "Your Weight in Kg"
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            value={result}
            readOnly
            placeholder="Result here of BMI"
            className="border p-2 rounded"
          />
        </div>
        <div className="mt-4 flex gap-4 justify-center">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CustomButton
              containerStyles="w-[196px] h-[62px]"
              text="CALCULATE IT"
              onClick={calculateBMI}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CustomButton
              containerStyles="w-[196px] h-[62px]"
              text="RESET IT"
              onClick={resetFields}
            />
          </motion.div>
        </div>
        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 text-center text-red-500"
            >
              {alert}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 1.0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mt-8 text-center"
      >
        <h3 className="text-xl mb-4">BODY MASS INDEX</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <table className="mx-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border p-2">BMI</th>
              <th className="border p-2">CLASSIFICATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">18.5-25</td>
              <td className="border p-2">Normal Weight</td>
            </tr>
            <tr>
              <td className="border p-2">25-30</td>
              <td className="border p-2">Over Weight</td>
            </tr>
            <tr>
              <td className="border p-2">30-40</td>
              <td className="border p-2">Obesity</td>
            </tr>
            <tr>
              <td className="border p-2">&gt;40</td>
              <td className="border p-2">Morbid Obesity</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
};

export default BMICalculator;