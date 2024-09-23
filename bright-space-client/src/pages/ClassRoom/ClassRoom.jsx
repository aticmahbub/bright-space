import classroom from '../../Lotties/classroom.json'
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import Lottie from "lottie-react";
import ModalPrimary from '../../components/JoinClsModal/JoinClsModal';

const ClassRoom = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box className='h-[calc(100vh-101px)]'>
            <ModalPrimary title='Join Class' isOpen={isOpen} onClose={onClose} />
            <Box h='full' display='flex' gap='8' alignItems='center' justifyContent='center' flexDir='column'>
                <Lottie className='w-full md:w-96' animationData={classroom} />
                <Box>
                    <Text textAlign='center' mb='4'>Add a class to get started</Text>
                    <Button colorScheme='secondary' rounded='none' variant='outline'>Create Class</Button>
                    <Button onClick={onOpen} colorScheme='secondary' rounded='none' ml='6'>Join Class</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ClassRoom;