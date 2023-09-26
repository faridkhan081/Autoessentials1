import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import styles from '../../styles/styles'
import { X } from 'lucide-react';

import { BsCartPlus } from 'react-icons/bs';
import { Heart } from 'lucide-react';

function Wishlist({setOpenWishlist}) {
    const cartData =[
      
        {
            name:'SKP® - Timing Set with all essential parts',
            description: 'test',
            price: 700,
        },
        {
            name:'SKP® - Timing Set with all essential parts',
            description: 'test',
            price: 800,
        },
        {
            name:'SKP® - Timing Set with all essential parts',
            description: 'test',
            price: 800,
        },
    ]
  return (
    <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
    <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
    <div>
        <div className="flex w-full justify-between pt-5 pr-5">
        <h1 className='font-[500] ml-4 text-[24px]'>Wishlist</h1>
            <RxCross1
                size={25}
                className='cursor-pointer'
                onClick={()=>setOpenWishlist(false)}
            />
        
        </div>
       
        {/* items length */}
        <div className={`${styles.noramlFlex} p-4`}>
            <Heart
                fill='red'
                    color='red'
                /> 
            <h5 className='pl-2 text-[20px] font-[500]'>
                3 items
            </h5>
        </div>

      
        {/* carts single items */}
        <br />
        <div className="w-full border-t">
            {
               cartData && cartData.map((i,index)=>{
                    return (
                        <CartSingle key={index} data={i} />
                    )
                })
            }
        </div>
        </div>
      
    </div>

    </div>
  )
}


const CartSingle = ({data,key}) =>{
    const [value,setValue] = useState(1);
    const totalPrice = data.price * value;

    return(
        <>
           <div className="border-b p-4">
            <div className="w-full flex items-center">
            <X size={50} className='cursor-pointer'/>
            <img
          src='https://ic.carid.com/icons/replacement-timing-gears-chains-and-covers_ic_5.jpg'
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
      <div className="pl-[5px]">
          <h1>{data.name}</h1>
         
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <div>
            <BsCartPlus size={20} className='cursor-pointer' title='Add to cart'/>
        </div>
     
            </div>
           </div> 
        </>
    )
}
export default Wishlist