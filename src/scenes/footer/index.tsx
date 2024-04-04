import Logo from "@/assets/Logo.png";
import { FaFacebookSquare, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="log" className="w-[150px]" />
          <p className="my-5">
            Fitin Gym is your community for building a stronger you. We believe
            in fostering physical and mental well-being through a diverse range
            of group fitness classes, top-notch equipment, and a supportive
            atmosphere.
          </p>
          <p>&copy; Fitin Gym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a href="" target="_blank">
            <p className="flex gap-2 items-center my-5 ">
              <FaFacebookSquare />
              Facebook
            </p>
          </a>
          <a href="" target="_blank">
            <p className="flex gap-2 items-center my-5 ">
              <FaTwitter />
              Twitter
            </p>
          </a>
          <a href="" target="_blank">
            <p className="flex gap-2 items-center my-5 ">
              <FaTiktok />
              Tiktok
            </p>
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contacts</h4>
          <p className="my-5">fitingym.official@gmail.com</p>
          <p>(63+) 9296651214</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
