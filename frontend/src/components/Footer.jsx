import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-16 px-6 md:px-16 lg:px-24 py-12">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT - LOGO + TEXT */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-3">
            🛒 NexCart
          </h1>

          <p className="text-gray-600 text-sm leading-6">
            Agents that analyze your storefront data, launch tests,
            and measure revenue lift to improve your site's
            performance 24/7.
          </p>
        </div>

        {/* CENTER - COMPANY */}
        <div>
          <h2 className="text-lg font-semibold mb-4">COMPANY</h2>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT - CONTACT */}
        <div>
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>

          <p className="text-gray-600 text-sm mb-2">
            +91 4567835138
          </p>

          <p className="text-gray-600 text-sm">
            contact@nexcart.com
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t mt-10 pt-5 text-center text-sm text-gray-500">
        © 2026 nexcart.com — All Rights Reserved
      </div>

    </div>
  );
};

export default Footer;