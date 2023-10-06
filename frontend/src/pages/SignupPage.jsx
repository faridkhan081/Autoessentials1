import React, { useEffect } from "react";
import Signup from "../components/Signup/Signup.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
const SignupPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, []);
  return (
    <Layout title={"User - Sign-up"}>
      <Signup />
    </Layout>
  );
};

export default SignupPage;
