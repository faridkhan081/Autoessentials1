import React, { useState } from 'react';
import { backend_url } from "../../server";
import { useSelector } from 'react-redux';
import { AiOutlineCamera } from 'react-icons/ai';
import styles from '../../styles/styles';

function ProfileContent({active, setActive}) {
    const {user} = useSelector((state) => state.user)
    const [name,setName] = useState(user && user.name);
    const [email,setEmail] = useState(user && user.email);
    const [phoneNumber,setPhoneNumber] = useState();
    const [zipCode,setZipCode] = useState();
  return (
    <div className='w-full'>
        {/* profile page */}
        {
            active === 1 && (
              <>
                <div className='flex justify-center w-full'>
                    <div className="relative">
                    <img
                      src={`${backend_url}${user?.avatar}`}
                      className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                      alt="userAvatar"
                    />
                    <div className='w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]'>
                        <AiOutlineCamera size={20} />
                    </div>
                    </div>
                   
                   
                </div>
                <br />
                    <br />
                <div className="w-full px-5">
                      <form>
                      <div className="w-full flex pb-3">
                        <div className='w-[50%]'>
                          <label className='block pb-2'>
                            Full Name
                          </label>
                          <input type="text" className={`${styles.input} !w-[95%]`} 
                            required
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                          />
                        </div>

                        <div className='w-[50%]'>
                          <label className='block pb-2'>
                            Email Address
                          </label>
                          <input type="email" className={`${styles.input} !w-[95%]`} 
                            required
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                          />
                        </div>


                      </div>

                      <div className="w-full flex pb-3">
                        <div className='w-[50%]'>
                          <label className='block pb-2'>
                            Phone Number
                          </label>
                          <input type="number" className={`${styles.input} !w-[95%]`} 
                            required
                            value={phoneNumber}
                            onChange={(e)=> setPhoneNumber(e.target.value)}
                          />
                        </div>

                        <div className='w-[50%]'>
                          <label className='block pb-2'>
                            Zip Code
                          </label>
                          <input type="number" className={`${styles.input} !w-[95%]`} 
                            required
                            value={zipCode}
                            onChange={(e)=> setZipCode(e.target.value)}
                          />
                        </div>


                      </div>
                      </form>
                    </div>
            </>
            )
        }
    </div>
  )
}

export default ProfileContent