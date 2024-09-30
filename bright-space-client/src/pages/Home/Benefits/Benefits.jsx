import { Box, Card, CardHeader, CardBody, CardFooter, Heading, Text, IconButton } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Benefits = () => {
    return (
        <Box w='full' maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }} mt={{ base: 10, md: 20, '2xl': 28 }}>
            <SectionTitle title='Benefits' />
            <Card rounded='base' shadow='none'>
                <CardHeader display='flex' justifyContent='end'>
                    <Heading as='h3' size='4xl'>01</Heading>
                </CardHeader>

                <CardBody>
                    <Text fontSize='2xl' fontWeight='600'>Flexible Learning Schedule</Text>
                    <Text fontSize='lg' mt='3'>Fit your coursework around your existing commitments and obligations.</Text>
                </CardBody>

                <CardFooter justify='end'>
                    <IconButton
                        colorScheme='gray'
                        textColor='primary.500'
                        aria-label='Arrow Up Right'
                        size='lg'
                        icon={<FiArrowUpRight />}
                    />
                </CardFooter>
            </Card>
        </Box>
    );
};

export default Benefits;