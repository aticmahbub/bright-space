import { Box, Heading, Text } from "@chakra-ui/react";

const SectionTitle = ({title, description}) => {
    return (
        <Box>
            <Heading as='h2' size='xl'>{title}</Heading>
            <Text w={{base: 'full', lg: '90%'}} fontSize={{base: 'sm', md: 'md', lg: 'lg'}} mt='3'>{description}</Text>
        </Box>
    );
};

export default SectionTitle;