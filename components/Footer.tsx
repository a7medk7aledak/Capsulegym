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
    setLoading(true);
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
      setLoading(false);
      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 5000);
    }
  };

  return (
    <footer className="relative text-white py-12 bg-black" id="contact">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/footer.jpg"
          alt="Decorative background image"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
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
          <div>
            <h4 className="text-xl font-bold mb-4">RECENT BLOG POSTS</h4>
            <ul>
              {blogPosts.map((post, index) => (
                <li key={index} className="mb-2">
                  <Link href={post.href} className="hover:underline">
                    {post.title}
                  </Link>
                  <p className="text-gray-400 text-sm">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-xl font-bold mb-4">GALLERY</h4>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, index) => (
                <Link key={index} href="#" className="block">
                  <Image
                    src={img.src}
                    width={90}
                    height={90}
                    alt={img.alt}
                    className="object-cover w-full h-full"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
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
                <div>
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
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⌛</span>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center relative z-10">
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            &copy; {currentYear} All rights reserved CapsuleGym.{" "}
            <span className="text-red-600">by Ahmed Khaled</span>
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-xl">
                <i className={link.iconClass}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
