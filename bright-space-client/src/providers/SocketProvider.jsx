import { createContext } from "react";

export const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {

    const socketInfo = {};

    return (
        <SocketContext.Provider value={socketInfo}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;