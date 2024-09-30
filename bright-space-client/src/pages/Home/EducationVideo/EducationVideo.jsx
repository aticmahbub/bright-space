import { Box } from "@chakra-ui/react";
import eduVideo from '../../../assets/videos/education-video.mp4';

const EducationVideo = () => {
    return (
        <Box w='full' maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }} mt={{base: 10, md: 20, '2xl': 28}}>
            <Box
                as='video'
                controls
                autoPlay
                loop
                muted
                playsInline
                w='full'
                maxH='790px'
                cursor='pointer'
                objectFit='cover'
                borderRadius='lg'
                src={eduVideo}
            />
        </Box>
    );
};

export default EducationVideo;