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
    NumberInput,
    NumberInputField,
} from '@chakra-ui/react'

const JoinClsModal = ({ title, isOpen, onClose }) => {
    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent rounded='none'>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box border='1px' borderColor='gray' p='4'>
                        <Text>You&apos;re currently signed in as</Text>
                        <Box display='flex' gap='3' mt='3'>
                            <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Box>
                                <Text fontWeight='600'>John Doe</Text>
                                <Text>johndoe@mail.com</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box border='1px' borderColor='gray' p='4' mt='4'>
                        <Text>Class code</Text>
                        <Text>Ask your teacher for the class code, then enter it here.</Text>
                        <NumberInput size='lg' maxW={52} min={7} mt='4'>
                            <NumberInputField placeholder='Class code' rounded='none' fontSize='medium' />
                        </NumberInput>
                    </Box>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} colorScheme='primary' rounded='none' variant='ghost'>Close</Button>
                    <Button colorScheme='secondary' rounded='none' variant='ghost'>Join</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default JoinClsModal;