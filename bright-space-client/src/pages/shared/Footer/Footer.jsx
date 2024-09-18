import { Button, Divider, Input, Stack } from "@chakra-ui/react";
import { div, title } from "framer-motion/client";
import { FaFacebookF, FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  const recentPosts = [
    {
      image:
        "https://themewant.com/products/wordpress/edurock/wp-content/uploads/2023/06/Mask-Group-768x497.jpg",
      title: "We are Playing",
      date: "20 Jun, 2024",
    },
    {
      image:
        "https://themewant.com/products/wordpress/edurock/wp-content/uploads/2023/06/Mask-Group-768x497.jpg",
      title: "We are Playing",
      date: "20 Jun, 2024",
    },
    {
      image:
        "https://themewant.com/products/wordpress/edurock/wp-content/uploads/2023/06/Mask-Group-768x497.jpg",
      title: "We are Playing",
      date: "20 Jun, 2024",
    },
  ];
  return (
    <div className="bg-[#0a0a28] text-white pt-10">
      <div className="max-w-7xl lg:mx-auto">
        <section className=" lg:grid grid-cols-2 space-y-3">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">
              Still You Need Our{" "}
              <span className="text-blue-400">Support ?</span>
            </h1>
            <p className="text-sm">
              Don't Wait make A Smart & Logical Quote Here. Its Pretty Easy.
            </p>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-4 w-full relative rounded-md bg-[#202942]"
            />
            <button className="bg-blue-500 absolute right-0 p-4 rounded-r-md">
              Subscribe Now
            </button>
          </div>
        </section>
        <Divider className="my-16" />
        <section className="grid grid-cols-4 font-medium">
          <div className="space-y-6 pr-10">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p className="text-base text-[#9FA2CE]">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependable safe, and professional chauffeured car
              end service in major cities across World.
            </p>
          </div>
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Usefull Links</h1>
            <ul className="space-y-6 text-lg">
              <li className="text-base text-[#9FA2CE]">
                <a href="#">About Us</a>
              </li>
              <li className="text-base text-[#9FA2CE]">
                <a href="#">Dashboard</a>
              </li>
              <li className="text-base text-[#9FA2CE]">
                <a href="#">Instructor Registration</a>
              </li>
              <li className="text-base text-[#9FA2CE]">
                <a href="#">Course LIst</a>
              </li>
              <li className="text-base text-[#9FA2CE]">
                <a href="#">Course Grid</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Course</h1>
            <ul className="space-y-6">
              <li className="text-base text-[#9FA2CE]">
                <a href="#">Master Finance</a>
              </li>
              <li className="text-base text-[#9FA2CE]">
                <a href="#">Strategy law</a>
              </li>
              <li className="text-base text-[#9FA2CE]">
                <a href="#">Machine Learning</a>
              </li>
              <li className="text-base text-[#9FA2CE]">
                <a href="#">Designer Essential Skills</a>
              </li>
              <li className="text-base text-[#9FA2CE]">
                <a href="#">Design in Figma</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Recent Post</h1>
            {
              recentPosts?.map(item=>(
                <div className="flex gap-2">
                  <img className="w-[61px] h-[54px]" src={item.image} alt="" />
                  <div>
                    <p className="text-[#9FA2CE]">{item.date}</p>
                    <h1 className="font-bold">{item.title}</h1>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <section className="flex items-center justify-between pt-16 pb-8">
          <div className="flex items-center gap-16">
            <img src="https://themewant.com/products/wordpress/edurock/wp-content/uploads/2023/07/logo-10.svg" alt="" />
            <h1 className="text-md font-bold">© 2024 Powered by <a href="#" className="text-[#5F2DED]">NodeNavigators.</a> </h1>
          </div>
          <div className="flex gap-4">
          <FaFacebookSquare size={25} />
          <FaTwitterSquare size={25} />
          <FaLinkedin size={25}/>
          <FaSquareGithub size={25} />
          <IoLogoSkype size={25}/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
