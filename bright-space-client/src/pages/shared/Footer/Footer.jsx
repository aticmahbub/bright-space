import { Box, Divider, Icon, Image, Text, } from "@chakra-ui/react";
import logo from '../../../assets/bright-space-logo.svg'
import { footItems } from "../../../constants/constants";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg='white' pt='10'>
      <Box maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }}>
        <Box display='flex' gap='6'>
          <Box mb='6' w='22%'>
            <Image w={{ base: 5, md: 7 }} src={logo} alt='bright space logo' />
            <Text mt='4'>
              Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car services in major cities worldwide.
            </Text>
          </Box>
          <Box display='flex' justifyContent='space-between' gap='6' flexGrow='1'>
            {
              footItems.map((item, idx) => <Box key={idx} className='flex-1'>
                <Text fontSize='xl' fontWeight='semibold' mb='4'>{item.name}</Text>
                <Text>{item.description}</Text>
                <Box display='flex' gap='2' flexDir={item.cls}>
                  {
                    item.routes.map((route, idx) => <Box key={idx}>{
                      item.name === 'Contact' ? <Box display='flex' alignItems='center' gap='2'>
                        <Icon as={route.icon} />
                        <Text>{route.name}</Text>
                      </Box> : <Link className={`text-gray-500 w-fit hover:text-[#00BADB] ${route.name === FaFacebookSquare ? 'mt-2 text-2xl lg:text-3xl' : route.name === FaInstagramSquare ? 'mt-2 text-2xl lg:text-3xl' : ''}`}>{route.name === FaFacebookSquare ? <FaFacebookSquare /> : route.name === FaInstagramSquare ? <FaInstagramSquare /> : route.name}</Link>}</Box>)
                  }
                </Box>
              </Box>)
            }
          </Box>
        </Box>

        <Divider />
        <section className="flex flex-col md:flex-row items-center sm:justify-center sm:items-center justify-between pt-12 pb-8 px-4">
          <div className="lg:flex items-center gap-6 md:gap-16">
            <h1 className="text-md font-bold">
              © 2024 Powered by{" "}
              <a href="#" className="text-[#612FEE] hover:text-[#F2277E]">NodeNavigators</a>.
            </h1>
          </div>
        </section>
      </Box>
    </Box>

  );
};

export default Footer;
