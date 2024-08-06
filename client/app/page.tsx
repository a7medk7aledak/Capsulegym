import About from "@/components/About";
import Blog from "@/components/Blog";
import BMICalculator from "@/components/BMICalculator";
import Brands from "@/components/Brands";
import Classes from "@/components/Classes";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <Classes/>
      <Team/>
      <Membership/>
      <BMICalculator/>
      <Testimonial/>
      <Blog/>
      <Brands/>
      {/* {temporary div} */}
    </main>
  );
}
