import React from "react";
// import image from "../../assets/contact.png";
import rocketAnim from "../../assets/anim/RocketContact.json";
import { Button, Input, Textarea } from "@material-tailwind/react";
import Lottie from "lottie-react";
export default function Contact() {
  const style = {
    height: 300,
  };
  return (
    <div className="md:flex p-5 md:p-10 items-center w-full shadow-xl rounded-xl md:container md:mx-auto">
      <form action="" className="md:w-1/2 flex flex-col gap-2.5">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#2317A9]">
          Connect with Us
          </h2>
          <p className="lg:text-xl my-5">
            Let's Discuss Your Digital Services Need
          </p>
        </div>
        <Input className="w-full" label="Enter Name"></Input>
        <Input className="w-full" label="Enter Email"></Input>
        <Textarea className="w-full" label="Enter Messaage"></Textarea>
        <Button className="bg-[#2317A9] hover:bg-[#4175FC] duration-300 ease-linear">Send Message</Button>
      </form>
      <div className="hidden md:block md:w-1/2">
        {/* <img src={image} alt="" className="h-[400px]" /> */}
        <Lottie animationData={rocketAnim} loop={true} style={style} />
      </div>
    </div>
  );
}
