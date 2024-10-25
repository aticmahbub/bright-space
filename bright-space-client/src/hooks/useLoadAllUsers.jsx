import { useEffect, useState } from "react";

const useLoadUsers = () => {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return [users]
};

export default useLoadUsers;