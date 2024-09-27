import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { FaCartArrowDown } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const ratingStyles = {
    itemShapes: Star,
    activeFillColor: '#FED619',
    inactiveFillColor: '#ffedd5'
};


const CourseCard = ({course, handleAddToCart}) => {
    const { title, posted_by, image_url, price, short_description, total_enrolment, } = course;
    console.log( 'func:',handleAddToCart,course);
    return (
        <Card bg='transparent' className='group' shadow='none'>
            <CardBody p='0'>
                <Box overflow='hidden' borderRadius='2xl' cursor='pointer'>
                    <Image
                        className='group-hover:scale-110 transform transition-transform ease-in-out duration-1000'
                        src={image_url}
                        alt={`${title} class image`}
                        borderRadius='2xl'
                    />
                </Box>
                <Stack mt='6' spacing='5'>
                    <Box display='flex' alignItems='center' fontSize='xs' gap='1' bg='#FED619' px='3' py='1' w='fit-content' rounded='sm'>
                        <MdOutlineStar />
                        Featured
                    </Box>
                    <Heading size='md' cursor='pointer' w='fit-content' _hover={{ textColor: 'secondary.500' }}>{title}</Heading>
                    <Text textColor='gray'>
                        {short_description}
                    </Text>
                    <Button colorScheme='gray' rounded='none' w='fit-content'>Computer Science</Button>
                    <Box display='flex' alignItems='center' gap='3'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4}
                            itemStyles={ratingStyles}
                            readOnly
                        />
                        <span>4</span>
                    </Box>
                    <Text color='secondary.500' fontSize='2xl' fontWeight='600'>
                        <span>${price}</span>
                        <span className='ml-2 text-base text-[#FF1949] line-through'>$200</span>
                    </Text>
                    <Box display='flex' flexDir={{ base: 'column', xl: 'row' }} gap={{ base: 2, xl: 0 }}>
                        <Box fontSize='sm'>
                            <Text mb='2' mr={{ base: 0, xl: 5 }}>Instructor- {posted_by}</Text>
                            <Divider />
                            <Text mt='2' mr={{ base: 0, xl: 5 }}>Categories- <span className='cursor-pointer hover:text-blue-950'>Computer Science</span></Text>
                        </Box>
                        <Box display={{ base: 'block', xl: 'none' }}><Divider orientation='horizontal' /></Box>
                        <Box display={{ base: 'none', xl: 'block' }}><Divider orientation='vertical' /></Box>
                        <Box fontSize='sm'>
                            <Text mb='2' ml={{ base: 0, xl: 5 }}>Duration- 30Hrs 30Mins</Text>
                            <Divider />
                            <Text mt='2' ml={{ base: 0, xl: 5 }}>Student Enrolled- {total_enrolment}</Text>
                        </Box>
                    </Box>
                </Stack>
            </CardBody>
            <CardFooter p='0' mt='5'>
                <Button 
                onClick={() =>handleAddToCart(course)}
                leftIcon={<FaCartArrowDown />} colorScheme='secondary' rounded='full' px='6'>
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CourseCard;