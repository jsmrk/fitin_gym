/* eslint-disable @typescript-eslint/no-unused-vars */
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomPageGraphic from "@/assets/HomePageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="bg-gray-20">
      {/* IMAGE AND MAIN HEADER*/}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center gap-40 md:pt-[150px] md:pb-[100px] pt-11"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="md:w-3/5 md:flex-row">
          {/* HEADING TITLE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={HomePageText}
              alt="home-page-text"
              className="pt-[80px] md:pt-0"
            />

            <p className="mt-8 text-sm">
              Your one-stop gym for transforming your health and fitness. We
              believe everyone has the potential for strength, both physical and
              mental. At Fitin Gym, we're here to support you on your journey to
              becoming a stronger, more confident you.
            </p>
          </motion.div>

          {/* ACTIONS BUTTON */}
          <motion.div
            className="flex items-center gap-8 mt-11"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {" "}
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 "
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE  */}
        <motion.div
          className=" flex basis-3/5 justify-center py-11 md:py-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomPageGraphic} alt="home-page-graphic" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
