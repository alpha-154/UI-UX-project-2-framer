import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-10 text-sm text-center">
      <div className="container">
        <div className="inline-flex ">
          <Image src={logo} alt="Logo" height={40} className="" />
        </div>
      </div>
      <nav className="flex flex-col md:flex-row md:justify-center gap-6 lg:gap-10 mt-6">
        <a
          href="#"
          className="cursor-pointer hover:text-white/50 transition duration-200"
        >
          About
        </a>
        <a
          href="#"
          className="cursor-pointer hover:text-white/50 transition duration-200"
        >
          Features
        </a>
        <a
          href="#"
          className="cursor-pointer hover:text-white/50 transition duration-200"
        >
          Customers
        </a>
        <a
          href="#"
          className="cursor-pointer hover:text-white/50 transition duration-200"
        >
          Pricing
        </a>
        <a
          href="#"
          className="cursor-pointer hover:text-white/50 transition duration-200"
        >
          Help
        </a>
        <a
          href="#"
          className="cursor-pointer hover:text-white/50 transition duration-200"
        >
          Careers
        </a>
      </nav>

      <div className="flex justify-center gap-6 mt-6">
        <SocialX className="cursor-pointer hover:text-white/50 transition duration-200" />
        <SocialInsta className="cursor-pointer hover:text-white/50 transition duration-200" />
        <SocialLinkedin className="cursor-pointer hover:text-white/50 transition duration-200" />
        <SocialPin className="cursor-pointer hover:text-white/50 transition duration-200" />
        <SocialYoutube className="cursor-pointer hover:text-white/50 transition duration-200" />
      </div>
      <p className="mt-6">&copy; 2024 Assiduous Inc. All rights reserved.</p>
    </footer>
  );
};
