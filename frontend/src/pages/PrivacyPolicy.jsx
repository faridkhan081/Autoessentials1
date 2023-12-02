// src/components/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl font-bold mb-8 text-center text-rose-600">Auto Essentials Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Effective Date: [Dec - 2023]</h2>
          <p className="text-gray-800">
            Welcome to Auto Essentials, a pioneering force in the auto parts industry, redefining standards through quality,
            scalability, and unparalleled user support. At Auto Essentials, we seamlessly blend cutting-edge technology,
            including Convolutional Neural Network (CNN)-based tire health prediction tools, a sophisticated Natural Language
            Processing (NLP) chatbot, and intelligent lubricant recommendations. Our unwavering commitment to stringent security
            and privacy standards positions Auto Essentials as the ultimate solution for discerning car owners seeking top-tier
            products and optimal vehicle condition.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Information We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-rose-600">Personal Information</h3>
              <ul className="list-disc pl-8 text-gray-800">
                <li>Name</li>
                <li>Contact Information: Email address, phone number</li>
                <li>Address</li>
                <li>Payment Information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-rose-600">Usage Information</h3>
              <ul className="list-disc pl-8 text-gray-800">
                <li>Pages visited</li>
                <li>Products viewed</li>
                <li>Time spent on the platform</li>
                <li>Device information</li>
                <li>IP address</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2 text-rose-600">User-Generated Content</h3>
            <p className="text-gray-800">Engaging with our chatbot or providing reviews may result in the collection of content you submit.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">How We Use Your Information</h2>
          <ul className="list-disc pl-8 text-gray-800">
            <li>Order Processing: Processing and fulfilling orders efficiently</li>
            <li>Personalized Experience: Providing tailored product recommendations</li>
            <li>Platform Enhancement: Continuously improving our platform and services</li>
            <li>Communication: Keeping you informed about promotions, updates, and providing customer support</li>
            <li>Security Measures: Ensuring the utmost security of our platform and your information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Sharing Your Information</h2>
          <ul className="list-disc pl-8 text-gray-800">
            <li>Rest assured, your privacy is our priority. We do not sell or rent your personal information.</li>
            <li>Trusted Partners: Third-party vendors and service providers for order fulfillment and delivery</li>
            <li>Legal Compliance: When required by law or to protect our rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Security Measures</h2>
          <p className="text-gray-800">Auto Essentials employs robust security measures, including encryption, to safeguard your data from unauthorized access and disclosure.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Cookies and Tracking Technologies</h2>
          <p className="text-gray-800">
            We leverage cookies and similar technologies to enhance your browsing experience and gain insights into platform usage.
            You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Third-Party Links</h2>
          <p className="text-gray-800">
            Auto Essentials may include links to third-party websites. Please review their privacy policies, as we are not
            responsible for their practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Your Choices</h2>
          <ul className="list-disc pl-8 text-gray-800">
            <li>Access and Update: Access and update your personal information</li>
            <li>Opt-Out: Opt-out of marketing communications</li>
            <li>Account Deletion: Request the deletion of your account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Updates to this Privacy Policy</h2>
          <p className="text-gray-800">This privacy policy may be updated to reflect changes in our practices. Material changes will be communicated through the platform or other means.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">Contact Us</h2>
          <p className="text-gray-800">For any questions or concerns regarding our privacy practices, please reach out to us at [insert contact email].</p>
        </section>

        <div className="mt-8 text-sm text-gray-600">
          <p className="text-rose-600">Last Updated: [Dec - 23]</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
