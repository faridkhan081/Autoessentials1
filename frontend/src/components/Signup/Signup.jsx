import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import mainlogo from "../../Assets/images/main-logo.svg";
import axios from "axios";

import { server } from "./../../server";
import { toast } from 'react-toastify';

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
    <div
      className="min-h-screen  bg-gray-50 "
      style={{
        background:
          "url(https://www.toptal.com/designers/subtlepatterns/uploads/topography.png)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "30px",
          padding: "10px",
          // border: "1px solid red",
        }}
      >
        <Link to="/login" className="text-blue-600 return-home-link">
          <BsFillArrowLeftSquareFill />
        </Link>
        <div
          style={{ width: "95%", display: "flex", justifyContent: "center" }}
        >
          <img style={{ textAlign: "center" }} src={mainlogo} alt="" />
        </div>
      </div>

      <div
        className=" bg-gray-50 flex flex-col justify-center py-10 sm:px-6 lg:px-8"
        style={{
          background:
            "url(https://www.toptal.com/designers/subtlepatterns/uploads/topography.png)",
        }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" text-center text-3xl font-extrabold text-gray-900">
            Register as a new user
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>

                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-2 flex items-center">
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
                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
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

              <div>
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                 
                >
                  Register
                </button>
              </div>
              <div className="flex justify-center">
                <h4>Already have an account?</h4>
                <Link to="/login" className="text-blue-600 pl-2">
                  Sign in
                </Link>
              </div>
              {/* <div>
                <p className="text-center">Or With</p>
                <div className="flex-row mt-3">
                  <button className="btn google">
                    <svg
                      xmlSpace="preserve"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      viewBox="0 0 512 512"
                      y="0px"
                      x="0px"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      width={20}
                      version="1.1"
                    >
                      <path
                        d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                        style={{ fill: "#FBBB00" }}
                      />
                      <path
                        d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                        style={{ fill: "#518EF8" }}
                      />
                      <path
                        d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                        style={{ fill: "#28B446" }}
                      />
                      <path
                        d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                        style={{ fill: "#F14336" }}
                      />
                    </svg>
                    Google
                  </button>
                  <button className="btn apple">
                    <svg
                      xmlSpace="preserve"
                      style={{ enableBackground: "new 0 0 22.773 22.773" }}
                      viewBox="0 0 22.773 22.773"
                      y="0px"
                      x="0px"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Capa_1"
                      width={20}
                      height={20}
                      version="1.1"
                    >
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />{" "}
                          <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />{" "}
                        </g>
                      </g>
                    </svg>
                    Apple{" "}
                  </button>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
