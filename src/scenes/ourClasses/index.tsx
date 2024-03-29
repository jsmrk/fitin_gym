/* eslint-disable @typescript-eslint/no-unused-vars */
import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Traning Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere exercitationem dolores eum! Cumque harum facilis placeat illum, hic dolor.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere exercitationem dolores eum! Cumque harum facilis placeat illum, hic dolor.",
    image: image2,
  },
  {
    name: "AB Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere exercitationem dolores eum! Cumque harum facilis placeat illum, hic dolor.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere exercitationem dolores eum! Cumque harum facilis placeat illum, hic dolor.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere exercitationem dolores eum! Cumque harum facilis placeat illum, hic dolor.",
    image: image5,
  },
  {
    name: "Traning Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere exercitationem dolores eum! Cumque harum facilis placeat illum, hic dolor.",
    image: image6,
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              eius dolorem saepe aut. Sunt rerum amet dolorum provident atque at
              natus ratione corporis, quia optio nesciunt reiciendis explicabo
              praesentium soluta, eveniet ad voluptas, deserunt incidunt
              asperiores maiores odit dolore porro! Beatae exercitationem,
              voluptatibus molestias amet inventore aspernatur fugiat iusto
              nesciunt.
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
