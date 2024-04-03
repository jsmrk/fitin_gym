/* eslint-disable @typescript-eslint/no-unused-vars */
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomPageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER*/}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-full"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-3 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={HomePageText}
              alt="home-page-text"
              className="w-[500px] pt-[80px] md:pt-0"
            />

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes that you dream of.. Get your Dream
              Body now.
            </p>
          </motion.div>
          {/* ACTIONS BUTTON */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE  */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img
            src={HomPageGraphic}
            alt="home-page-graphic"
            className="pt-11 md:pt-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
