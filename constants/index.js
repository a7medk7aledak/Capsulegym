
// import project8 from "../assets/projects/project-8.png";
export const HERO_CONTENT = `Welcome to Capsule Gym For a healthier body`;




export const ABOUT_TEXT = `Gym in a capsule
Through practice, we found that there are basic needs and information that anyone who exercises in the gym must have.
- This platform is designed to teach you the basics of the gym.
- You do exercise, eating in detail, and the rest of our habits that can affect our health, positively or negatively.
-And increase your knowledge and information in the field of fitness
Our goal is to facilitate and simplify information for people, so that they can achieve a healthy body.`;




import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
export const featured = [
  {
    icon: <FaUsers />,
    title: "Community",
    subtitle: "Join our supportive community.",
  },
  {
    icon: <IoIosPricetag />,
    title: "Affordable Pricing",
    subtitle: "High-quality service at an affordable price.",
  },
  {
    icon: <FaDumbbell />,
    title: "Top-notch Equipment",
    subtitle: "Access to the best fitness equipment.",
  },
];




import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
export const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: "training courses",
  },
  {
    number: 898,
    icon: FaClock,
    text: "working hours",
  },
  {
    number: 150,
    icon: FaTrophy,
    text: "Happy customers",
  },
  {
    number: 7,
    icon: FaTrophy,
    text: "INTERNATIONAL AWARDS"
  },
];

import class1 from "../public/assets/img/classes/bodybuilding.png";
import class2 from "../public/assets/img/classes/cardio.jpg";
import class3 from "../public/assets/img/classes/fitness.jpg";
import class4 from "../public/assets/img/classes/crossfit.jpg";
export const classes = [
  {
    name: "body building",
    img: class1,
    description:
      "a sport that involves the rigorous training and development of the body's muscles through a combination of weightlifting, cardio, and nutrition",
  },
  {
    name: "CARDIO",
    img: class2,
    description:
      "It gets your blood pumping and oxygen flowing, which translates to better health across the board.",
  },
  {
    name: "FITNESS",
    img: class3,
    description:
      "promotes strong muscles and bones. It improves respiratory, cardiovascular health, and overall health.",
  },
  {
    name: "CROSS FIT",
    img: class4,
    description:
      "a fitness program that produces measurable outcomes through lifestyle changes, centered on training and nutrition",
  },
];


import trainerData1 from "../public/assets/img/trainers/david.jpg";
import trainerData2 from "../public/assets/img/trainers/matt.jpg";
import trainerData3 from "../public/assets/img/trainers/rosy.jpg";
import trainerData4 from "../public/assets/img/trainers/sofia.jpg";
import { FaFacebook, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
export const trainerData = [
  {
    image: trainerData1,
    name: "David Williams",
    role: "Body builder coach",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, soluta.",
    social: [
      {
        icon: FaFacebook,
        href: "https://www.facebook.com/profile.php?id=100084221542902&ref=pages_you_manage",
      },
      { icon: FaTwitter, href: "http://twitter.com" },
      {
        icon: FaYoutube,
        href: "https://www.youtube.com/channel/UC2huGL4-BJUhRqvAnowoZFw",
      },
      {
        icon: FaTiktok,
        href: "https://www.tiktok.com/@capsulegym",
      },
    ],
  },
  {
    image: trainerData2,
    name: "matt Williams",
    role: "CARDIO coach",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, soluta.",
    social: [
      {
        icon: FaFacebook,
        href: "https://www.facebook.com/profile.php?id=100084221542902&ref=pages_you_manage",
      },
      { icon: FaTwitter, href: "http://twitter.com" },
      {
        icon: FaYoutube,
        href: "https://www.youtube.com/channel/UC2huGL4-BJUhRqvAnowoZFw",
      },
      {
        icon: FaTiktok,
        href: "https://www.tiktok.com/@capsulegym",
      },
    ],
  },
  {
    image: trainerData3,
    name: "rosy Williams",
    role: "FITNESS coach",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, soluta.",
    social: [
      {
        icon: FaFacebook,
        href: "https://www.facebook.com/profile.php?id=100084221542902&ref=pages_you_manage",
      },
      { icon: FaTwitter, href: "http://twitter.com" },
      {
        icon: FaYoutube,
        href: "https://www.youtube.com/channel/UC2huGL4-BJUhRqvAnowoZFw",
      },
      {
        icon: FaTiktok,
        href: "https://www.tiktok.com/@capsulegym",
      },
    ],
  },
  {
    image: trainerData4,
    name: "sofia Williams",
    role: "CROSS FIT coach",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, soluta.",
    social: [
      {
        icon: FaFacebook,
        href: "https://www.facebook.com/profile.php?id=100084221542902&ref=pages_you_manage",
      },
      { icon: FaTwitter, href: "https://www.tiktok.com/@capsulegym" },
      {
        icon: FaYoutube,
        href: "https://www.youtube.com/channel/UC2huGL4-BJUhRqvAnowoZFw",
      },
      {
        icon: FaTiktok,
        href: "https://www.tiktok.com/@capsulegym",
      },
    ],
  },
];


export const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
    name: "michael maze",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
    name: "maria mark",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
    name: "michael maze",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
    name: "maria mark",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
    name: "michael maze",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
    name: "maria mark",
  },
];

export const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
];



export const brandImages = [
  {
    src: "/assets/img/brands/brand-1.png",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-2.png",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-3.png",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-4.png",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-5.png",
    href: "",
  },
];


export const contactInfo = {
  address: "Sidi Bishr, Alexandria, Egypt",
  phoneNumbers: ["(+20) 1005701983", "(+20) 1550524864"],
  emails: ["capsulegym8@gmail.com", "info@gmail.com"],
  description: "Welcome to Capsule Gym For a healthier body.",
};

export const blogPosts = [
  {
    title: "HOW TO BE MOTIVATED FOR ALL EXERCISE",
    date: "July 31, 2020",
    href: "#",
  },
  {
    title: "HOW TO DO COMPLETE WORKOUT WITHOUT TIRED",
    date: "July 29, 2020",
    href: "#",
  },
  {
    title: "MAINTAIN A PERFECT STRUCTURE AFTER WORKOUT",
    date: "July 24, 2020",
    href: "#",
  },
];

export const galleryImages = [
  { src: "/assets/img/testimonial/michael.jpg", alt: "Gallery Image 1" },
  { src: "/assets/img/blog/post3.jpg", alt: "Gallery Image 2" },
  { src: "/assets/img/testimonial/lucy.jpg", alt: "Gallery Image 3" },
  { src: "/assets/img/blog/post4.jpg", alt: "Gallery Image 4" },
  { src: "/assets/img/testimonial/maria.jpg", alt: "Gallery Image 5" },
  { src: "/assets/img/trainers/sofia.jpg", alt: "Gallery Image 6" },
  { src: "/assets/img/trainers/david.jpg", alt: "Gallery Image 7" },
  { src: "/assets/img/trainers/matt.jpg", alt: "Gallery Image 8" },
  { src: "/assets/img/trainers/rosy.jpg", alt: "Gallery Image 9" },
];


export const socialLinks = [
  { iconClass: "fa fa-facebook", href: "http://facebook.com" },
  { iconClass: "fa fa-twitter", href: "http://twitter.com" },
  { iconClass: "fa fa-youtube", href: "http://youtube.com" },
];


