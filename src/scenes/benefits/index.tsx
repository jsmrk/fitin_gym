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
    title: "Training with Top-Tier Equipment",
    description:
      "  Combine the expertise of certified trainers with access to state-of-the-art equipment!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Diverse Group Fitness Classes",
    description:
      "Fitin Gym offers a wide range of group fitness classes to suit all preferences!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Top-Notch Trainers",
    description:
      "The expertise of our highly qualified trainers with cutting-edge facilities and equipment!",
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
            We believe in fostering physical and mental well-being through a
            diverse range of group fitness classes, top-notch equipment, and a
            supportive atmosphere. Our certified trainers create personalized
            plans to help you achieve your goals.
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
              setSelectedPage={function (): void {
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
                  className="pt-11 md:pt-0 pb-5"
                >
                  <HText>
                    Your Gateway to{" "}
                    <span className="text-primary-500">Physical</span> and{" "}
                    <span className="text-primary-500">Mental Wellness</span>.
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
                Fitin Gym isn't just about physical transformation, it's about
                building a stronger you, inside and out. We're proud to be a
                community of over a million members who have achieved incredible
                results, not just on the scale or with their strength training,
                but also in their mental well-being. With personalized plans
                from our top-notch trainers, diverse group fitness classes, and
                a supportive atmosphere.
              </p>
              <p className="mb-5">
                Fitin Gym empowers you to reach your full potential, both
                physically and mentally. Join our movement and experience the
                Fitin Gym difference!
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
