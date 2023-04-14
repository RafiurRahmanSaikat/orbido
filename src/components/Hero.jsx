import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className='flex-1 md:flex-row flex-col sm:py-16 py-6'>
      <h1 className='heroText mx-auto'>
        make your dream website
        Stand out in a crowd
      </h1>
     
        {/* gradient start */}

        {/* <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>

          <div className="testing right-20 bottom-20 top-20" />
          <div className="absolute z-[0] p-20 w-[50%] h-[35%] top-20 pink__gradient" />

          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div> */}

          {/* gradient end */}
      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
