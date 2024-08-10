import React, { useState } from "react";
import axios from "axios";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", formData);
      console.log(res.data);
      // Handle successful login (e.g., store token, redirect)
    } catch (err) {
      console.error(err);
      // Handle login error
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto mt-8 bg-primary-200 p-8 rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-white font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
