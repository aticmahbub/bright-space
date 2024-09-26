import classroom from '../../Lotties/classroom.json'
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import Lottie from "lottie-react";
import JoinClsModal from '../../components/JoinClsModal/JoinClsModal';
import { Link } from 'react-router-dom';

const ClassRoom = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box className='h-[calc(100vh-101px)]'>
            <JoinClsModal title='Join Class' isOpen={isOpen} onClose={onClose} />
            <Box h='full' display='flex' gap='8' alignItems='center' justifyContent='center' flexDir='column'>
                <Lottie className='w-full md:w-96' animationData={classroom} />
                <Box>
                    <Text textAlign='center' color='gray' mb='4'>Add a class to get started</Text>
                    <Button as={Link} to='/liveSession' colorScheme='primary' rounded='base' variant='outline'>Create Class</Button>
                    <Button onClick={onOpen} colorScheme='primary' rounded='base' ml='4'>Join Class</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ClassRoom; 