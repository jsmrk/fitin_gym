/* eslint-disable @typescript-eslint/no-unused-vars */
import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Sculpt & Strength",
    description:
      "A targeted workout using various equipment (weights, resistance bands) to build muscle, improve definition, and enhance overall strength.",
    image: image1,
  },
  {
    name: "Power Up HIIT",
    description:
      "High-intensity interval training (HIIT) that alternates between intense bursts of activity and short recovery periods, burning serious calories and boosting your metabolism.",
    image: image2,
  },
  {
    name: "Cardio Kickboxing",
    description:
      "A fun and energetic class that combines punching and kicking techniques with cardio drills, improving coordination and cardiovascular health.",
    image: image3,
  },
  {
    name: "Zumba",
    description:
      "A high-energy dance fitness class with Latin rhythms, perfect for burning calories while having a blast.",
    image: image4,
  },
  {
    name: "YOGA",
    description:
      "A dynamic yoga class that links postures (asanas) with breathwork (pranayama) to improve flexibility, strength, and mindfulness.",
    image: image5,
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Explore high-energy cardio classes to ignite your spirit, targeted
              strength training to build resilience, and mindful practices like
              yoga and meditation to cultivate inner strength. With every class,
              you'll be guided by our top-notch trainers, motivated by a
              supportive community, and equipped with state-of-the-art
              facilities.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
