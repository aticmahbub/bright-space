import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
    Flex,
    Image,
    Box,
    Text,
} from '@chakra-ui/react'
import { FaCheck, FaEnvelope } from "react-icons/fa";


const Messages = () => {

    
    return (
        <div>
            <Menu>
                <MenuButton>
                    <Icon as={FaEnvelope} />
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Flex>
                            <Image src="https://via.placeholder.com/150" borderRadius="full" boxSize="40px" />
                            <Box ml="3">
                                <Text fontWeight="bold">
                                    John Doe
                                </Text>
                                <Text fontSize="sm">
                                    This is a test message
                                </Text>
                            </Box>
                            <Box ml="auto">
                                <Text fontSize="sm" color="gray.500">
                                    12:00 PM
                                </Text>
                                <Icon as={FaCheck} color="gray.500" />
                            </Box>
                        </Flex>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
};

export default Messages;