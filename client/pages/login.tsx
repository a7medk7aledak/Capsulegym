import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pt-[124px]">
        <h1 className="text-3xl font-bold text-center my-8 text-white">
          Login
        </h1>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
