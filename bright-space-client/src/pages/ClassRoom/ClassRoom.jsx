import classroom from '../../Lotties/classroom.json'
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import Lottie from "lottie-react";
import JoinClsModal from '../../components/JoinClsModal/JoinClsModal';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useMutation } from '@tanstack/react-query';

const ClassRoom = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationKey: ['meetingCode'],
        mutationFn: async (code) => {
            const res = await axiosPublic.post('/meetingCode', code);
            return res.data;
        },
        onSuccess: (data, variables) => {
            if (variables?.meetCode) {
                navigate(`/live/${variables.meetCode}`);
            }
        }
    });

    const generateMeetingCode = () => {
        const meetingCode = 'classroom-' + Math.random().toString(36).substr(2, 8);
        mutate({ meetCode: meetingCode });
    };

    return (
        <Box className='h-[calc(100vh-101px)]'>
            <JoinClsModal title='Join Class' isOpen={isOpen} onClose={onClose} />
            <Box h='full' display='flex' gap='8' alignItems='center' justifyContent='center' flexDir='column'>
                <Lottie className='w-full md:w-96' animationData={classroom} />
                <Box>
                    <Text textAlign='center' color='gray' mb='4'>Add a class to get started</Text>
                    <Button onClick={generateMeetingCode} colorScheme='primary' rounded='base' variant='outline'>Create Class</Button>
                    <Button onClick={onOpen} colorScheme='primary' rounded='base' ml='4'>Join Class</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ClassRoom; 