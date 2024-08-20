import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black text-white py-28">
      <div className=" px-6 flex flex-col lg:flex-row justify-center items-center mx-auto max-sm:grid">
        <div className="lg:pr-16 lg:border-r  border-borderColor max-sm:mb-6 max-sm:pb-8 mb-12 lg:mb-0">
          <p className="text-4xl semibold">MediQuizz</p>
          <p className="text-[#D1D1D1] text-md mt-3">
            Empowering healthcare professionals with <br /> knowledge for a better tomorrow.
          </p>
        </div>
        <div className="ml-16 max-sm:ml-1 flex max-sm:grid max-sm:gap-y-4 border-t border-borderColor pt-4 lg:border-t-0">
          <div className="w-36 flex flex-col">
            <p>Features</p>
            <div className="mt-2 text-sm flex flex-col gap-2 text-[#D1D1D1]">
              <Link to={"/trivia"}>
                <p className="hover:text-[#248ae9]">Versus</p>
              </Link>
              <Link to={"/courses"}>
                <p className="hover:text-[#248ae9]">Courses</p>
              </Link>
              <Link to={"/notepacks"}>
                {" "}
                <p className="hover:text-[#248ae9]">Notescards</p>
              </Link>
            </div>
          </div>
          <div className="w-36 flex flex-col">
            <p>Other</p>
            <div className="mt-2 text-sm flex flex-col gap-2 text-[#D1D1D1]">
              <Link to={"/dashboard"}>
                <p className="hover:text-[#248ae9]">Dashboard</p>
              </Link>
              <Link to={"/"}>
                <p className="hover:text-[#248ae9]">Home</p>
              </Link>
            </div>
          </div>
          <div className="w-36 flex flex-col">
            <p>Auth</p>
            <div className="mt-2 text-sm flex flex-col gap-2 text-[#D1D1D1]">
              <Link to={"/login"}>
                <p className="hover:text-[#248ae9]">Login</p>
              </Link>
              <Link to={"/signup"}>
                <p className="hover:text-[#248ae9]">Sign Up</p>
              </Link>
            </div>
          </div>
          <div className="w-36 flex flex-col">
            <p>Legal</p>
            <div className="mt-2 text-sm flex flex-col gap-2 text-[#D1D1D1]">
              <p className="cursor-not-allowed">Terms of Use</p>
              <p className="cursor-not-allowed">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="self-baseline">© Copyright 2024 MediQuizz.</div> */}
    </footer>
  );
};
export default Footer;
