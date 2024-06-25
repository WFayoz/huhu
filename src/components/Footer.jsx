import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-24" id="footer">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="flex justify-between ">
          <div className="  md:w-1/3">
            <h3 className="font-bold mb-4">About us</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Direction
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Command
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Tools
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Clients
                </a>
              </li>
            </ul>
          </div>
          <div className="  md:w-1/3">
            <h3 className="font-bold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Development of mobile applications
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Development and implementation ERP systems
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  User interface, User experience design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  IT consulting
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Optimization IT consulting infrastructure
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-end  md:w-1/3">
            <h3 className="font-bold mb-4">Portfolio</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Delever
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Sms.uz
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Goodzone
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  Iman
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-300 pt-4">
          <p className="text-gray-600">
            &copy; 2024 Udevs. All rights reserved
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/">
              <FaInstagram className="text-purple-600 hover:text-purple-800 text-2xl" />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebookF className="text-purple-600 hover:text-purple-800 text-2xl" />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter className="text-purple-600 hover:text-purple-800 text-2xl" />
            </a>
            <a href="https://www.youtube.com/">
              <AiOutlineYoutube className="text-purple-600 hover:text-purple-800 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
