import logo from "../../../assets/logo/logo-malekairinternational.png";
import { FaPhone, FaRegEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import tik from '../../../assets/footerPic/Group 92.png'
import Section9 from "../Section9/Section9";

const Footer = () => {
  return (
    <>
    <Section9></Section9>
      <div className=" bg-[#151515] relative ">
        <footer className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-10 xl:pt-32 xl:pl-28 xl:pr-16 xl:pb-28 text-base-content container mx-auto">
          <div className="flex flex-col">
            <img className="w-32 mb-9" src={logo} alt="" />
            <p className=" lg:w-72 md:w-56 text-white text-base font-normal pb-8 border-b-2 border-[#FF3B00]">Lorem Ipsum is simply dummy text of the  printing and typesetting industry</p>

          </div>
          <div className="flex flex-col ml-10">
            <span className="text-white text-2xl font-medium pb-12">Company</span>
            <a className="text-zinc-300 text-base font-normal mb-5">About us </a>
            <a className="text-zinc-300 text-base font-normal mb-5">Company Blogs</a>
            <a className="text-zinc-300 text-base font-normal mb-5">Work with Us</a>
            <a className="text-zinc-300 text-base font-normal mb-5">Meet the team</a>
          </div>
          <div className="flex flex-col ml-10 md:ml-0 ">
            <span className="text-white text-2xl font-medium pb-12">Explore</span>
            <a className="text-zinc-300 text-base font-normal mb-5">Account</a>
            <a className="text-zinc-300 text-base font-normal mb-5">Legal</a>
            <a className="text-zinc-300 text-base font-normal mb-5">Contact</a>
            <a className="text-zinc-300 text-base font-normal mb-5">Privacy policy </a>
          </div>
          <div className="flex flex-col gap-2 ml-10 md:ml-0 ">
            <span className="text-white text-2xl font-medium pb-12">Newsletter</span>
            <input type="text" placeholder="Email address" className="input input-bordered w-full max-w-xs bg-stone-400 bg-opacity-80 text-[#FFFFFF] text-center" />

            <button className=" btn max-w-xs  border-none  text-[#FFFFFF] text-center  bg-orange-600  font-medium">Subscribe</button>

            <div className="flex items-center gap-2">
              <img src={tik} alt="" />
              <p className="text-white text-sm font-normal">I agree to all terms and condition</p>
            </div>

          </div>
          <div className="flex flex-col ml-10 md:ml-0  ">
            <div className=" flex py-2 items-center">
              <p className="text-[#FF3B00]"><FaPhone></FaPhone></p>
              <h3 className="text-white text-xl font-normal ml-4">  + 880 1611 66 4965 </h3>
            </div>
            <div className=" flex py-2 items-center ">
              <p className="text-[#FF3B00]"><FaRegEnvelope></FaRegEnvelope></p>
              <h3 className="text-white text-xl font-normal ml-4">solutya@gmail.com</h3>
            </div>
            <div className=" flex py-2 items-center ">
              <p className="text-[#FF3B00]"><FaLocationDot></FaLocationDot></p>
              <h3 className="text-white text-xl font-normal ml-4 whitespace-nowrap"> Usman center,  Uttara-12</h3>
            </div>

          </div>

        </footer>

        <div className=" absolute bottom-0 right-0 lg:w-[60%]  ">
          <div className=" bg-white rounded-tl-lg  relative" >
            <div className="rounded-tl-lg absolute inset-y-0 left-0 lg:p-16 flex justify-center items-center bg-[#FF3B00]">
              <p className="text-4xl text-white"><FaArrowUp></FaArrowUp></p>
            </div>
            <div className="flex justify-between gap-5  px-1 md:py-7 md:px-5 lg:py-16 lg:px-24 ml-40">
              <div className="flex  items-center gap-5">
                <p className=" lg:text-3xl text-lg"><FaFacebookF></FaFacebookF></p>
                <p className=" lg:text-3xl text-lg"><FaInstagram></FaInstagram></p>
                <p className=" lg:text-3xl text-lg"><FaTwitter></FaTwitter></p>
              </div>

              <div>
                <h1>@ All Copyright 2022, Solutya</h1>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;