import classroom from '../../Lotties/classroom.json'
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import Lottie from "lottie-react";
import JoinClsModal from '../../components/JoinClsModal/JoinClsModal';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useMutation } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useRole from '../../hooks/useRole';

const ClassRoom = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { user } = useAuth();
    const role = useRole();
    console.log(user?.uid, role);

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

    const { mutate: mutateUserInfo } = useMutation({
        mutationKey: ['meetingToken'],
        mutationFn: async (info) => {
            const res = await axiosPublic.post('/meetingToken', info);
            return res.data;
        },
        onSuccess: (data) => {
            localStorage.setItem('meetToken', data.token);
        }
    });

    const generateMeetingCode = () => {
        const userInfo = {
            name: user?.displayName,
            email: user?.email,
            userId: user?.uid,
            role: role
        }
        mutateUserInfo(userInfo);

        const meetingCode = 'classroom-' + Math.random().toString(36).substr(2, 8);
        mutate({ meetCode: meetingCode });
    };

    return (
        <Box className='min-h-[calc(100vh-101px)]'>
            <JoinClsModal title='Join Class' isOpen={isOpen} onClose={onClose} />
            <Box display='flex' gap='8' alignItems='center' justifyContent='center' flexDir='column' my='20'>
                <Lottie className='w-full md:w-[650px]' animationData={classroom} />
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