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

  const getNeedleRotation = () => {
    const bmi = parseFloat(result);
    if (bmi < 18.5) return -60;
    if (bmi >= 18.5 && bmi < 25) return -20;
    if (bmi >= 25 && bmi < 30) return 20;
    if (bmi >= 30 && bmi < 40) return 60;
    return 100; // BMI >= 40
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

      {/* BMI Result Indicator */}
      <motion.div
        variants={fadeIn("up", 1.0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mt-8 flex flex-col items-center"
      >
        <h3 className="text-xl mb-4">BODY MASS INDEX</h3>
        <div className="bmi-indicator">
          <div
            className="needle"
            style={{ transform: `rotate(${getNeedleRotation()}deg)` }}
          ></div>
        </div>
        <ul className="bmi-categories">
          <li className="normal">Normal (18.5-24.9)</li>
          <li className="overweight">Overweight (25-29.9)</li>
          <li className="obese">Obese (30-39.9)</li>
          <li className="morbidly-obese">Morbidly Obese (&gt;40)</li>
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default BMICalculator;
