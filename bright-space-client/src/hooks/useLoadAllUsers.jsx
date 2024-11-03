import { useEffect, useState } from "react";

const useLoadUsers = () => {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://bright-space-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return [users]
};

export default useLoadUsers;