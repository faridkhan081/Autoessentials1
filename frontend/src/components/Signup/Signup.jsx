import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import mainlogo from "../../Assets/images/main-logo.svg";
import axios from "axios";

import { server } from "./../../server";
import { toast } from 'react-toastify';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();


  function handleFileInputChange(e) {
    const file = e.target.files[0];
    setAvatar(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type":  "multipart/form-data" } };
   
    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);

    axios.post(`${server}/user/create-user`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setName('');
        setEmail('');
        setPassword('');
        setAvatar();
       
        if(res.data.success === true){
          navigate('/login')
        }
      
        console.log(res);
      })
      .catch((error) => {
       
       toast.error(error.response.data.message)
      });
  };

  return (


  <section className="min-h-screen bg-gray-50">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      className="relative block h-[100px]  lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
     
    >
      <img
      
        alt="Pattern"
        src="https://images.unsplash.com/photo-1590227763209-821c686b932f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        className="absolute inset-0 h-full w-full object-cover filter brightness-50 "
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      style={{background:'url(https://www.toptal.com/designers/subtlepatterns/uploads/topography.png)'}}
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-rose-600" href="/">
          <span className="sr-only">Home</span>
          <Link
              to="/"
              className="text-rose-500 hover:text-rose-600 "
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
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
             type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>



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
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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

          <div className="col-span-6 sm:col-span-3">


              <div>
               <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-6 flex items-center">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {avatar ? (
                      <img
                        src={URL.createObjectURL(avatar)}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                  </span>
                  <label
                  style={{cursor:'pointer'}}
                    htmlFor="file-input"
                    className="ml-5 flex items-center justify-center px-4 py-2 border rounded-md border-gray-200   shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <span>Upload a file</span>
                    <input
                    
                      type="file"
                      name="avatar"
                      id="file-input"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileInputChange}
                      className="sr-only"
                    />
                  </label>
                </div>
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
            <button type="submit"
              className="inline-block shrink-0 rounded-md border border-rose-600 bg-rose-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to="/login" className="text-gray-700 underline">Log in</Link>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
  );
};

export default Signup;
