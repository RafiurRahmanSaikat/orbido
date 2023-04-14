import { features } from "../data";
import Button from "./Button";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-row p-6 rounded-[20px]   mb-6 feature-card" >
    <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain " />
    </div>
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="Features" className='flex flex-col mt-20 md:flex-row px-28 '>

    <div className="flex flex-col items-start justify-center flex-1 " >
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        You do the business, <br className="hidden sm:block" /> we’ll handle
        the money.
      </h2>
      <p className='paragraph max-w-[470px] mt-5'>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button />
    </div>

    <div className='relative flex-col items-center justify-center flex-1 mt-10 ml-0 md:ml-10 md:mt-0'>
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Business;
