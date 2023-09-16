import React from "react";
import image from "../../assets/contact.png";
import { Button, Input, Textarea } from "@material-tailwind/react";
export default function Contact() {
  return (
    <div className="md:flex p-5 md:p-0 md:pl-10 md:py-10 justify-between items-center w-full shadow-xl rounded-xl">
      <form action="" className="md:w-1/2 flex flex-col gap-2.5">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#4175FC]">
          Connect with Us
          </h2>
          <p className="lg:text-xl my-5">
            Let's Discuss Your Digital Services Need
          </p>
        </div>
        <Input className="w-full" label="Enter Name"></Input>
        <Input className="w-full" label="Enter Email"></Input>
        <Textarea className="w-full" label="Enter Messaage"></Textarea>
        <Button>Send Message</Button>
      </form>
      <div className="hidden md:w-1/2 md:flex justify-end">
        <img src={image} alt="" className="h-[400px]" />
      </div>
    </div>
  );
}
