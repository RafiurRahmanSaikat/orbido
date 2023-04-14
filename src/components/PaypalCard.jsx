import { React, useState } from 'react';
import { Ok, Paypal } from '../assets';
const PaypalCard = () => {
  const [PaymenyStatus, setStatus] = useState(false)
  return (
    <section className='p-5 PaypalCard'>
      <div className='flex font-poppins'>
        <img className=' mr-[10px]' src={Paypal} alt={Paypal} />
        <div className='flex-col'>
          <p className='text-2xl font-semibold '>Paypal </p>
          <p className='text-xs text-dimWhite '>Checkout  </p>
        </div>
      </div>

      <div className='flex justify-between mt-6 '>
        <div>
          <p className='leading-[130%] text-[12px] font-light text-dimWhite'>Total</p>
          <p className='not-italic font-medium text-base leading-[130%] tracking-[0.01em] text-white'>$210</p>
        </div>
        <button className='rounded-[10px] text-gradient  border-2 p-1'>
          <p className='text-gradient '>Change</p>
        </button>
      </div>
      <button onClick={() => setStatus(!PaymenyStatus)} className='mt-[26px] font-poppins font-medium text-[12px] text-primary bg-blue-gradient rounded-[10px] outline-none h-[33px] w-full  '>
        Make Payment
      </button>

      {PaymenyStatus &&
        <div className='relative font-poppins text-primary flex justify-between items-center p-5 bg-white w-[22vw] h-[54px] rounded-[10px] top-44'>
          <img src={Ok} alt={Ok} />
          <p className='m-4'>Great! Your Payment is succesfully.</p>
        </div>
      }




    </section>
  );
};

export default PaypalCard;