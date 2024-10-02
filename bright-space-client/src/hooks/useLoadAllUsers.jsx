import { useEffect, useState } from "react";

const useLoadAllUsers = () => {
    
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/allUsers')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, []);

    return [allUsers]
};

export default useLoadAllUsers;