import React from "react";
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return <motion.nav initial={{y:-100, opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0}} className=" mb-20 flex items-center justify-between py-6">
    <div className="flex shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
    </div>
  </motion.nav>;
};

export default Navbar;
