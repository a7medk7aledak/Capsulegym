import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen">
      <Header />
      <main className="pt-[124px]">{children}</main>

    </div>
  );
};

export default Layout;
