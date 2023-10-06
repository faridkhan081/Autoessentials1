import React, { useState } from "react";
import styles from "../../styles/styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";

import { toast } from "react-toastify";
import { RxAvatar } from "react-icons/rx";
import "../Shop/Layout/Shop.css";

const ShopCreate = () => {
  const [loading, setLoading] = useState(false);

  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState();
  const [avatar, setAvatar] = useState();
  const [email, setEmail] = useState("");
  const [description,setDescription] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);
    newForm.append("zipCode", zipCode);
    newForm.append("address", address);
    newForm.append("phoneNumber", phoneNumber);
    newForm.append("description", description);

    axios
      .post(`${server}/shop/create-shop`, newForm, config)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar();
        setZipCode("");
        setPhoneNumber();
        setAddress("");
        setAddress("");
        setDescription("");

        if (res.data.success === true) {
          navigate("/shop-login");

          // please navigate to shop login page
        }

        console.log(res);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  //  style={{background:'url(https://www.toptal.com/designers/subtlepatterns/uploads/topography.png)'}}

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-[100px]  lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            className="absolute inset-0 h-full w-full object-cover filter brightness-50 "
          />
        </aside>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          style={{
            background:
              "url(https://www.toptal.com/designers/subtlepatterns/uploads/topography.png)",
          }}
        >
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-rose-600" href="/">
              <span className="sr-only">Home</span>
              <Link to="/" className="text-rose-500 hover:text-rose-600 ">
                <BsFillArrowLeftSquareFill size={30} />
              </Link>
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Sellers Registration
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Beyond Choices, We Offer Solutions: Curating an Unrivaled
              Selection of Auto Spare Parts and Lubricants to Cater to Every
              Driver's Unique Needs
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
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
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="Address"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Describe Your Bussiness
                </label>

                <textarea
                
                  type="text"
                  name="description"
                  autoComplete="description"

                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 w-full h-[100px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>



              <div className="col-span-6 lg:mt-[30px] sm:col-span-3">
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
                      style={{ cursor: "pointer" }}
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

     

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                {loading ? (
                  <button
                    style={{ width: "142px" }}
                    className="inline-block shrink-0 rounded-md border border-rose-600 bg-tansparent px-12 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring active:text-rose-500"
                  >
                    <div className="lds-hourglass" />
                  </button>
                ) : (
                  <button
                    style={{ width: "142px" }}
                    className="inline-block shrink-0 rounded-md border border-rose-600 bg-rose-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"
                  >
                    Register
                  </button>
                )}

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/shop-login" className="text-gray-700 underline">
                    Log in
                  </Link>
                  .
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
