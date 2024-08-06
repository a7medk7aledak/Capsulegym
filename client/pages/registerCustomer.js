import { useState } from "react";
import axios from "axios";

const RegisterCustomer = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telephone: "",
    age: "",
    country: "",
    gender: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/customers/register", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to register");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl mb-4">Register Customer</h2>
        {Object.keys(form).map((key) => (
          <div className="mb-4" key={key}>
            <label className="block mb-1" htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type={key === "password" ? "password" : "text"}
              id={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterCustomer;
