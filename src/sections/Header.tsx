import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";


export const Header = () => {
  return (
    <header className="sticky z-20 top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={40} width={40} />
            <MenuIcon className="w-5 h-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a
                href="#"
                className="hover:text-black/50 transition duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-black/50 transition duration-200"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:text-black/50 transition duration-300"
              >
                Customers
              </a>
              <a
                href="#"
                className="hover:text-black/50 transition duration-200"
              >
                Updates
              </a>
              <a
                href="#"
                className="hover:text-black/50 transition duration-200"
              >
                Help
              </a>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
