import { Box, Heading, Text } from "@chakra-ui/react";

const SectionTitle = ({title, description}) => {
    return (
        <Box>
            <Heading as='h2' size='2xl'>{title}</Heading>
            <Text mt='3'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</Text>
        </Box>
    );
};

export default SectionTitle;