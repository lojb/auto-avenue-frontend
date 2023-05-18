import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { contacts } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ContactCard = ({ index, title, icon, source_code_link }) => {
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
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="cursor-pointer"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          </div>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]"
      >
        Have a question or need assistance? Our dedicated team is here to help!
        Contact us for any inquiries, feedback, or support you may need. We are
        committed to providing you with excellent service and ensuring your car
        buying experience is smooth and enjoyable. Reach out to us today and let
        us assist you in finding the perfect solution for your automotive needs.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {contacts.map((contact, index) => (
          <ContactCard key={contact.title} index={index} {...contact} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
