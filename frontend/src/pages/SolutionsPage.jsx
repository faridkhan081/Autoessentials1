import { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import axios from "axios";
import "../App.css";
import Layout from "../components/Layout/Layout";
import HeadBanner from "../components/Banner/HeadBanner";
import product from "../Assets/images/tire.jpg";

const SolutionsPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <Layout title={"Tools"}>
      <Header activeHeading={6} />
      <HeadBanner
        title="Inspect Your Tire"
        list="tools"
        imageUrl={product}
      />
      <Solution />
      <Footer />
    </Layout>
  );
};

const Solution = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    setIsLoading(true);
    if (!file) {
      alert("Please select an image file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("https://classify.roboflow.com/kcdddd/2", formData, {
        params: {
          api_key: "9RnHWRP4Gl6IEZPn7Pbr",
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setResponse(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    if (response) {
      // Create an object URL for the image file
      const imageBlob = new Blob([file], { type: "image/*" });
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);
    }
  }, [response, file]);

  return (
    <div className={`${styles.section} my-8 `}>
      <h1 className="font-medium text-[30px] text-[#231e1e]">
        Tire Inspection Tool
      </h1>

      <div className="flex items-center justify-center w-full mt-[30px]">
        <div className="flex items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg ">
          <input
            accept="image/"
            id="dropzone-file"
            type="file"
            onChange={handleFileChange}
          />
          <button onClick={handleUpload} class="btnsol">
            Inspect
          </button>
        
        </div>
      </div>
      <div className="flex mt-[50px] gap-3">
        <h1 className="font-medium text-[24px] text-[#231e1e]">Result: </h1>
      </div>

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
              <g>
                <path
                  id="tire"
                  d="M127.267,0C57.092,0,0,57.091,0,127.266s57.092,127.266,127.267,127.266c70.174,0,127.266-57.091,127.266-127.266
				S197.44,0,127.267,0z M127.267,217.656c-49.922,0-90.391-40.468-90.391-90.39s40.469-90.39,90.391-90.39
				c49.92,0,90.39,40.468,90.39,90.39S177.186,217.656,127.267,217.656z"
                />
                <path
                  id="rim"
                  d="M127.267,48.578c-43.39,0-78.689,35.299-78.689,78.688c0,43.389,35.3,78.688,78.689,78.688
				c43.389,0,78.688-35.299,78.688-78.688C205.955,83.877,170.655,48.578,127.267,48.578z M195.878,122.249h-38.18
				c-0.78-4.825-2.686-9.275-5.435-13.079l26.954-26.954C188.679,93.112,194.771,106.996,195.878,122.249z M132.204,58.648
				c15.244,1.087,29.123,7.156,40.025,16.591l-26.948,26.949c-3.804-2.748-8.253-4.653-13.077-5.433V58.648z M122.329,58.648v38.106
				c-4.824,0.78-9.274,2.685-13.078,5.434L82.302,75.24C93.204,65.805,107.085,59.735,122.329,58.648z M75.313,82.217l26.955,26.954
				c-2.749,3.803-4.654,8.253-5.434,13.077h-38.18C59.761,106.996,65.853,93.113,75.313,82.217z M58.643,132.123h38.192
				c0.779,4.824,2.685,9.274,5.434,13.078l-27.029,27.029C65.788,161.308,59.714,147.398,58.643,132.123z M122.329,195.884
				c-15.285-1.09-29.197-7.188-40.113-16.666l27.035-27.035c3.804,2.749,8.254,4.654,13.078,5.434V195.884z M122.329,147.459v0.072
				c-2.131-0.518-4.131-1.36-5.953-2.474l0.047-0.047c-2.85-1.738-5.244-4.132-6.982-6.983l-0.046,0.046
				c-1.114-1.822-1.956-3.821-2.474-5.952h0.071c-0.385-1.585-0.611-3.233-0.611-4.937c0-1.704,0.227-3.352,0.611-4.937h-0.071
				c0.518-2.13,1.359-4.129,2.474-5.951l0.046,0.046c1.738-2.85,4.133-5.245,6.982-6.982l-0.047-0.047
				c1.822-1.114,3.822-1.957,5.953-2.474v0.072c1.586-0.385,3.233-0.612,4.938-0.612s3.352,0.227,4.938,0.612v-0.072
				c2.131,0.518,4.13,1.359,5.951,2.473l-0.047,0.047c2.851,1.737,5.245,4.132,6.983,6.982l0.046-0.046
				c1.115,1.822,1.957,3.822,2.475,5.953h-0.071c0.385,1.585,0.611,3.233,0.611,4.937c0,1.704-0.227,3.352-0.611,4.937h0.071
				c-0.518,2.131-1.359,4.131-2.475,5.953l-0.046-0.046c-1.738,2.85-4.133,5.244-6.983,6.982l0.047,0.046
				c-1.821,1.114-3.82,1.956-5.951,2.474v-0.072c-1.586,0.385-3.233,0.612-4.938,0.612S123.915,147.845,122.329,147.459z
				M132.204,195.884v-38.267c4.824-0.78,9.273-2.685,13.077-5.433l27.034,27.034C161.4,188.696,147.488,194.794,132.204,195.884z
				M179.292,172.23l-27.028-27.028c2.749-3.804,4.654-8.254,5.435-13.079h38.191C194.818,147.398,188.745,161.308,179.292,172.23z"
                />
              </g>
            </svg>
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          {response && (
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                {imageUrl && (
                  <div className="image-container">
                    <img
                      src={imageUrl}
                      alt="Uploaded"
                      className="uploaded-image h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  <ul>
                    {response.predicted_classes.map((predictedClass, index) => (
                      <li key={index}>
                        It is a {predictedClass == 1 ? "Defective" : "Normal"}{" "}
                        Tire
                      </li>
                    ))}
                  </ul>
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  <ul>
                    {Object.keys(response.predictions).map(
                      (prediction, index) => (
                        <li key={index}>
                          <strong>{prediction}:</strong> Confidence:{" "}
                          {response.predictions[prediction].confidence}
                        </li>
                      )
                    )}
                  </ul>
                </p>
              </div>
              <div className="p-6 pt-0">
                <p>
                  <strong>Response Time:</strong> {response.time} seconds
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SolutionsPage;
