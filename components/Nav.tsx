"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -80 },
  { name: "team", target: "team", offset: 0 },
  { name: "prices", target: "prices", offset: -40 },
  { name: "testimonial", target: "testimonial", offset: 0 },
  { name: "blog", target: "blog", offset: 0 },
  { name: "contact", target: "contact", offset: 0 },
];

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  const router = useRouter();

  const handleNavClick = (target: string) => {
    const currentPath = window.location.pathname;

    // If not on the homepage, redirect to the homepage and store the target section
    if (currentPath !== "/") {
      localStorage.setItem("scrollTarget", target);
      router.push("/");
    } else {
      // If already on the homepage, scroll to the target section directly
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const scrollTarget = localStorage.getItem("scrollTarget");
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      localStorage.removeItem("scrollTarget");
    }
  }, [router]);

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <span
          key={index}
          onClick={() => handleNavClick(link.target)}
          className="cursor-pointer hover:text-accent transition-all"
        >
          {link.name}
        </span>
      ))}
    </nav>
  );
};

export default Nav;
