import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <div className="md:flex mt-10 md:gap-11">
          <div className="md:w-4/5">
            <motion.div
              className="md:w-4/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                <span className="text-primary-500">JOIN NOW</span> TO GET IN
                SHAPE
              </HText>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur molestias eius accusamus voluptas libero aut!
                Cupiditate necessitatibus alias, odio esse vero fugiat commodi
                nemo harum optio magni quasi doloribus accusamus ipsam inventore
                aperiam? Unde, molestias quidem consectetur dolor corporis eos
                maiores laboriosam, rerum sequi animi accusamus odio facilis,
                eligendi quibusdam.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/allforoneforall01@gmail.com"
                method="POST"
              >
                <input
                  type="text"
                  className={inputStyle}
                  placeholder="NAME"
                  {...register("name", { required: true, maxLength: 100 })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This Field is Required"}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 characters"}
                  </p>
                )}

                <input
                  type="text"
                  className={inputStyle}
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" &&
                      "This Field is Required"}
                    {errors.email.type === "pattern" && "Invalid Email Address"}
                  </p>
                )}

                <textarea
                  rows={4}
                  cols={50}
                  className={inputStyle}
                  placeholder="MESSAGE"
                  {...register("message", { required: true, maxLength: 2000 })}
                />
                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" &&
                      "This Field is Required"}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 characters"}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>
          </div>
          <motion.div
            className="mt-16 md:mt-0 flex justify-center items-center px-11"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={ContactUsPageGraphic}
              alt="contact-graphic"
              className="rounded-3xl max-w-[470px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
