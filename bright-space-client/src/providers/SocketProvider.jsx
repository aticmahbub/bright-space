import { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {

    useEffect(() => {
        const socket = io('http://localhost:3000', {
            auth: {
                token: 'abcd'
            }
        });
        socket.on('test-event', (msg) => {
            console.log(msg);
        })
    }, []);

    const socketInfo = {};

    return (
        <SocketContext.Provider value={socketInfo}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;