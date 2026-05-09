import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("adminToken")) navigate("/add", { replace: true });
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });
      if (data.success && data.token) {
        localStorage.setItem("adminToken", data.token);
        toast.success("Logged in");
        navigate("/add");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md rounded-xl bg-white p-8 shadow-md sm:p-10"
        >
          <h1 className="mb-8 text-center text-2xl font-bold text-black">
            Admin Panel
          </h1>
          <label className="mb-1 block text-sm text-gray-600">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-5 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-500"
            required
            autoComplete="email"
          />
          <label className="mb-1 block text-sm text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-8 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-500"
            required
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
