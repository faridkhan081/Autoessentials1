import { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import axios from "axios";
import "../App.css";
import Layout from "../components/Layout/Layout";
import HeadBanner from "../components/Banner/HeadBanner";
import product from "../Assets/images/tire2.jpeg";
import RecommendedProduct from "./../components/Products/RecommendedProduct.jsx";
import { server } from "../server.js";

const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title={"Tools"}>
      <Header activeHeading={6} />
      <HeadBanner title="Inspect Your Tire" list="tools" imageUrl={product} />
      <Solution />
      <Footer />
    </Layout>
  );
};

const Solution = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [imageData, setImageData] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageUpload = (event) => {
    const image = event.target.files[0];


    const reader = new FileReader();

    reader.onload = () => {
      setImageData(reader.result);
    };

    reader.readAsDataURL(image);
  };

  const handlePredict = async () => {
    if (!imageData) {
      alert("Please upload an image before inspecting.");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await axios.post(`${server}/product/predict`, {
        imageData,
      });
  
      const prediction = response.data.prediction[0][0];
      console.log(response);
      setPrediction(prediction);
    } catch (error) {
      // Handle the error, you may want to show an error message to the user.
      console.error("Error predicting tire:", error);
    } finally {
      setIsLoading(false); 
    }
  };
  return (
    <div className={`my-8`}>
      <div className={``}>
        <div className="gbtn !w-[240px] ml-5 flex items-center justify-center">
          <h1>Tire Inspection Tool</h1>
        </div>

        <div className="flex justify-center mt-[50px] flex-col items-center">
          <div>
            <form className="form">
              <span className="form-title">Upload your file</span>
              <p className="form-paragraph">File should be an image</p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title ">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*"
                  name="files"
                  required
                  id="file-input"
                  onChange={handleImageUpload}
                />
              </label>
            </form>
          </div>
          <div>
            <button
              onClick={handlePredict}
              className="mt-5 cursor-pointer  bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#000,-0.5rem_-0.5rem_#E11D48] transition"
            >
              Inspect
            </button>
          </div>
        </div>

        <div className="flex mt-[50px] gap-3 mb-[50px]">
          <div className="gbtn ml-5 flex items-center justify-center">
            {" "}
            <h1 className="">Result</h1>
          </div>
        </div>

        {imageData && (
          <div className="flex justify-center p-5"  >
          <div className="">
            <img
            className="!rounded"
              src={imageData}
              alt="Uploaded Tire"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
            </div>
          </div>
        )}


        {prediction !== null && (
          <>
          {isLoading ? (
  <>
    <div className="loader">
      <svg
        className="wheel"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 254.532 254.532"
        xmlSpace="preserve"
      >
    
      </svg>
    </div>
  </>
) : (
  <div className="flex justify-center mt-5 text-center">
    {prediction === 0 ? (
      <p className="gbtn !w-[300px] flex items-center justify-center !text-white !bg-red-600">it is a Bad tyre and needs replacement</p>
    ) : (
      <p className="gbtn !w-[300px] flex items-center justify-center !text-white !bg-green-700">It is a normal tyre and there is no need of replacement</p>
    )}
  </div>
)}
          </>
        )}
    
      </div>

      {prediction === 0 && (
        <>
          <RecommendedProduct />
        </>
      )}
    </div>
  );
};

export default SolutionsPage;



