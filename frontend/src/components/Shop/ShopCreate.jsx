import React, { useState } from "react";
import styles from "../../styles/styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {server} from '../../server'
import mainlogo from "../../Assets/images/main-logo.svg";
import { toast } from 'react-toastify';
import { RxAvatar } from "react-icons/rx";

const ShopCreate = () => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState();
  const [avatar, setAvatar] = useState();
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e)=>{
    e.preventDefault();
   
    const config = { headers: { "Content-Type":  "multipart/form-data" } };
   
    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);
    newForm.append("zipCode", zipCode);
    newForm.append("address", address);
    newForm.append("phoneNumber", phoneNumber);

    axios.post(`${server}/shop/create-shop`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setName('');
        setEmail('');
        setPassword('');
        setAvatar();
        setZipCode("");
        setPhoneNumber();
        setAddress("");

       
        if(res.data.success === true){
          navigate('/shop-login')

          // please navigate to shop login page
        }
      
        console.log(res);
      })
      .catch((error) => {
       
       toast.error(error.response.data.message)
      });


  }

  const handleFileInputChange =(e) =>{
    const file = e.target.files[0];
    setAvatar(file);
  }

  //  style={{background:'url(https://www.toptal.com/designers/subtlepatterns/uploads/topography.png)'}}

  return (
  //   <div className="min-h-screen  bg-gray-50">
  //     <div
  //       style={{
  //         display: "flex",
  //         fontSize: "30px",
  //         padding: "10px",
  //         // border: "1px solid red",
  //       }}
  //     >
  //       <Link to="/" className="text-blue-600 return-home-link">
  //         <BsFillArrowLeftSquareFill />
  //       </Link>
  //       <div
  //         style={{ width: "95%", display: "flex", justifyContent: "center" }}
  //       >
  //         <img style={{ textAlign: "center" }} src={mainlogo} alt="" />
  //       </div>
  //     </div>

  //     <div className=" bg-gray-50 flex flex-col justify-center py-10 sm:px-6 lg:px-8" >
  //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
  //         <h2 className=" text-center text-3xl font-extrabold text-gray-900">
  //           Register as a seller
  //         </h2>
  //       </div>
  //       <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[35rem]">
  //         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
  //           <form className="space-y-6" onSubmit={handleSubmit}>
  //           <div>
  //               <label
  //                 htmlFor="email"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 Shope Name
  //               </label>

  //               <div className="mt-1">
  //                 <input
  //                   type="name"
  //                   name="name"
                    
  //                   required
  //                   value={name}
  //                   onChange={(e) => setName(e.target.value)}
  //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  //                 />
  //               </div>
  //             </div>
             
             
  //             <div>
  //               <label
  //                 htmlFor="email"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 Phone Number
  //               </label>

  //               <div className="mt-1">
  //                 <input
  //                   type="number"
  //                   name="phone-number"
                   
  //                   required
  //                   value={phoneNumber}
  //                   onChange={(e) => setPhoneNumber(e.target.value)}
  //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  //                 />
  //               </div>
  //             </div>
             
  //             <div>
  //               <label
  //                 htmlFor="email"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 Email
  //               </label>

  //               <div className="mt-1">
  //                 <input
  //                   type="email"
  //                   name="email"
  //                   autoComplete="email"
  //                   required
  //                   value={email}
  //                   onChange={(e) => setEmail(e.target.value)}
  //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  //                 />
  //               </div>
  //             </div>

  //             <div>
  //               <label
  //                 htmlFor="address"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 Address
  //               </label>

  //               <div className="mt-1">
  //                 <input
  //                   type="address"
  //                   name="address"
                
  //                   required
  //                   value={address}
  //                   onChange={(e) => setAddress(e.target.value)}
  //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  //                 />
  //               </div>
  //             </div>

  //             <div>
  //               <label
  //                 htmlFor="email"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 Zip Code
  //               </label>

  //               <div className="mt-1">
  //                 <input
  //                   type="number"
  //                   name="zipcode"
                    
  //                   required
  //                   value={zipCode}
  //                   onChange={(e) => setZipCode(e.target.value)}
  //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  //                 />
  //               </div>
  //             </div>


  //             <div>
  //               <label
  //                 htmlFor="password"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 Password
  //               </label>
  //               <div className="mt-1 relative">
  //                 <input
  //                   type={visible ? "text" : "password"}
  //                   name="password"
  //                   autoComplete="current-password"
  //                   required
  //                   value={password}
  //                   onChange={(e) => setPassword(e.target.value)}
  //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  //                 />
  //                 {visible ? (
  //                   <AiOutlineEye
  //                     className="absolute right-2 top-2 cursor-pointer"
  //                     size={25}
  //                     onClick={() => setVisible(false)}
  //                   />
  //                 ) : (
  //                   <AiOutlineEyeInvisible
  //                     className="absolute right-2 top-2 cursor-pointer"
  //                     size={25}
  //                     onClick={() => setVisible(true)}
  //                   />
  //                 )}
  //               </div>
  //             </div>


  //             <div>
  //               <label
  //                 htmlFor="avatar"
  //                 className="block text-sm font-medium text-gray-700"
  //               ></label>
  //               <div className="mt-2 flex items-center">
  //                 <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
  //                   {avatar ? (
  //                     <img
  //                       src={URL.createObjectURL(avatar)}
  //                       alt="avatar"
  //                       className="h-full w-full object-cover rounded-full"
  //                     />
  //                   ) : (
  //                     <RxAvatar className="h-8 w-8" />
  //                   )}
  //                 </span>
  //                 <label
  //                 style={{cursor:'pointer'}}
  //                   htmlFor="file-input"
  //                   className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
  //                 >
  //                   <span>Upload a file</span>
  //                   <input
                    
  //                     type="file"
  //                     name="avatar"
  //                     id="file-input"
  //                     accept=".jpg,.jpeg,.png"
  //                     onChange={handleFileInputChange}
  //                     className="sr-only"
  //                   />
  //                 </label>
  //               </div>
  //             </div>

  //             <div>
  //               <button
  //                 type="submit"
  //                 className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
  //               >
  //                Sign up
  //               </button>
  //             </div>


  //             <div className="flex justify-center">
  //               <h4> Already have an account?</h4>
  //               <Link to="/shop-login" className="text-blue-600 pl-2">
  //                 Sign In
  //               </Link>
  //             </div>


  //             <div>
  //               <p className="text-center">Or With</p>
  //               <div className="flex-row mt-3">
  //                 <button className="btn google">
  //                   <svg
  //                     xmlSpace="preserve"
  //                     style={{ enableBackground: "new 0 0 512 512" }}
  //                     viewBox="0 0 512 512"
  //                     y="0px"
  //                     x="0px"
  //                     xmlnsXlink="http://www.w3.org/1999/xlink"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     id="Layer_1"
  //                     width={20}
  //                     version="1.1"
  //                   >
  //                     <path
  //                       d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	// c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	// C103.821,274.792,107.225,292.797,113.47,309.408z"
  //                       style={{ fill: "#FBBB00" }}
  //                     />
  //                     <path
  //                       d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	// c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	// c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
  //                       style={{ fill: "#518EF8" }}
  //                     />
  //                     <path
  //                       d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	// c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	// c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
  //                       style={{ fill: "#28B446" }}
  //                     />
  //                     <path
  //                       d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	// c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	// C318.115,0,375.068,22.126,419.404,58.936z"
  //                       style={{ fill: "#F14336" }}
  //                     />
  //                   </svg>
  //                   Google
  //                 </button>
  //                 <button className="btn apple">
  //                   <svg
  //                     xmlSpace="preserve"
  //                     style={{ enableBackground: "new 0 0 22.773 22.773" }}
  //                     viewBox="0 0 22.773 22.773"
  //                     y="0px"
  //                     x="0px"
  //                     xmlnsXlink="http://www.w3.org/1999/xlink"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     id="Capa_1"
  //                     width={20}
  //                     height={20}
  //                     version="1.1"
  //                   >
  //                     {" "}
  //                     <g>
  //                       {" "}
  //                       <g>
  //                         {" "}
  //                         <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />{" "}
  //                         <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />{" "}
  //                       </g>
  //                     </g>
  //                   </svg>
  //                   Apple{" "}
  //                 </button>
  //               </div>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  <section className="min-h-screen bg-gray-50">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      className="relative block h-[100px]  lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
     
    >
      <img
      
        alt="Pattern"
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        className="absolute inset-0 h-full w-full object-cover filter brightness-50 "
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      style={{background:'url(https://www.toptal.com/designers/subtlepatterns/uploads/topography.png)'}}
    >
      <div className="max-w-xl lg:max-w-3xl">
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
          Welcome to Sellers Registration
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
        Beyond Choices, We Offer Solutions: Curating an Unrivaled Selection of Auto Spare Parts and Lubricants to Cater to Every Driver's Unique Needs
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              Shop Name
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
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <input
             type="number"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
              Address 
            </label>

            <input
                 type="address"
                    name="address"
                    autoComplete="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
              ZipCode
            </label>

            <input
                 type="zipCode"
                    name="zipCode"
                    autoComplete="zipCode"
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
              className="mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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
            <button
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to="/shop-login" className="text-gray-700 underline">Log in</Link>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
  );
};

export default ShopCreate;
