import { useState } from "react";
import { Link, useNavigate } from "react-router";
import backgroundImage from "../assets/fbg.jpg";
import leftImage from "../assets/a1.jpg";

const Register = () => {

  const navigate = useNavigate();

 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: ""
  });

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    localStorage.setItem("userData", JSON.stringify(formData));

    alert("Registration successful! Data saved to localStorage ✅");

  
    navigate("/");
  };

  return (
<div
      className="h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="backdrop-blur-lg bg-white/20 shadow-2xl rounded-3xl max-w-4xl w-full overflow-hidden flex flex-col lg:flex-row h-full">
  
        <div className="lg:w-1/2 hidden lg:block" style={{ backgroundImage : `url(${leftImage})`}}>
         
        </div>

   
        <div className="w-full lg:w-1/2 p-5 bg-white/40 ">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="firstName" className="block text-xl text-[#3a3b3b]">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b-2 border-b-white focus:outline-none focus:border-b-gradient-to-r focus:from-pink-400 focus:to-purple-500 placeholder-white text-white"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-xl text-[#3a3b3b]">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b-2 border-b-white focus:outline-none focus:border-b-gradient-to-r focus:from-pink-400 focus:to-purple-500 placeholder-white text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xl text-[#3a3b3b]">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b-2 border-b-white focus:outline-none focus:border-b-gradient-to-r focus:from-pink-400 focus:to-purple-500 placeholder-white text-white"
              />
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-xl text-[#3a3b3b]">
                Phone Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b-2 border-b-white focus:outline-none focus:border-b-gradient-to-r focus:from-pink-400 focus:to-purple-500 placeholder-white text-white"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xl text-[#3a3b3b]">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b-2 border-b-white focus:outline-none focus:border-b-gradient-to-r focus:from-pink-400 focus:to-purple-500 placeholder-white text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold text-xl py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Register
            </button>

            <p className="text-xl text-center text-gray-800">
              Already have an account?{" "}
              <Link to="/" className="text-purple-600 font-medium hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>


  )
}

export default Register