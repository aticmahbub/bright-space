import { Avatar, AvatarBadge, Box, IconButton, Input, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import { IoIosPaperPlane, IoMdChatboxes } from 'react-icons/io';
import { SiGoogleassistant } from "react-icons/si";
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Assistant = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);

    const now = new Date();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    const currentTime = `${hours}:${formatMinutes} ${amPm}`;

    const { mutate: promptMutate } = useMutation({
        mutationKey: ['prompt'],
        mutationFn: async (prompt) => {
            const res = await axios.post('https://bright-space-server-abid-hasan-rafis-projects.vercel.app/generate', prompt);
            return res.data;
        },
        onSuccess: (data) => {
            const assistantRes = {
                message: data.response,
                role: 'assistant',
                time: currentTime
            };
            setMessages((prev) => [...prev, assistantRes]);
            console.log(data);
        }
    });

    useEffect(() => {
        promptMutate({ prompt: 'Please just write this: Hello! 👋 How can I help you today? 😊' });
    }, [promptMutate]);

    const handleTypingPrompt = (e) => {
        const text = e.target.value;
        setInputText(text);
    };

    const handleSendMessage = () => {
        if (!inputText) {
            return;
        }
        const userRes = {
            message: inputText,
            role: 'user',
            time: currentTime
        };
        setMessages((prev) => [...prev, userRes]);
        promptMutate({ prompt: inputText });
        setInputText('');
    };

    return (
        <Popover placement='top-end' isLazy>
            <PopoverTrigger>
                <IconButton
                    size='lg'
                    isRound={true}
                    variant='solid'
                    colorScheme='primary'
                    aria-label='Done'
                    fontSize='20px'
                    icon={<IoMdChatboxes />}
                />
            </PopoverTrigger>
            <PopoverContent w={{ base: '360px', md: '400px' }} h='460px'>
                <PopoverHeader display='flex' alignItems='center' gap='2' py='3' fontWeight='semibold' roundedTop='md' bg='primary.500'>
                    <Avatar size='sm' bg='black' border='2px' icon={<SiGoogleassistant fontSize='1rem' />}>
                        <AvatarBadge boxSize='0.9em' bg='green.500' />
                    </Avatar>
                    <Text textColor='white'>Assistant</Text>
                </PopoverHeader>
                <PopoverBody
                    overflowY='auto'
                    flex='1'
                    ref={(el) => {
                        if (el) {
                            el.scrollTop = el.scrollHeight;
                        }
                    }}
                >
                    {
                        messages.map((message, idx) => <Box key={idx} display='flex' gap='2' mt='2' justifyContent={message.role !== 'user' ? 'left' : 'right'}>
                            <Avatar display={message.role !== 'assistant' ? 'none' : 'flex'} size='sm' bg='black' border='2px' icon={<SiGoogleassistant fontSize='1rem' />} />
                            <Box>
                                <Text w='max-content' maxW={{ base: '295px', md: '317px' }} bg={message.role !== 'assistant' ? 'primary.500' : 'primary.50'} px='4' py='2' roundedBottom='md' roundedTopRight='md'>{message.message}</Text>
                                <Text fontSize='xs' mt='1' textAlign={message.role !== 'user' ? 'start' : 'end'}>{message.time}</Text>
                            </Box>
                        </Box>)
                    }
                </PopoverBody>
                <PopoverFooter display='flex' py='3'>
                    <Input onChange={handleTypingPrompt} onKeyUp={(e) => e.key === 'Enter' && handleSendMessage()} value={inputText} type='text' placeholder='Write a message' name='message' focusBorderColor='primary.500' />
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