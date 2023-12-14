import { Facebook, Instagram, Twitter } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Head = () => {

  useEffect(()=>{

  },[])
  return (
    <div className="bg-gray-800 text-white p-4 overflow-hidden">
      <marquee behavior="scroll" direction="left" scrollamount="8" className="text-[13px]">
        {[...Array(1)].map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="font-bold !no-underline">1. </span>

            <p className=" mb-0 ">
              <a href="mailto:autoessentials01@gmail.com">Customer Support (MON-SUN: 10 AM TO 1 AM)</a>
            </p>
            
            <span className="font-bold !no-underline">2. </span>
            <p className=" mb-0 ">Orders worth Rs 20,000/- or more will be paid online in Advance</p>
            <span className="font-bold !no-underline">3. </span>
            <p className=" mb-0  mr-2">Follow us on social media for more informations</p>
            <div className='flex flex-row gap-5 '>
              <Link to=""><Instagram size={18}/></Link>
              <Link to=""><Facebook size={18}/></Link>
              <Link to=""><Twitter size={18}/></Link>
              

            </div>
          </div>
        ))}
      </marquee>
    </div>
  );
};

export default Head;
