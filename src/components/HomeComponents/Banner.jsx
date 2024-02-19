import React from "react";
// import bannerImg from "../../assets/banner.png";
import bannerAnim from "../../assets/anim/BannerLaptop.json";
import {
  Button,
} from "@material-tailwind/react";
import Dialogue from "../shared/Dialogue/Dialogue";
import Lottie from "lottie-react";
export default function Banner() {
  const [openDialogue, setDialogueOpen] = React.useState(false);
  const handleOpenDialogue = () => setDialogueOpen(!openDialogue);

  return (
    <div className="mx-5 md:flex md:container md:mx-auto items-center lg:min-h-[80vh]">
      <div className="md:w-1/2">
        <h1 className="text-[40px] lg:text-[60px] font-semibold">
          One Stop Web Services Agency in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2317A9] to-[#6C5AF6]">Bangladesh</span>
          {/* <span className="text-[#6C5AF6]">Bangladesh</span> */}
        </h1>
        <p className="lg:text-[20px] my-5">
          Coding Pixels, Framing Brands, & Showcasing Values— Welcome To
          NSRDev, Where Creativity Blends With Technology To Translate Your
          Dreams Into A Leading Web Legacy.
        </p>
        <Button
          onClick={handleOpenDialogue}
          className="bg-gradient-to-tr hover:bg-gradient-to-tl from-[#2317A9] to-[#6C5AF6] duration-300 ease-linear"
        >
          Book an appointment
        </Button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        {/* <img src={bannerImg} alt="" className="lg:h-[515px] lg:w-[600px]" /> */}
        <Lottie animationData={bannerAnim} loop={true} />
      </div>
      {openDialogue && <Dialogue openDialogue={openDialogue} handleOpenDialogue={handleOpenDialogue} />}
    </div>
  );
}
