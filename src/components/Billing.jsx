import { apple, Dribble, Netflix, google, Red, Cash, Green } from "../assets";
import PaypalCard from "./PaypalCard";
import TransactionCard from "./TransactionCard";
const Billing = () => (
  <section id="Solution" className='flex-row items-center justify-around py-6 md:flex'>

    <div className="CardShape mt-20 mx-auto p-[25px] w-[346.45px]">
      <PaypalCard />
     
      <p className=" font-poppins text-[22px] ">
        Last Transaction
      </p>
      <TransactionCard
        img={Dribble}
        label={"Dribbble Pro"}
        dueDate={'15 Days ago'}
        icon={Red}
        amount={"-$250,93"}
      />
      <TransactionCard
        img={Netflix}
        style={"bg-White"}
        label={"Netflix"}
        dueDate={'4 Days ago'}
        icon={Red}
        amount={"-$250,93"}
      />
      <TransactionCard
        img={Cash}
        label={"Manulife"}
        dueDate={'4 Days ago'}
        icon={Green}
        amount={"-$250,93"}
      />

    </div>



    <div className='m-[10%] flex items-center flex-col md:items-start justify-center '>
      <h2 className='font-poppins  font-semibold xs:text-[48px] text-[40px] text-center text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
        Easily control your <br className="hidden sm:block" /> billing &
        invoicing
      </h2>
      <p className='paragraph max-w-[470px] mt-5'>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
