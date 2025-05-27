import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpBar from "../Component/SignUpBar";
import NavBar from "../Component/NavBar";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (!user) {
      toast.error("Invalid username or password!");
      return;
    }

    toast.success("Login successful!");
    localStorage.setItem("isAuthenticated", "true");
    navigate("/Home");
  };

  const goToSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 font-heading z-50">
        <SignUpBar />
        <NavBar />
      </div>

      <ToastContainer />

      <div className="min-h-screen flex justify-center items-center pt-32 bg-transparent">
        <div className="group relative w-[85%] sm:w-[400px] max-w-full bg-primary rounded-xl border border-gray-600 hover:border-secondary shadow-md hover:shadow-lg hover:ring-2 hover:ring-secondary transition-all duration-500 ease-in-out hover:h-[450px] h-[70px] overflow-hidden">
          {/* Centered Login Text */}
          <div className="absolute top-0 left-0 w-full h-[70px] flex justify-center items-center text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0">
            Login
          </div>

          {/* Hover Form Section */}
          <div className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[900px] overflow-hidden transition-all duration-500 ease-in-out p-6 pt-20">
            <form onSubmit={handleLogin}>
              <h2 className="text-3xl text-white font-bold text-center mb-6">
                Login
              </h2>

              <div className="mb-4">
                <label className="block text-white mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-primary text-white rounded-md border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-primary text-white rounded-md border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-secondary text-white rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Log In
              </button>

              <div className="mt-4 text-center text-white">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={goToSignUp}
                  className="text-secondary hover:underline"
                >
                  Create an Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
