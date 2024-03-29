/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="log" />
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam quaerat deserunt similique atque earum. rat
            deserunt similique atque earum. et consectetur adipisicing elit.
          </p>
          <p>C Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa Orci Senectus</p>
          <p className="my-5">similique atque earum</p>
          <p className="my-5">deserunt similique</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contacts</h4>
          <p className="my-5">Lorem, ipsum dolor</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
