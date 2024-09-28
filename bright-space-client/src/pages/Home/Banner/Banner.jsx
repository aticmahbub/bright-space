import { Box, Button, ButtonGroup, Icon, Image, Text } from '@chakra-ui/react';
import sparkLine from '../../../assets/icons/spark-line.png'
import './css/banner.css'
import { FaBolt } from 'react-icons/fa6';

const Banner = () => {
    return (
        <Box display='flex' flexDir='column' alignItems='center' justifyContent='center' gap='5' maxW='1596px' mx='auto' px='2' py={{ base: 10, md: 20, lg: 0 }} className='lg:h-[calc(100vh-141px)]' textAlign='center' textColor='#1A1A1A'>
            <Box pos='relative' display='flex' alignItems='center' justifyContent='center' gap='10px' px={{ base: 3, '2xl': 5 }} py={{ base: 3, '2xl': '14px' }} border='1px' borderColor='#F1F1F3' rounded='base' bg='#FCFCFD'>
                <Image src={sparkLine} alt='spark icon' w={{ base: 7, md: 8, lg: 10 }} pos='absolute' left={{ base: -2, md: -6, lg: -7 }} top={{ base: -2, md: -6, lg: -7 }} />
                <Box bg='#FFF4E5' p={{ base: 3, '2xl': 4 }} rounded='base'>
                    <Icon fontSize={{ base: '2xl', '2xl': '3xl' }} as={FaBolt} />
                </Box>
                <Text fontSize={{ base: 'base', md: '3xl', lg: '4xl', '2xl': '5xl' }} fontWeight='600' textAlign='left'><span className='text-[#FF9500]'>Unlock</span> Your Creative Potential</Text>
            </Box>
            <Box>
                <Text fontSize={{ base: 'lg', md: '2xl', '2xl': '4xl' }} fontWeight='500'>with Bright Space professional online courses.</Text>
                <Text fontSize={{ base: 'sm', md: 'lg' }} mt='3'>Learn from Industry Experts and Enhance Your Skills.</Text>
                <ButtonGroup gap='2' mt={{ base: 8, md: 16 }}>
                    <Button colorScheme='primary' rounded='base' size={{ base: 'sm', md: 'lg' }}>Explore Courses</Button>
                    <Button colorScheme='primary' rounded='base' size={{ base: 'sm', md: 'lg' }} variant='outline'>View Pricing</Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
};

export default Banner;