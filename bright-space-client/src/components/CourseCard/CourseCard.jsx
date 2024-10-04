import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { FaCartArrowDown } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'

const CourseCard = ({ course, handleAddToCart }) => {

    const { title, posted_by, image_url, short_description, price } = course;
    return (
        <div>
            <Card className='group' shadow='none' rounded='lg' border='1px' bg='#FCFCFD' borderColor='#F1F1F3'>
                <CardBody px={{ base: 5, md: 9, '2xl': 12 }} pt={{ base: 5, md: 9, '2xl': 12 }}>
                    <Box overflow='hidden' borderRadius='base' cursor='pointer'>
                        <Image
                            className='group-hover:scale-110 transform transition-transform ease-in-out duration-1000'
                            src={image_url}
                            alt={`${title} class image`}
                            borderRadius='md'
                        />
                    </Box>
                    <Stack mt='6' spacing='4'>
                        <Box display='flex' flexDir={{ base: 'column', md: 'row' }} alignItems={{ base: 'left', md: 'center' }} justifyContent='space-between' gap='6'>
                            <Box display='flex' gap='2'>
                                <Box fontSize={{ base: 'sm', '2xl': 'lg' }} gap='1' px='4' py='2' w='fit-content' rounded='base' border='1px' borderColor='#F1F1F3'>
                                    5 Weeks
                                </Box>
                                <Box fontSize={{ base: 'sm', '2xl': 'lg' }} gap='1' px='4' py='2' w='fit-content' rounded='base' border='1px' borderColor='#F1F1F3'>
                                    Beginner
                                </Box>
                            </Box>
                            <Text fontSize={{ base: 'base', '2xl': 'xl' }} fontWeight='500'>By {posted_by}</Text>
                        </Box>
                        <Box>
                            <Heading size='md' cursor='pointer' w='fit-content' _hover={{ textColor: 'primary.500' }}>{title}</Heading>
                            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} textColor='gray' mt='2'>
                                {short_description}
                            </Text>
                        </Box>
                        <Text color='primary.500' fontSize='2xl' fontWeight='600'>
                            <span>${price}</span>
                            <span className='ml-2 text-base text-[#4C4C4D] line-through'>$200</span>
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter px={{ base: 5, md: 9, '2xl': 12 }} pb={{ base: 5, md: 9, '2xl': 12 }}>
                    <Button onClick={() => handleAddToCart(course)} w='full' leftIcon={<FaCartArrowDown />} colorScheme='gray' px='6'>
                        Add to cart
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CourseCard;



