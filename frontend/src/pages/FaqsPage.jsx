import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import Layout from "../components/Layout/Layout";
import HeadBanner from "../components/Banner/HeadBanner";
import product from '../Assets/images/question.jpeg'

const FaqsPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <Layout title={"FAQ'S"}>
      <Header activeHeading={5} />
      <HeadBanner title="Frequently Ask Questions" list='Faqs' imageUrl={product}/>

      <Faq />
      <Footer />
    </Layout>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8 `}>
     
      <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">Discover a World of Auto Excellence: Your Questions Answered for a Smoother Ride.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">What makes Auto Essentials different from other auto parts platforms?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Auto Essentials stands out by integrating cutting-edge technologies such as Convolutional Neural Network (CNN)-based tools for tire health prediction, a natural language processing (NLP) chatbot, and personalized lubricant recommendations. Our focus on quality, scalability, and user support sets new industry standards, offering car owners a unique and advanced shopping experience</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">How does the CNN-based tire health prediction tool work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Our Convolutional Neural Network (CNN) analyzes tire images to assess their health. By leveraging advanced image recognition, the tool can identify issues such as tread wear, damage, or other factors affecting tire performance. This proactive approach helps car owners address potential problems before they become major concerns. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">What role does the NLP chatbot play in the Auto Essentials platform?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The natural language processing (NLP) chatbot enhances user interaction and support. It understands and responds to users' inquiries in a conversational manner, providing real-time assistance with product information, order tracking, and general queries. The chatbot ensures a seamless and user-friendly experience for our customers.</p>
			</details>
      <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">How does Auto Essentials prioritize security and privacy?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Security and privacy are paramount at Auto Essentials. We implement strict standards and protocols to safeguard user data, transactions, and personal information. Our platform utilizes encryption, secure payment gateways, and follows industry best practices to ensure a secure and trustworthy environment for our users.</p>
			</details>
      <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri"> Can I trust the quality of products on Auto Essentials?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> Absolutely. Quality is a core focus at Auto Essentials. We partner with reputable vendors and conduct thorough quality assessments to ensure that the products available on our platform meet high standards. Our commitment to quality is reflected in the satisfaction of our customers.</p>
			</details>
      <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">How does Auto Essentials support scalability for a growing user base?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Auto Essentials is designed with scalability in mind. Our infrastructure is built to handle increased demand, ensuring a smooth and responsive experience for users as our platform grows. We continuously invest in technology and resources to adapt to the evolving needs of our expanding user base</p>
			</details>
		</div>
	</div>
</section>
    </div>
  );
};


// const Faq = () => {
//     const [open, setOpen] = useState(false);
//     const [open2, setOpen2] = useState(false);
//     const [open3, setOpen3] = useState(false);
//     const [open4, setOpen4] = useState(false);
//     const [open5, setOpen5] = useState(false);

//     return (
//         <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
//             <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>

//             <div className=" lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ">
//                 <div className=" flex justify-between md:flex-row flex-col ">
//                     <div className=" md:mb-0 mb-8 md:text-left text-center">
//                         <h2 className=" font-medium text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Questions</h2>
//                         <p className=" font-normal text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">If you don’t find your answer, Please contact us or Leave a Message, we’ll be more than happy to assist you.</p>
//                     </div>

//                     <div className=" flex justify-center items-center">
//                         <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
//                             <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
//                             <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="lg:w-8/12 w-full mx-auto">
//                 {/* <!-- Question 1 --> */}
//                 <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

//                 <div className="w-full md:px-6  ">
//                     <div id="mainHeading" className="flex justify-between items-center w-full">
//                         <div className=" ">
//                             <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
//                                 {" "}
//                                 <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?
//                             </p>
//                         </div>
//                         <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen(!open)}>
//                             <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div id="menu" className={"mt-6 w-full " + (open ? "block" : "hidden")}>
//                         <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
//                     </div>
//                 </div>

//                 {/* <!-- Question 2 --> */}

//                 <hr className=" w-full lg:mt-10 my-8" />

//                 <div className="w-full md:px-6 ">
//                     <div id="mainHeading" className="flex justify-between items-center w-full">
//                         <div className="">
//                             <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
//                                 {" "}
//                                 <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q2.</span> How can i find the prices or get other information about chanel products?
//                             </p>
//                         </div>
//                         <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen2(!open2)}>
//                             <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div id="menu" className={"mt-6 w-full " + (open2 ? "block" : "hidden")}>
//                         <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
//                     </div>
//                 </div>

//                 {/* <!-- Question 3 --> */}

//                 <hr className=" w-full lg:mt-10 my-8" />

//                 <div className="w-full md:px-6 ">
//                     <div id="mainHeading" className="flex justify-between items-center w-full">
//                         <div className="">
//                             <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
//                                 {" "}
//                                 <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q3.</span>
//                                 How many collections come out every year?
//                             </p>
//                         </div>
//                         <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen3(!open3)}>
//                             <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div id="menu" className={"mt-6 w-full " + (open3 ? "block" : "hidden")}>
//                         <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
//                     </div>
//                 </div>

//                 {/* <!-- Question 4 --> */}

//                 <hr className=" w-full lg:mt-10 my-8" />

//                 <div className="w-full md:px-6  ">
//                     <div id="mainHeading" className="flex justify-between items-center w-full">
//                         <div className="">
//                             <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
//                                 {" "}
//                                 <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q4.</span>
//                                 Are all of the fashion collections features on the website?
//                             </p>
//                         </div>
//                         <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen4(!open4)}>
//                             <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div id="menu" className={"mt-6 w-full " + (open4 ? "block" : "hidden")}>
//                         <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
//                     </div>
//                 </div>

//                 {/* <!-- Question 5 --> */}

//                 <hr className=" w-full lg:mt-10 my-8" />

//                 <div className="w-full md:px-6 ">
//                     <div id="mainHeading" className="flex justify-between items-center w-full">
//                         <div className="">
//                             <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
//                                 {" "}
//                                 <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q5.</span>
//                                 Where do i find products that i have seen in magazines or Social Media?
//                             </p>
//                         </div>
//                         <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen5(!open5)}>
//                             <svg className={"transform " + (open5 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div id="menu" className={"mt-6 w-full " + (open5 ? "block" : "hidden")}>
//                         <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
//                     </div>
//                 </div>

//                 <hr className=" w-full lg:mt-10 my-8" />
//             </div>
//         </div>
//     );
// };




export default FaqsPage;