import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import naruto from '../assets/naruto.png'
import naruto2 from '../assets/naruto2.png'
import gm from '../assets/gm.jpg'
import gn from '../assets/gn.jpg'
const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div> */}

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {/* {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)} */}
    </div>
    <div className="flex flex-col gap-8 mb-8 md:flex-row">
<img src={gm} className="rounded-lg md:w-[30vw]" alt="" />
<img src={gn} className="rounded-lg md:w-[30vw]" alt="" />
    </div>
    <div className="flex flex-col gap-8 md:flex-row">
<img src={naruto} className="rounded-lg md:w-[30vw]" alt="" />
<img src={naruto2} className="rounded-lg md:w-[30vw]" alt="" />
    </div>
  </section>
);

export default Testimonials;
