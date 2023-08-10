import React from 'react';
import { backend_url } from "../../server";
import { useSelector } from 'react-redux';
import { AiOutlineCamera } from 'react-icons/ai';

function ProfileContent({active, setActive}) {
    const {user} = useSelector((state) => state.user)
  return (
    <div className='w-full'>
        {/* profile page */}
        {
            active === 1 && (
                <div className='flex justify-center w-full'>
                    <div className="relative">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                      alt="userAvatar"
                    />
                    <div className='w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]'>
                        <AiOutlineCamera size={20} />
                    </div>
                    </div>
                    <br />
                    <br />
                </div>
            )
        }
    </div>
  )
}

export default ProfileContent