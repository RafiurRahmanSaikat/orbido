import React from 'react';

const TransactionCard = ({ img,style, label, dueDate, icon, amount  }) => {
  return (
    <section className="mt-[23px]">
      <div className="flex" >
        <div className="flex font-poppins justify-around">
          <img className={`w-[41.37px] h-[38.46px] ${style} rounded-full mr-3`} src={img} alt={img} />
          <div className="flex-col justify-start">
            <p className="h-[21.15px] w-[103.42px]  text-White">{label} </p>
            <p className="text-dimWhite" >{dueDate}</p>
          </div>
        </div>
        <div className="flex items-center ml-[60px]">
          <img className="w-[15.51px] h-[13.46px] rounded-[2px] mr-1" src={icon} alt={icon} />
          <p>{amount}</p>
        </div>
      </div>
    </section>
  );
};

export default TransactionCard;