import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { FaCartArrowDown } from 'react-icons/fa';
// import { MdOutlineStar } from 'react-icons/md';
// import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useEnrolls from '../../hooks/useEnrolled';
// const ratingStyles = {
//     itemShapes: Star,
//     activeFillColor: '#FED619',
//     inactiveFillColor: '#ffedd5'
// };


const CourseCard = ({ course }) => {
    // console.log(course);
    const { user } = useAuth()
    const [, refetch] = useEnrolls()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const { title, posted_by, image_url, short_description, price } = course;

    const handleAddToCart = (specificCourse) => {
        if (user && user?.email) {
            // send cart to db
            console.log(specificCourse);
            const cartItem = {
                courseId: specificCourse._id,
                email: user?.email
            }
            axiosSecure.post('/enrolls', cartItem)
                .then(res => {
                    console.log(res.data);
                    refetch()
                })
        }
        else {
            navigate('/login', { state: { from: location } })
            console.log('user nai');
        }
    }
    return (
        <Card className='group' shadow='none' border='1px' borderColor='#F1F1F3'>
            <CardBody px={{base: 5, md: 9, '2xl': 12}}  pt={{base: 5, md: 9, '2xl': 12}}>
                <Box overflow='hidden' borderRadius='base' cursor='pointer'>
                    <Image
                        className='group-hover:scale-110 transform transition-transform ease-in-out duration-1000'
                        src={image_url}
                        alt={`${title} class image`}
                        borderRadius='base'
                    />
                </Box>
                <Stack mt='6' spacing='5'>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Box display='flex' gap='2'>
                            <Box fontSize={{base: 'sm', '2xl': 'lg'}} gap='1' px='4' py='2' w='fit-content' rounded='base' border='1px' borderColor='#F1F1F3'>
                                5 Weeks
                            </Box>
                            <Box fontSize={{base: 'sm', '2xl': 'lg'}} gap='1' px='4' py='2' w='fit-content' rounded='base' border='1px' borderColor='#F1F1F3'>
                                Beginner
                            </Box>
                        </Box>
                        <Text fontSize={{base: 'base', '2xl': 'xl'}} fontWeight='500'>By {posted_by}</Text>
                    </Box>
                    <Heading size='md' cursor='pointer' w='fit-content' _hover={{ textColor: 'primary.500' }}>{title}</Heading>
                    <Text textColor='gray'>
                        {short_description}
                    </Text>
                    {/* <Box display='flex' alignItems='center' gap='3'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4}
                            itemStyles={ratingStyles}
                            readOnly
                        />
                        <span>4</span>
                    </Box> */}
                    <Text color='primary.500' fontSize='2xl' fontWeight='600'>
                        <span>${price}</span>
                        <span className='ml-2 text-base text-[#4C4C4D] line-through'>$200</span>
                    </Text>
                    {/* <Box display='flex' flexDir={{ base: 'column', xl: 'row' }} gap={{ base: 2, xl: 0 }}>
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
                    </Box> */}
                </Stack>
            </CardBody>
            <CardFooter px={{base: 5, md: 9, '2xl': 12}}  pb={{base: 5, md: 9, '2xl': 12}}>
                <Button onClick={() => handleAddToCart(course)} w='full' leftIcon={<FaCartArrowDown />} colorScheme='gray' rounded='base' px='6'>
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CourseCard;