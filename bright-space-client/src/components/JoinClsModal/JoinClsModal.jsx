import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Text,
    Avatar,
    Input,
} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinClsModal = ({ title, isOpen, onClose }) => {
    const [meetCode, setMeetCode] = useState('');
    const navigate = useNavigate();

    const handleMeetCode = e => {
        e.preventDefault();
        const code = e.target.value;
        setMeetCode(code);
    };

    const handleJoinMeeting = () => {
        navigate(`/live/${meetCode}`);
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent rounded='lg'>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box border='1px' borderColor='gray' rounded='md' p='4'>
                        <Text>You&apos;re currently signed in as</Text>
                        <Box display='flex' gap='3' mt='3'>
                            <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Box>
                                <Text fontWeight='600'>John Doe</Text>
                                <Text>johndoe@mail.com</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box border='1px' borderColor='gray' rounded='md' p='4' mt='4'>
                        <Text>Class code</Text>
                        <Text>Ask your teacher for the class code, then enter it here.</Text>
                        <Input onChange={handleMeetCode} type='text' placeholder='Code' size='lg' maxW={52} min={7} mt='4' focusBorderColor='primary.500' rounded='base' />
                    </Box>
                </ModalBody>
                <ModalFooter gap='4'>
                    <Button onClick={onClose} colorScheme='primary' variant='ghost'>Close</Button>
                    <Button onClick={handleJoinMeeting} colorScheme='primary' isDisabled={meetCode === '' ? true : false}>Join</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default JoinClsModal;