import { Avatar, AvatarBadge, Button, IconButton, Input, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import { IoIosPaperPlane, IoMdChatboxes } from 'react-icons/io';
import { SiGoogleassistant } from "react-icons/si";
import { CiPaperplane } from "react-icons/ci";
import { FaPaperPlane } from 'react-icons/fa';

const Assistant = () => {
    return (
        <Popover placement='top-end' isLazy>
            <PopoverTrigger>
                <IconButton
                    pos='fixed'
                    right='5'
                    bottom='5'
                    size='lg'
                    isRound={true}
                    variant='solid'
                    colorScheme='primary'
                    aria-label='Done'
                    fontSize='20px'
                    icon={<IoMdChatboxes />}
                />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader display='flex' alignItems='center' gap='2' py='3' fontWeight='semibold' roundedTop='base' bg='primary.500'>
                    <Avatar size='sm' bg='black' border='2px' icon={<SiGoogleassistant fontSize='1rem' />}>
                        <AvatarBadge boxSize='0.9em' bg='green.500' />
                    </Avatar>
                    <Text textColor='white'>Assistant</Text>
                </PopoverHeader>
                <PopoverBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore.
                </PopoverBody>
                <PopoverFooter display='flex' py='3'>
                    <Input placeholder='Write a message' focusBorderColor='primary.500' />
                    <IconButton
                        variant='ghost'
                        _hover={{bg: 'none'}}
                        colorScheme='primary'
                        aria-label='Call Sage'
                        fontSize='24px'
                        icon={<IoIosPaperPlane />}
                    />
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
};

export default Assistant;