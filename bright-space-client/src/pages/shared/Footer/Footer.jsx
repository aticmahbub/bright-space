import { Box, Divider } from "@chakra-ui/react";
// import { div, title } from "framer-motion/client";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io";
import { Text} from '@chakra-ui/react';

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
<div className="bg-[#0a0a28] text-[#612FEE] pt-10">
  <Box px={{ base: 4, md: 6, xl: 10, '2xl': 44 }}>
    <section className="lg:grid grid-cols-2 gap-6 space-y-3 lg:space-y-0">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Still Need Our <span className="text-[#F2277E]">Support?</span>
        </h1>
        <p className="text-sm font-medium">
          Don&apos;t Wait, make A Smart & Logical Quote Here. It is Pretty Easy.
        </p>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-3 md:py-4 w-full rounded-md bg-[#202942] text-white focus:outline-none"
        />
        <button className="bg-white text-[#612FEE]  absolute right-0 px-4 py-3 md:py-4 rounded-r-md hover:bg-[#F2277E] transition-all duration-300">
          Subscribe Now
        </button>
      </div>
    </section>

    <Divider className="my-8 md:my-16" />

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="text-base text-[#9FA2CE]">
          Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car services in major cities worldwide.
        </p>
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Useful Links</h1>
        <ul className="space-y-4">
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">About Us</a>
          </li>
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">Dashboard</a>
          </li>
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">Instructor Registration</a>
          </li>
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">Course List</a>
          </li>
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">Course Grid</a>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Courses</h1>
        <ul className="space-y-4">
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">Master Finance</a>
          </li>
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">Strategy Law</a>
          </li>
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">Machine Learning</a>
          </li>
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">Designer Essential Skills</a>
          </li>
          <li className="text-base text-[#9FA2CE]">
            <a href="#" className="hover:text-[#F2277E]">Design in Figma</a>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Recent Posts</h1>
        {recentPosts?.map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <img className="w-[61px] h-[54px]" src={item.image} alt={item.title} />
            <div>
              <p className="text-[#9FA2CE]">{item.date}</p>
              <h1 className="font-bold text-white">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="flex flex-col md:flex-row items-center justify-between pt-12 pb-8">
      <div className="flex items-center gap-6 md:gap-16">
      <Box color="white" fontWeight="bold" fontSize="xl">
                            <Text className='text-3xl'>
                                <span className='text-[#F2277E]'>Bright</span>
                                <span className='text-[#612FEE]'>Space</span>
                            </Text>
                        </Box>
        <h1 className="text-md font-bold">
          © 2024 Powered by{" "}
          <a href="#" className="text-[#612FEE] hover:text-[#F2277E]">NodeNavigators</a>.
        </h1>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <FaFacebookSquare size={25} className="hover:text-[#F2277E]" />
        <FaTwitterSquare size={25} className="hover:text-[#F2277E]" />
        <FaLinkedin size={25} className="hover:text-[#F2277E]" />
        <FaSquareGithub size={25} className="hover:text-[#F2277E]" />
        <IoLogoSkype size={25} className="hover:text-[#F2277E]" />
      </div>
    </section>
  </Box>
</div>

  );
};

export default Footer;
