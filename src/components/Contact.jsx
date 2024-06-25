"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaPhoneAlt,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleValidation = () => {
    if (name && email && message) {
      setIsValid(true);
      return true;
    } else {
      setIsValid(false);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
    }
  };

  return (
    <div className="mt-20">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-4xl md:text-6xl text-blue-700 font-bold py-10">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4 md:px-0">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Leave us a message</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border ${
                isValid ? "border-gray-300" : "border-red-500"
              } rounded-md w-full py-2 px-4 mb-2`}
              placeholder="Name"
            />
            {!isValid && !name && (
              <p className="text-red-500 mb-4">Name is required</p>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border ${
                isValid ? "border-gray-300" : "border-red-500"
              } rounded-md w-full py-2 px-4 mb-2`}
              placeholder="Your email"
            />
            {!isValid && !email && (
              <p className="text-red-500 mb-4">Email is required</p>
            )}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`border ${
                isValid ? "border-gray-300" : "border-red-500"
              } rounded-md w-full py-2 px-4 mb-2 resize-none h-32`}
              placeholder="Briefly describe your project"
            ></textarea>
            {!isValid && !message && (
              <p className="text-red-500 mb-4">Message is required</p>
            )}
            <button
              onClick={handleSubmit}
              className="w-full md:w-2/5 text-center text-white font-bold py-2 rounded-lg text-xl bg-blue-700 hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send
            </button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex items-center">
              <CiLocationOn
                className={`text-blue-700 mr-2 text-3xl ${
                  isValid ? "" : "text-red-500"
                } hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105`}
              />
              <p>Tashkent Mirzo Ulugbek tumani 5-uy 32 address</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt
                className={`text-blue-700 mr-2 text-3xl ${
                  isValid ? "" : "text-red-500"
                } hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105`}
              />
              <p>+998 974 563 225</p>
            </div>
            <div className="flex items-center">
              <SlEnvolopeLetter
                className={`text-blue-700 mr-2 text-3xl ${
                  isValid ? "" : "text-red-500"
                } hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105`}
              />
              <p>azizbek@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaTelegramPlane
                className={`text-blue-700 mr-2 text-3xl ${
                  isValid ? "" : "text-red-500"
                } hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105`}
              />
              <p>t.me/azizbekbahodirov</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/">
                <FaInstagram
                  className={`text-blue-700 text-3xl hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105`}
                />
              </a>
              <a href="https://www.youtube.com/">
                <AiOutlineYoutube
                  className={`text-blue-700 text-3xl hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105`}
                />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebookF
                  className={`text-blue-700 text-3xl hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105`}
                />
              </a>
              <a href="https://twitter.com/">
                <FaTwitter
                  className={`text-blue-700 text-3xl hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105`}
                />
              </a>
            </div>
            <div className="mt-4">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.286172133375!2d69.19152837593231!3d41.28087587131365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b005b79596d%3A0x53600ea7ef2b8b2!2sPokiza%20Food!5e0!3m2!1sen!2s!4v1717881637816!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
