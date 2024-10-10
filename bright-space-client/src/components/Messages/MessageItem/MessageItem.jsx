import { MenuItem, Flex, Box, Image, Text, Icon } from '@chakra-ui/react';
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const MessageItem = ({ message }) => {
    const { userName, userImage, userMessage, userActiveStatus, messageTime, messageStatus } = message;
    return (
        <MenuItem display="flex" flexDirection="column" my={'10px'} rounded={'xl'} py={'18px'} px={'18px'}>
            <Flex justifyContent={'space-between'} w={'full'}>
                <Box position="relative" >
                    <Image src={userImage} borderRadius="full" boxSize="40px" />
                    <Box position="absolute" bottom="1.5" right="-0.5" bg={`${userActiveStatus === true ? "green.500" : "gray.500"}`} borderRadius="full" boxSize="13px" border={'2px'} borderColor={'white'}></Box>
                </Box>
                <Box ml="3">
                    <Text fontWeight="bold">
                        {userName}
                    </Text>
                    <Text fontSize="sm">
                        {userMessage}
                    </Text>
                </Box>
                <Box ml="auto" display="flex" flexDirection="column" alignItems="flex-end">
                    <Text fontSize="sm" color="gray.500">
                        {messageTime}
                    </Text>
                    {
                        messageStatus === "seen" ?
                            <Icon as={FaCheckCircle} color="gray.500" w={'12px'} />
                            : <Icon as={FaCircle} color="green.500" w={'7px'} />
                    }
                </Box>
            </Flex>
        </MenuItem>
    );
};

export default MessageItem;