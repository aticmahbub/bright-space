
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const EnrolledCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/AllCourses.json');
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <Box className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                courses.map(item =>
                    <Card maxW='full' key={item.id}>
                        <CardBody>
                            <Box
                                bgImage={item.image_url}
                                bgSize='cover'
                                bgPosition='center'
                                borderRadius='lg'
                                w={'full'}
                                h='275px'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{item.title}</Heading>
                                <Text>
                                    {item.long_description.slice(0, 150)}
                                </Text>
                                <Text color='primary.600' fontSize='2xl'>
                                    ${item.price}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='primary'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='primary'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                )
            }
        </Box>
    );
};

export default EnrolledCourses;