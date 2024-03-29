/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home
        setSelectedPage={function (value: SelectedPage): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Benefits
        setSelectedPage={function (value: SelectedPage): void {
          throw new Error("Function not implemented.");
        }}
      />
      <OurClasses
        setSelectedPage={function (value: SelectedPage): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ContactUs
        setSelectedPage={function (value: SelectedPage): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default App;
