import { Avatar, AvatarBadge, IconButton, Input, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import { IoIosPaperPlane, IoMdChatboxes } from 'react-icons/io';
import { SiGoogleassistant } from "react-icons/si";
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Assistant = () => {
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([]);

    const { mutate: promptMutate } = useMutation({
        mutationKey: ['prompt'],
        mutationFn: async (prompt) => {
            const res = await axios.post('https://bright-space-server-abid-hasan-rafis-projects.vercel.app/generate', prompt);
            return res.data;
        },
        onSuccess: (data) => {
            const assistantRes = {
                message: data.response,
                role: 'assistant'
            };
            setMessages((prev) => [...prev, assistantRes]);
            setIsTyping(false);
        }
    });

    const handleTypingPrompt = (e) => {
        const text = e.target.value;
        setInputText(text);
    };

    const handleSendMessage = () => {
        if(!inputText) {
            return;
        }
        setIsTyping(true);
        const userRes = {
                message: inputText,
                role: 'user'
            };
            setMessages((prev) => [...prev, userRes]);
            setIsTyping(false);
        promptMutate({ prompt: inputText });
        setInputText('');
    };

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
                    <Input onChange={handleTypingPrompt} value={inputText} type='text' placeholder='Write a message' name='message' focusBorderColor='primary.500' />
                    <IconButton
                        onClick={handleSendMessage}
                        variant='ghost'
                        _hover={{ bg: 'none' }}
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