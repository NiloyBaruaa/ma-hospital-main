import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    if (username === "admin" && password === "12345") {
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate("/adminDashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-sans">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-3xl transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 animate-fade-in-down">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-400">
          © 2025 Nil-Academy Admin Panel
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
