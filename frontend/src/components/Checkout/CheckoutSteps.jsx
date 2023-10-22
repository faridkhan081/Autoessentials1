import React from 'react'
import styles from '../../styles/styles'
import { CheckSquare, CreditCard, Truck } from 'lucide-react';

const CheckoutSteps = ({active}) => {
    console.log(active);
  return (
    <div className='800px:w-[75%] w-full flex 800px:justify-start 800px:ml-[235px] justify-center'>
        <div className="w-[90%] 800px:w-[50%] flex items-center flex-wrap">
               <div className={`${styles.noramlFlex}`}>
                <div className={`${styles.cart_button} bg-black`}>
                
                       <span className={`${styles.cart_button_text} w-[100px] flex items-center justify-center gap-2`}><Truck/> Shipping</span>
                </div>
                <div className={`${
                    active > 1 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-black"
                    : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
                }`} />
               </div>

               <div className={`${styles.noramlFlex}`}>
                <div className={`${active > 1 ? `${styles.cart_button} bg-black` : `${styles.cart_button} !bg-[#867d7d14]`}`}>
                    <span className={`${active > 1 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#f63b60]`} w-[100px] flex items-center justify-center gap-2`}>
                        <CreditCard/> Payment
                    </span>
                </div>
               </div>

               <div className={`${styles.noramlFlex}`}>
               <div className={`${
                    active > 3 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
                    : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
                }`} />
                <div className={`${active > 2 ? `${styles.cart_button} bg-black` : `${styles.cart_button} !bg-[#867d7d14]`}`}>
                    <span className={`${active > 2 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#f63b60]`}  w-[100px] flex items-center justify-center gap-2`}>
                        <CheckSquare/> Success
                    </span>
                </div>
               </div>
        </div>
    </div>
  )
}

export default CheckoutSteps