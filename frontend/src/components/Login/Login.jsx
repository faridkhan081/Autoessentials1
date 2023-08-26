import React, { useState } from "react";
import styles from "../../styles/styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import mainlogo from "../../Assets/images/main-logo.svg";
import { toast } from "react-toastify";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/");
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  //  style={{background:'url(https://www.toptal.com/designers/subtlepatterns/uploads/topography.png)'}}

  return (


<section className="min-h-screen bg-gray-50">
<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
  <aside
  
    className="relative block h-[100px]  lg:col-span-5 lg:h-full xl:col-span-6"
  >
    <img
      alt="Pattern"
      src="https://images.unsplash.com/photo-1590227763209-821c686b932f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      className="absolute inset-0 h-full w-full object-cover filter brightness-50 opacity-80"
    />
  </aside>

  <main
    className="flex justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    style={{background:'url(https://www.toptal.com/designers/subtlepatterns/uploads/topography.png)'}}
    
  >
    <div className="max-w-xl lg:max-w-3xl mt-2">
      <a className="block text-blue-600" href="/">
        <span className="sr-only">Home</span>
        <Link
            to="/"
            className="text-blue-600 return-home-link "
          >
            <BsFillArrowLeftSquareFill size={30} />
          </Link>
      </a>

      <h1
        className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
      >
        Welcome to AutoEssentials
      </h1>

      <p className="mt-4 leading-relaxed text-gray-500">
      Beyond Choices, We Offer Solutions: Curating an Unrivaled Selection of Auto Spare Parts and Lubricants to Cater to Every Driver's Unique Needs
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">

      



        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
               type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md !border-gray-200 !bg-white text-sm !text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 relative">
          <label
            htmlFor="Password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            type={visible ? "text" : "password"}
           
                  name="password"
                  autoComplete="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />

{visible ? (
                  <AiOutlineEye
                    className="absolute right-3 top-[35px] cursor-pointer text-gray-400"
                    
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-3 top-[35px] cursor-pointer text-gray-400"
                   
                    onClick={() => setVisible(true)}
                  />
                )}

        </div>

    

        <div className={`col-span-6 sm:col-span-3 flex justify-between`}>
                <div>
                 <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-0 border-gray-300 rounded focus:outline-none"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm ">
                  <a
                    href="/forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
    </div>

      
   

        <div className="col-span-6">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our
            <a href="#" className="text-gray-700 underline">
              terms and conditions
            </a>
            and 
            <Link to="#" className="text-gray-700 underline">privacy policy</Link>.
          </p>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Sign in
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            No account?
            <Link to="/sign-up" className="text-gray-700 underline">Sign up</Link>.
          </p>
        </div>
      </form>
    </div>
  </main>
</div>
</section>
  );
};

export default Login;
