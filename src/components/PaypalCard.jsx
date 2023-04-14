import React from 'react';
import { Paypal } from '../assets';
import GradiantBtn from './GradiantBtn';

const PaypalCard = () => {
  return (
    <section className='PaypalCard p-5'>
      <div className='flex font-poppins'>
        <img className=' mr-[10px]' src={Paypal} alt={Paypal} />
        <div className='flex-col'>
          <p className='font-semibold text-2xl '>Paypal </p>
          <p className='text-xs text-dimWhite '>Checkout  </p>
        </div>
      </div>
      <div className='mt-6 '>
        <p className='leading-[130%] text-[12px] font-light text-dimWhite'>Total</p>
        <p className='not-italic font-medium text-base leading-[130%] tracking-[0.01em] text-white'>$210</p>
      </div>
      <div>
        <button className='rounded-[10px] bg-blue-gradient p-[2px]'>
          <div className=''>
            <p className=' text-text-gradient '>Change</p>
          </div>
        </button>
    


      </div>

    </section>
  );
};

export default PaypalCard;