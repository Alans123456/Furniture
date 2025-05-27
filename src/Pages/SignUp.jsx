import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpBar from "../Component/SignUpBar";
import NavBar from "../Component/NavBar";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatch(true);
      toast.error("Passwords do not match");
      return;
    }

    if (!formData.termsAccepted) {
      toast.error("You must accept the terms to continue.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    localStorage.setItem("users", JSON.stringify(existingUsers));

    toast.success("Sign up successful! Redirecting to Login...");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 font-heading z-50">
        <SignUpBar />
        <NavBar />
      </div>

      <ToastContainer />

      <div className="min-h-screen flex justify-center items-center pt-28 bg-transparent">
        <div className="group relative w-[85%] sm:w-[400px] max-w-full bg-primary rounded-xl border border-gray-600 hover:border-secondary shadow-md hover:shadow-lg hover:ring-2 hover:ring-secondary transition-all duration-500 ease-in-out hover:h-[550px] h-[70px] overflow-hidden">
          {/* Centered SignUp Text */}
          <div className="absolute top-0 left-0 w-full h-[70px] flex justify-center items-center text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0">
            Sign Up
          </div>

          {/* Hover Form Section */}
          <div className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[800px] overflow-hidden transition-all duration-500 ease-in-out p-4 pt-20">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl text-white font-bold text-center mb-4">
                Create Account
              </h2>

              <div className="mb-3">
                <label className="block text-white text-sm mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-primary text-white rounded-md border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-white text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-primary text-white rounded-md border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-white text-sm mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-primary text-white rounded-md border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-white text-sm mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-primary text-white rounded-md border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  required
                />
              </div>

              {passwordMismatch && (
                <div className="text-red-500 text-sm mb-2">
                  Passwords do not match
                </div>
              )}

              <div className="flex items-center mb-3">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-white text-sm">
                  I accept all{" "}
                  <span className="text-secondary">terms and conditions</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Sign Up
              </button>

              <div className="mt-3 text-center text-white text-sm">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={goToLogin}
                  className="text-secondary hover:underline"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
