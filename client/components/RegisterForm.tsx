import React, { useState } from "react";
import axios from "axios";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telephone: "",
    age: "",
    country: "",
    gender: "",
  });

  const {
    firstName,
    lastName,
    email,
    password,
    telephone,
    age,
    country,
    gender,
  } = formData;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        ...formData,
        telephone: parseInt(telephone),
        age: parseInt(age),
      });
      console.log(res.data);
      // Handle successful registration (e.g., store token, redirect)
    } catch (err) {
      console.error(err);
      // Handle registration error
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto mt-8 bg-primary-200 p-8 rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-white font-bold mb-2">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>
      {/* Repeat for lastName, email, password, telephone, age, country */}
      <div className="mb-6">
        <label htmlFor="gender" className="block text-white font-bold mb-2">
          Gender
        </label>
        <select
          name="gender"
          value={gender}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
