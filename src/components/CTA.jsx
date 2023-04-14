
import Button from "./Button";

const CTA = () => (
  <section className='flexCenter my-[5vh] w-[80vw] mx-auto  sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow'>
   
    <div className="flex flex-col flex-1">
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Let’s try our service now!</h2>
      <p className='paragraph max-w-[470px] mt-5'>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className='mt-10 ml-0 flexCenter sm:ml-10 sm:mt-0'>
      <Button />
    </div>
  </section>
);

export default CTA;
