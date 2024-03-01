import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Dialogue({ handleOpenDialogue }) {
  return (
    <Dialog
      open={open}
      handler={handleOpenDialogue}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogBody className="flex flex-col gap-10 md:gap-20 p-8 md:p-16">
        <h5 className="md:text-2xl text-[#2317A9] text-center font-semibold">
          Get 20 Minutes of Our Expert's Opinion About Your Business!
        </h5>
        <div className="flex flex-col gap-5">
          <Input variant="standard" label="Full Name" type="text" />
          <Input variant="standard" label="Full Email" type="email" />
          <Input variant="standard" label="Full Phone" type="number" />
          <Select variant="standard" label="Select Service">
            <Option value="Digital Marketing">UI/UX Design</Option>
            <Option value="Digital Advertising">Custom Website Design</Option>
            <Option value="Web Design & Development">
              Single Page Application
            </Option>
            <Option value="Search Engine Optimization">
              Front End Development
            </Option>
            <Option value="Commercial Video & Photography">
              E Comerce Development
            </Option>
            <Option value="Social Media Marketing">Back End Development</Option>
          </Select>
          <Textarea variant="standard" label="Eneter Message" type="text" />
        </div>
        <div className="flex justify-end">
          <Button
            variant="text"
            color="red"
            onClick={handleOpenDialogue}
            className="mr-1"
            size="sm"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-gradient-to-tr hover:bg-gradient-to-tl from-[#2317A9] to-[#6C5AF6] duration-300 ease-linear"
            onClick={handleOpenDialogue}
            size="sm"
          >
            <span>Confirm</span>
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
}
