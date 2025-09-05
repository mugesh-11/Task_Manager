import { useState } from "react";
import { Link, useNavigate } from "react-router";
import backgroundImage from "../assets/bg.jpg";
import firefoxLogo from "../assets/firefox.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert("Login Successful ✅");
      navigate("/home");
    } else {
      alert("Invalid Email or Password ");
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-purple-800 via-purple-700 to-fuchsia-700 flex justify-center items-center p-6">
        <div className="h-[580px] w-[980px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div
            className="relative h-full w-full bg-cover bg-left"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

            <div className="absolute top-6 left-6 z-10 ">
              <img
                src={firefoxLogo}
                alt="Login Logo"
                className="h-13 mt-115 drop-shadow-lg"
              />
              <p className="text-xl font-bold">Connect... Create.. Conquer.</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-end pr-10 z-10">
              <div className=" p-8 rounded-2xl w-[400px] text-white">
                <div className="w-70 flex flex-col justify-center items-center">
                  <h1 className="text-3xl font-bold mb-4">Login Page</h1>
                  <p className="text-sm text-gray-300 mb-6">
                    Create your account
                  </p>
                </div>

                <form
                  action=""
                  onSubmit={handleLogin}
                  className="flex flex-col gap-1"
                >
                  <label htmlFor="email" className="block mb-2x text-gray-600 ">
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 p-3 rounded-lg bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                  <label
                    htmlFor="password"
                    className="block mb-2 text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 p-3 rounded-lg bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 transition duration-300 font-semibold"
                  >
                    Login
                  </button>

                  <p className="text-center font-medium">
                    Create new Account ?{" "}
                    <Link
                      className="text-blue-400 font-medium"
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
