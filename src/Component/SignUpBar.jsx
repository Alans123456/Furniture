import React from "react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { PhoneOutgoing } from "lucide-react";

export default function SignUpBar() {
  return (
    <>
      <div className="flex justify-between  bg-secondary items-center p-4 text-amber-50 h-10">
        <div className="flex flex-grid items-center">
          <p className="text-2xl ">Follow us:</p>
          <a href="">
            {" "}
            <Instagram className="w-6 h-6 ml-2 mt-1" />
          </a>
          <a href="">
            {" "}
            <Facebook className="w-6 h-6 ml-2 mt-1" />
          </a>
          <a href="" className="w-6 h-6 ml-2 mt-1">
            <FontAwesomeIcon icon={faXTwitter} size="1.5x" />
          </a>
        </div>
        <div>
          <a href="">
            <p className="text-3xl font-body mr-12">
              Signup and get upto 20% of upto Rs.200
            </p>
          </a>
        </div>
        <div className="flex flex-grid items-center">
          <PhoneOutgoing className="w-6 h-6 mt-1" />
          <a href="">
            <p className="text-2xl ml-1">+91 1234567890</p>
          </a>
        </div>
      </div>
    </>
  );
}
