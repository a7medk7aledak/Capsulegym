"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  contactInfo,
  blogPosts,
  galleryImages,
  socialLinks,
} from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on form submit
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setAlertMessage("Email sent successfully");
        setAlertType("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.error("Error response:", result);
        setAlertMessage("Error sending email: " + result.message);
        setAlertType("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertMessage("Error submitting form");
      setAlertType("error");
    } finally {
      setLoading(false); // Set loading to false once the process is done
      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 5000);
    }
  };

  return (
    <footer className="relative text-white py-12 bg-black" id="contact">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/img/footer.jpg"
            alt="Decorative background image"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-40"
          />
        </div>
      </div>
      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-wrap justify-between items-start">
          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Capsule Gym</h4>
            <p className="mb-4">{contactInfo.description}</p>
            <ul>
              <li className="mb-2">{contactInfo.address}</li>
              {contactInfo.phoneNumbers.map((number, index) => (
                <li key={index} className="mb-2">
                  {number}
                </li>
              ))}
              {contactInfo.emails.map((email, index) => (
                <li key={index} className="mb-2">
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blog Posts */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">RECENT BLOG POSTS</h4>
            <ul>
              {blogPosts.map((post, index) => (
                <li key={index} className="mb-2">
                  <Link href={post.href} legacyBehavior>
                    <a className="hover:underline">{post.title}</a>
                  </Link>
                  <p className="text-gray-400 text-sm">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">GALLERY</h4>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, index) => (
                <Link key={index} href="#">
                  <Image
                    src={img.src}
                    width={90}
                    height={90}
                    alt={img.alt}
                    className="object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            {alertMessage && (
              <div
                className={`alert ${
                  alertType === "success" ? "alert-success" : "alert-error"
                } alert-show mb-4`}
                style={{ transition: "opacity 0.5s ease" }}
              >
                {alertMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="firstName" className="block text-sm mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="lastName" className="block text-sm mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-black"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded text-black"
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className={`bg-red-600 text-white p-3 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 ${
                    loading ? "loading" : ""
                  }`}
                  disabled={loading}
                >
                  {loading && (
                    <div className="spinner border-t-2 border-b-2 border-white border-solid w-4 h-4 rounded-full animate-spin mr-2 inline-block"></div>
                  )}
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center relative z-10">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} CapsuleGym. All rights reserved{" "}
            <span className="text-red-600">by Ahmed Khaled</span>
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} legacyBehavior>
                <a className="text-xl">
                  <i className={link.iconClass}></i>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
