import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const { backendUrl } = useContext(ShopContext);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${backendUrl}/api/user/reset-password/${token}`,
        { password }
      );

      if (res.data.success) {
        toast.success("Password updated successfully 🚀");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong 😅");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">

        {/* 🔐 Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-purple-100 p-4 rounded-full text-2xl">
            🔐
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">Reset Password</h2>
        <p className="text-gray-500 text-sm mb-6">
          Enter your new password to regain access
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* 👁️ Toggle */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 cursor-pointer"
            >
              👁️
            </span>
          </div>

          {/* Hint */}
          <p className="text-xs text-gray-400 mb-4">
            Use at least 8 characters
          </p>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition"
          >
            Update Password
          </button>

        </form>

        {/* Back */}
        <p
          onClick={() => navigate("/login")}
          className="text-sm text-blue-500 mt-5 cursor-pointer"
        >
          Back to Login
        </p>

      </div>

    </div>
  );
};

export default ResetPassword;