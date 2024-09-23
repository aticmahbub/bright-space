import classroom from '../../Lotties/classroom.json'
import { Box, Button, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";

const ClassRoom = () => {
    return (
        <Box className='h-[calc(100vh-101px)]'>
            <Box h='full' display='flex' gap='8' alignItems='center' justifyContent='center' flexDir='column'>
                <Lottie className='w-96' animationData={classroom} />
                <Box>
                    <Text textAlign='center' mb='4'>Add a class to get started</Text>
                    <Button colorScheme='secondary' rounded='none' variant='outline'>Create Class</Button>
                    <Button colorScheme='secondary' rounded='none' ml='6'>Join Class</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ClassRoom;