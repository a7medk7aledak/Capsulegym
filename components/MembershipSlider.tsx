"use client";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; // Import useRouter
// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// membership data
const membershipData = [
  {
    title: "Standard",
    price: "30",
    benefits: [
      { icon: MdClose, text: "Diet plan included" },
      { icon: FaCheck, text: "Includes membership" },
      { icon: FaCheck, text: "Access to all gym facilities" },
      { icon: FaCheck, text: "Health and fitness tips" },
      { icon: MdClose, text: "No additional amenities" },
      { icon: MdClose, text: "Monday-Friday gym access" },
      { icon: FaCheck, text: "Full access to everything" },
    ],
  },
  {
    title: "Ultimate",
    price: "45",
    benefits: [
      { icon: MdClose, text: "Diet plan included" },
      { icon: FaCheck, text: "Includes membership" },
      { icon: FaCheck, text: "Access to all gym facilities" },
      { icon: FaCheck, text: "Health and fitness tips" },
      { icon: MdClose, text: "No additional amenities" },
      { icon: MdClose, text: "Monday-Friday gym access" },
      { icon: FaCheck, text: "Full access to everything" },
    ],
  },
  {
    title: "Professional",
    price: "60",
    benefits: [
      { icon: MdClose, text: "Diet plan included" },
      { icon: FaCheck, text: "Includes membership" },
      { icon: FaCheck, text: "Access to all gym facilities" },
      { icon: FaCheck, text: "Health and fitness tips" },
      { icon: MdClose, text: "No additional amenities" },
      { icon: MdClose, text: "Monday-Friday gym access" },
      { icon: FaCheck, text: "Full access to everything" },
    ],
  },
];

const MembershipSlider = () => {
  const router = useRouter(); // Initialize the router

  const handleBuyNow = (membershipTitle: string, membershipPrice: string) => {
    // Navigate to the payment page with membership details
    router.push(
      `/payment?membership=${membershipTitle}&price=${membershipPrice}`
    );
  };

  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
            <div className="py-5 px-8 border-b border-accent">
              <h4 className="text-2xl">{item.title}</h4>
            </div>
            {/* Benefits */}
            <div className="py-8 px-8">
              <ul className="flex flex-col gap-5 mb-7">
                {item.benefits.map((benefit, benefitIndex) => (
                  <li className="flex items-center gap-2" key={benefitIndex}>
                    <benefit.icon className="text-accent text-lg" />
                    {benefit.text}
                  </li>
                ))}
              </ul>
              {/* Price & Button */}
              <p className="text-accent mb-8 flex gap-1 items-center">
                <sup className="text-4xl">$</sup>
                <strong className="text-6xl">{item.price}</strong>
                <em className="self-end text-2xl">/month</em>
              </p>

              <CustomButton
                text={"Buy now"}
                containerStyles={"w-[196px] h-[62px]"}
                onClick={() => handleBuyNow(item.title, item.price)} // Pass the membership details
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembershipSlider;
