import { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(io('http://localhost:3000', {
            auth: {
                token: 'abcd'
            }
        }));
    }, []);

    const socketInfo = { socket };

    return (
        <SocketContext.Provider value={socketInfo}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;