import dynamic from "next/dynamic";

const Doctors = dynamic(() => import("./main-page/Doctors"));
const Rating = dynamic(() => import("./main-page/Rating"));
const Main = dynamic(() => import("./main-page/Main"));

import Disturb from "./main-page/Distrub";
import About from "./main-page/About";
import HelpButton from "@/components/elements/HelpButton";
import MedionSet from "./main-page/MedionSet";
import MedicalServise from "./main-page/MedicalServise";
import Patients from "./main-page/Patients";
import Partners from "./main-page/Partners";

const page = () => {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Main />
      <Disturb />
      <About />
      <MedicalServise />
      <MedionSet />
      <Patients />
      <Doctors />
      <Partners />
      <Rating />
      <HelpButton />
    </div>
  );
};

export default page;
