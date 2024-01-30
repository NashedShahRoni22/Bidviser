import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Dialogue({handleOpenDialogue}) {
  return (
    <Dialog
      open={open}
      handler={handleOpenDialogue}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader className="p-5 md:p-10 text-[#0c2c5d] text-center font-semibold">
        <h5>Get 20 Minutes of Our Expert's Opinion About Your Business!</h5>
      </DialogHeader>
      <DialogBody divider className="flex flex-col gap-5 p-5 md:p-10">
        <Input variant="standard" label="Full Name" type="text" />
        <Input variant="standard" label="Full Email" type="email" />
        <Input variant="standard" label="Full Phone" type="number" />
        <Select variant="standard" label="Select Service">
          <Option value="Digital Marketing">Digital Marketing</Option>
          <Option value="Digital Advertising">Digital Advertising</Option>
          <Option value="Web Design & Development">
            Web Design & Development
          </Option>
          <Option value="Search Engine Optimization">
            Search Engine Optimization
          </Option>
          <Option value="Commercial Video & Photography">
            Commercial Video & Photography
          </Option>
          <Option value="Social Media Marketing">Social Media Marketing</Option>
        </Select>
        <Textarea variant="standard" label="Eneter Message" type="text" />
      </DialogBody>
      <DialogFooter className="p-5 md:p-10">
        <Button
          variant="text"
          color="red"
          onClick={handleOpenDialogue}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button
          className="hover:bg-[#4175FC] bg-[#0c2c5d] duration-300 ease-linear"
          onClick={handleOpenDialogue}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
      <ul className="flex justify-center gap-4 p-5 md:p-10">
        <li>
          <a href="https://www.facebook.com/NSRDev" target="_blank">
            <BsFacebook className="text-[#4175FC] text-xl md:text-2xl lg:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2FViserBid"
            target="_blank"
          >
            <BsLinkedin className="text-[#4175FC] text-xl md:text-2xl lg:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2FViserBid"
            target="_blank"
          >
            <BsTwitter className="text-[#4175FC] text-xl md:text-2xl lg:text-3xl" />
          </a>
        </li>
      </ul>
    </Dialog>
  );
}
