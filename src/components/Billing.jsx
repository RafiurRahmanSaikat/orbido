import { apple, Dribble, Netflix, google, Red, Cash, Green } from "../assets";
import PaypalCard from "./PaypalCard";
import TransactionCard from "./TransactionCard";
const Billing = () => (
  <section id="product" className='flex justify-around h-[436.56px]   md:flex-row flex-col-reverse  sm:py-16 py-6'>
    <div className="CardShape  p-[25px] w-[346.45px]">
      <p className=" font-poppins text-[22px] ">
        Last Transaction
      </p>
    <PaypalCard />
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



    <div className='flex justify-center items-start flex-col'>
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
