import { Box, Divider, Icon, Image, Text, } from "@chakra-ui/react";
import logo from '../../../assets/bright-space-logo.svg'
import { footItems } from "../../../constants/constants";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg='white'>
      <Box>
        <Box display='flex' flexDir={{ base: 'column', lg: 'row' }} maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }} py='20' gap='4'>
          <Box mb='6' w={{ base: 'full', lg: '22%' }}>
            <Image w={{ base: 5, md: 7 }} src={logo} alt='bright space logo' />
            <Text mt='4'>
            Bright Space – Empowering learners worldwide with high-quality, accessible education. Join us to unlock your full potential and achieve your career goals.
            </Text>
          </Box>
          <Box display='flex' flexDir={{ base: 'column', lg: 'row' }} justifyContent='space-between' gap='4' flexGrow='1'>
            {
              footItems.map((item, idx) => <Box key={idx} className='flex-1'>
                <Text fontSize='xl' fontWeight='semibold' mb='4'>{item.name}</Text>
                <Text mb='4'>{item.description}</Text>
                <Box display='flex' gap='2' flexDir={item.cls}>
                  {
                    item.routes.map((route, idx) => <Box key={idx}>{
                      item.name === 'Contact' ? <Box display='flex' alignItems='center' gap='2'>
                        <Icon as={route.icon} />
                        <Text>{route.name}</Text>
                      </Box> : <Link className={`text-gray-500 w-fit hover:text-[#FF9500] ${route.name === FaFacebookSquare ? 'mt-2 text-2xl lg:text-3xl' : route.name === FaInstagramSquare ? 'mt-2 text-2xl lg:text-3xl' : ''}`}>{route.name === FaFacebookSquare ? <FaFacebookSquare /> : route.name === FaInstagramSquare ? <FaInstagramSquare /> : route.name}</Link>}</Box>)
                  }
                </Box>
              </Box>)
            }
          </Box>
        </Box>

        <Divider />
        <Box px={{ base: '2', lg: 8, '2xl': 0 }} py='10'>
          <Text textAlign='center'>All Rights Reserved &copy; {currentYear} BrightSpace - Developed by team <a href='' target='_blank' className='underline'>NodeNavigators</a></Text>
        </Box>
      </Box>
    </Box>

  );
};

export default Footer;
