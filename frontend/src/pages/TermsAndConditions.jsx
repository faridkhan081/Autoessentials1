// src/components/TermsAndConditions.js
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl font-bold mb-8 text-center text-rose-600">Auto Essentials Terms and Conditions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">1. Acceptance of Terms</h2>
          <p className="text-gray-800">
            By accessing or using Auto Essentials, you agree to these Terms and Conditions. If you do not agree with any
            part of these terms, you may not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">2. Description of Services</h2>
          <p className="text-gray-800">
            Auto Essentials provides a multi-vendor e-commerce platform with a focus on quality auto parts. Our platform
            integrates innovative Convolutional Neural Network (CNN)-based tools for tire health prediction, a natural
            language processing (NLP) chatbot, and lubricant recommendations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">3. User Account and Security</h2>
          <p className="text-gray-800">
            To access certain features of Auto Essentials, you may be required to create an account. You are responsible
            for maintaining the confidentiality of your account information and are fully responsible for all activities
            that occur under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">4. Privacy and Security</h2>
          <p className="text-gray-800">
            Auto Essentials is committed to strict security and privacy standards. We use advanced encryption methods to
            protect your personal information. Please review our Privacy Policy to understand how we collect, use, and
            protect your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">5. Use of Innovative Tools</h2>
          <p className="text-gray-800">
            The Convolutional Neural Network (CNN)-based tools for tire health prediction and the natural language
            processing (NLP) chatbot are provided for informational purposes only. Auto Essentials does not guarantee the
            accuracy of predictions or recommendations and shall not be held liable for any decisions made based on such
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">6. Product Information</h2>
          <p className="text-gray-800">
            While we strive to provide accurate product information, Auto Essentials does not warrant the accuracy,
            completeness, or reliability of any product information on the platform. It is the responsibility of vendors
            to provide accurate and up-to-date information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">7. Ordering and Payment</h2>
          <p className="text-gray-800">
            When you place an order on Auto Essentials, you agree to provide accurate and complete information. Payments
            are processed through secure channels, and all transactions are subject to our Payment Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">8. Intellectual Property</h2>
          <p className="text-gray-800">
            The content on Auto Essentials, including text, graphics, logos, and images, is the intellectual property of
            Auto Essentials or its vendors. You may not use, reproduce, or distribute the content without express written
            permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">9. Termination of Services</h2>
          <p className="text-gray-800">
            Auto Essentials reserves the right to terminate or suspend your account and access to the platform at its sole
            discretion, without notice, for any reason, including a breach of these Terms and Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">10. Changes to Terms</h2>
          <p className="text-gray-800">
            Auto Essentials reserves the right to modify or replace these Terms and Conditions at any time. It is your
            responsibility to check for updates periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">11. Contact Information</h2>
          <p className="text-gray-800">
            For any questions or concerns regarding these Terms and Conditions, please contact us at{' '}
            <a href="mailto:contact@autoessentials.com" className="text-rose-600">contact@autoessentials.com</a>.
          </p>
        </section>

        <div className="mt-8 text-sm text-gray-600">
          <p className="text-rose-600">Last Updated: [Dec-23]</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
