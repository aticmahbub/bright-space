import {
    Icon,
    Menu,
    MenuButton,
    MenuList,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import MessageItem from './MessageItem/MessageItem';


const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/message.json');
            const data = await response.json();
            setMessages(data);
        };

        fetchData();
    }, []);

    console.log(messages);

    return (
        <div>
            <Menu>
                <MenuButton>
                    <Icon as={FaEnvelope}  color={'gray.500'}/>
                </MenuButton>
                <MenuList overflowY="auto" maxH="300px" mt={'10px'}>
                    {
                        messages.map(message => <MessageItem key={message.id} message={message} />)
                    }
                </MenuList>
            </Menu>
        </div>
    );
};

export default Messages;