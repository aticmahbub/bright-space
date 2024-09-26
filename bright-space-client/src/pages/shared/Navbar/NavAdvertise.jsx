import { Box, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const NavAdvertise = () => {
    return (
        <Box display='flex' alignItems='center' justifyContent='center' gap='3' py='2' fontSize={{base: 'xs', lg: 'md'}} bg='primary.500' textColor='white' rounded='base'>
            <Text>Free Courses 🌟 Sale Ends Soon, Get It Now</Text>
            <FaArrowRight />
        </Box>
    );
};

export default NavAdvertise;