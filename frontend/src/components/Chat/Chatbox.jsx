import React, { useState, useEffect } from 'react';
import {server} from '../../server'
const Chatbox = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = () => {
    const userMessage = userInput.trim();
    if (userMessage !== '') {
      addUserMessage(userMessage);
      respondToUser(userMessage);
      setUserInput('');
    }
  };

  const respondToUser = async (userMessage) => {
    try {
      const response = await fetch(`${server}/conversation/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });
  
      const data = await response.json();
      addBotMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const addUserMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: 'user' },
    ]);
  };

  const addBotMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: 'bot' },
    ]);
  };


  useEffect(() => {
    // Scroll to the bottom of the message container whenever messages change
    const messageContainer = document.getElementById('chatbox');
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`fixed w-[300px] 800px:w-[400px] bottom-20 right-5 mb-4 mr-4 ${isOpen ? '' : 'hidden'} `}>
      <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
        <div className="p-4 border-b bg-rose-500 text-white rounded-t-lg flex justify-between items-center">
          <p className="text-lg font-semibold">AutoEssentials</p>
          <button
            id="close-chat"
            className="text-black hover:text-red-800 focus:outline-none focus:text-red-600"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div id="chatbox" className="p-4 h-80 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.type === 'user' ? 'text-right' : 'text-left'
              }`}
            >
         
              <p
                className={`${
                  msg.type === 'user'
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                } rounded-lg py-2 px-4 inline-block`}
              >
                 {msg.text}
              </p>
            </div>
          ))}
        </div>
        <div className="p-4 border-t flex">
          <input
            id="user-input"
            type="text"
            placeholder="Type a message"
            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-0"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            id="send-button"
            className="bg-rose-500 text-white px-4 py-2 rounded-r-md hover:bg-rose-600 transition duration-300"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
