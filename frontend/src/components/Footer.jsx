import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-16 px-6 md:px-16 lg:px-24 py-12">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
         <img src={assets.footer} alt="Venzara Logo" />

          <p className="text-gray-300 text-sm leading-6">
            Venzara is your go-to fashion destination for trendy clothing,
            footwear, and accessories. Wear the vibe. Live Venzara.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h2 className="text-lg font-semibold mb-4">COMPANY</h2>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>

         

          <p className="text-gray-300 text-sm">
            venzara.fashion@gmail.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3 text-lg">
            <span className="cursor-pointer">📘</span>
            <span className="cursor-pointer">📸</span>
            <span className="cursor-pointer">🐦</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © 2026 venzara.com — All Rights Reserved
      </div>

    </div>
  );
};

export default Footer;