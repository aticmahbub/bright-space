import { Card, CardHeader, CardBody, CardFooter, Heading, Text, IconButton } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
const BenefitCard = ({info}) => {
    const {count, title, description} = info;

    return (
        <Card rounded='lg' shadow='none' p={{base: 'none', lg: 5, '2xl': 7}}>
            <CardHeader display='flex' justifyContent='end'>
                <Heading as='h3' size='2xl'>{count}</Heading>
            </CardHeader>

            <CardBody>
                <Text fontSize={{base: 'xl', '2xl': '2xl'}} fontWeight='600'>{title}</Text>
                <Text fontSize={{base: 'sm', md: 'md', lg: 'lg'}} mt='3'>{description}</Text>
            </CardBody>

            <CardFooter justify='end'>
                <IconButton
                    colorScheme='gray'
                    textColor='primary.500'
                    fontSize='2xl'
                    aria-label='Arrow Up Right'
                    size='lg'
                    icon={<FiArrowUpRight />}
                />
            </CardFooter>
        </Card>
    );
};

export default BenefitCard;