/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsGraphic from "@/assets/BenefitsPageGraphic.png";
import useMediaQuery from "@/hooks/useMediaQuery";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora odit amet dolor eligendi commodi!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, porro cum. Voluptatum odio quod tenetur dicta qui?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainees",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia, voluptatem architecto amet sequi ratione autem adipisci expedita animi ullam.",
  },
];

const containerMotion = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = { setSelectedPage: (value: SelectedPage) => void };

function Benefits({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="benefits" className=" mx-auto min-h-full w-5/6 py-40 md:py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*   HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerMotion}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={function (value: SelectedPage): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto "
            src={BenefitsGraphic}
            alt="benifits-graphic"
          />

          <div>
            {/* TITLE */}
            <div className="relative">
              <div
                className={`${isAboveMediumScreens ? "before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves pt-11 md:pt-0" : ""}`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="pt-11 md:pt-0"
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores et accusantium possimus iste laborum error. Ratione
                eligendi asperiores aliquid numquam, ea velit recusandae eos
                modi labore eius. Quis nobis perspiciatis, nostrum repellat vero
                obcaecati officiis? Perferendis aspernatur eos quae, tempore
                commodi tenetur recusandae amet id et voluptatibus explicabo
                quasi in!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                laboriosam recusandae corrupti vitae odio molestias, provident
                magni ipsum eaque sequi, obcaecati, a maxime ab debitis officia
                possimus tempora autem aliquid.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div
                className={`${isAboveMediumScreens ? "before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles" : ""}`}
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
