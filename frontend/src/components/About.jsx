import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-orange-300 p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            peed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] w-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Us</p>
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]"
      >
        Auto Avenue is your one-stop-shop for buying or selling new and used
        cars. With over 10 years of experience in the automotive industry, we
        are experts at helping customers find the perfect vehicle for their
        needs. Our team of knowledgeable and friendly sales associates are
        always available to answer your questions and guide you through the car
        buying process. We work with a variety of lenders to ensure that you get
        the best financing options available. At Auto Avenue, we pride ourselves
        on our commitment to customer satisfaction. Our goal is to make sure
        that every customer is happy with their purchase and that they feel
        confident in their decision to buy from us.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
